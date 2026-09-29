<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mime\Email;
use Tests\TestCase;

class ContactTest extends TestCase
{
    /** @return list<Email> Messages caught by the array mailer phpunit.xml selects. */
    private function sentEmails(): array
    {
        return Mail::mailer()->getSymfonyTransport()->messages()
            ->map(fn ($sent) => $sent->getOriginalMessage())
            ->all();
    }

    public function test_an_enquiry_is_emailed_to_the_contact_recipient(): void
    {
        $this->postJson('/contact', [
            'pillar' => 'systems',
            'name' => 'Aisha Al-Harthy',
            'email' => 'aisha@example.com',
            'org' => 'Example LLC',
            'message' => 'We would like to talk.',
            'company_website' => '',
        ])->assertOk()->assertExactJson(['ok' => true]);

        $emails = $this->sentEmails();
        $this->assertCount(1, $emails);

        $email = $emails[0];
        $this->assertSame('info@awj.om', $email->getTo()[0]->getAddress());
        $this->assertSame('aisha@example.com', $email->getReplyTo()[0]->getAddress());
        $this->assertSame('Aisha Al-Harthy', $email->getReplyTo()[0]->getName());
        $this->assertSame('New website enquiry - systems', $email->getSubject());
        $this->assertStringContainsString('Organisation: Example LLC', $email->getTextBody());
        $this->assertStringContainsString('We would like to talk.', $email->getTextBody());
    }

    public function test_optional_fields_fall_back_to_placeholders(): void
    {
        $this->postJson('/contact', [
            'name' => 'Aisha',
            'email' => 'aisha@example.com',
        ])->assertOk();

        $email = $this->sentEmails()[0];
        $this->assertSame('New website enquiry', $email->getSubject());
        $this->assertStringContainsString('Organisation: -', $email->getTextBody());
        $this->assertStringContainsString("Message:\n(none)", $email->getTextBody());
    }

    public function test_a_missing_name_or_bad_email_is_rejected_in_the_shape_the_form_reads(): void
    {
        $error = ['ok' => false, 'error' => 'Please provide your name and a valid email address.'];

        $this->postJson('/contact', ['name' => '  ', 'email' => 'aisha@example.com'])
            ->assertStatus(422)->assertExactJson($error);

        $this->postJson('/contact', ['name' => 'Aisha', 'email' => 'not-an-email'])
            ->assertStatus(422)->assertExactJson($error);

        $this->assertCount(0, $this->sentEmails());
    }

    public function test_the_honeypot_pretends_to_succeed_without_sending(): void
    {
        $this->postJson('/contact', [
            'name' => 'Bot',
            'email' => 'bot@example.com',
            'company_website' => 'https://spam.example',
        ])->assertOk()->assertExactJson(['ok' => true]);

        $this->assertCount(0, $this->sentEmails());
    }
}
