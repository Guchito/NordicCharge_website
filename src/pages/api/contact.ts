// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ] as string,
  );

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing API key' }),
        { status: 500 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const {
      firstname = '',
      lastname = '',
      email = '',
      message = '',
      company = '',
    } = body;

    if (company)
      return new Response(JSON.stringify({ ok: true }), { status: 200 }); // honeypot

    if (!isEmail(email) || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid input' }),
        { status: 400 },
      );
    }

    const subject = `Website contact: ${firstname} ${lastname}`.trim();
    const html = `<div>
      <p><strong>From:</strong> ${escapeHtml(firstname)} ${escapeHtml(lastname)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    </div>`;

    // IMPORTANT: 'from' must be a verified sender/domain in Resend
    const from = import.meta.env.RESEND_FROM || 'web@nordiccharge.com';
    const to = (import.meta.env.CONTACT_TO || 'info@nordiccharge.com').split(
      ',',
    );

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email,
    });

    // Log the exact provider response
    console.log('Resend send result:', result);

    if (result.error) {
      return new Response(
        JSON.stringify({ ok: false, error: result.error.message }),
        { status: 500 },
      );
    }
    return new Response(JSON.stringify({ ok: true, id: result.data?.id }), {
      status: 200,
    });
  } catch (e: any) {
    console.error('CONTACT ERROR:', e);
    return new Response(
      JSON.stringify({ ok: false, error: e?.message || 'Server error' }),
      { status: 500 },
    );
  }
};
