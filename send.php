<?php
/**
 * AWJ contact form handler.
 * Receives the enquiry wizard payload (JSON) and emails it to info@awj.om.
 * Ships in the static build (Vite copies /public into /dist) and runs on the
 * Plesk host's PHP. Since info@awj.om is a mailbox on the same domain, local
 * delivery via mail() is reliable.
 */

header('Content-Type: application/json; charset=utf-8');

$RECIPIENT = 'info@awj.om';

function fail($code, $msg) {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed.');
}

// Accept JSON body, fall back to form-encoded.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: bots fill hidden fields. Pretend success, send nothing.
if (!empty($data['company_website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$org     = trim($data['org'] ?? '');
$pillar  = trim($data['pillar'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Please provide your name and a valid email address.');
}

// Strip newlines from header-bound values to prevent header injection.
$clean = function ($v) {
    return str_replace(["\r", "\n"], ' ', $v);
};

$subject = 'New website enquiry' . ($pillar !== '' ? ' - ' . $clean($pillar) : '');

$body = implode("\n", [
    'Name:         ' . $name,
    'Email:        ' . $email,
    'Organisation: ' . ($org !== '' ? $org : '-'),
    'Pillar:       ' . ($pillar !== '' ? $pillar : '-'),
    '',
    'Message:',
    $message !== '' ? $message : '(none)',
    '',
    '--',
    'Sent from the AWJ website contact form.',
]);

$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'awj.om');

$headers = [
    'From: AWJ Website <no-reply@' . $host . '>',
    'Reply-To: ' . $clean($name) . ' <' . $clean($email) . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$sent = @mail($RECIPIENT, $encodedSubject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    fail(500, 'Could not send right now. Please email info@awj.om directly.');
}
