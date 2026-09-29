<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Throwable;

/**
 * AWJ contact form handler.
 *
 * Receives the enquiry wizard payload (JSON) and emails it to the contact
 * recipient. Replies in the same `{ ok, error }` shape the old send.php did,
 * which is what the Contact section reads.
 */
class ContactController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        // Honeypot: bots fill hidden fields. Pretend success, send nothing.
        if (filled($request->input('company_website'))) {
            return response()->json(['ok' => true]);
        }

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'email' => ['required', 'email:filter'],
            'org' => ['nullable', 'string'],
            'pillar' => ['nullable', 'string'],
            'message' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return $this->fail(422, 'Please provide your name and a valid email address.');
        }

        $data = $validator->validated();
        $org = $data['org'] ?? '';
        $pillar = $data['pillar'] ?? '';
        $message = $data['message'] ?? '';

        $subject = 'New website enquiry'.($pillar !== '' ? ' - '.$pillar : '');

        $body = implode("\n", [
            'Name:         '.$data['name'],
            'Email:        '.$data['email'],
            'Organisation: '.($org !== '' ? $org : '-'),
            'Pillar:       '.($pillar !== '' ? $pillar : '-'),
            '',
            'Message:',
            $message !== '' ? $message : '(none)',
            '',
            '--',
            'Sent from the AWJ website contact form.',
        ]);

        try {
            Mail::raw($body, function (Message $mail) use ($data, $subject) {
                $mail->to(config('mail.contact_recipient'))
                    ->replyTo($data['email'], $data['name'])
                    ->subject($subject);
            });
        } catch (Throwable $e) {
            report($e);

            return $this->fail(500, 'Could not send right now. Please email info@awj.om directly.');
        }

        return response()->json(['ok' => true]);
    }

    private function fail(int $status, string $error): JsonResponse
    {
        return response()->json(['ok' => false, 'error' => $error], $status);
    }
}
