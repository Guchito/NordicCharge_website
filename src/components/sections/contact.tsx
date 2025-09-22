import { useState } from 'react';

import { MessageSquare, Phone, Lightbulb } from 'lucide-react';

import AnimatedSubmitButton from '../elements/animated-submit-button';

import CategoryBadge from '@/components/elements/category-badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as {
      firstname?: string;
      lastname?: string;
      email?: string;
      message?: string;
      company?: string;
    };

    // simple client guard
    if (!data.email || !data.message) {
      setStatus('error');
      setError('Please provide your email and a message.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed to send');

      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section className="hero-padding-margin container grid grid-cols-1 justify-between gap-10 md:grid-cols-2 lg:gap-10.5">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <CategoryBadge label="Contact us" icon={<Lightbulb />} />
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl lg:leading-14">
            We are here to help!
          </h1>
        </div>
        <p className="text-xl">
          You can contact us via email, phone, or by filling out the form on
          this page. We strive to respond promptly and look forward to
          connecting with you soon!
        </p>

        <div className="flex items-center gap-2.5 rounded-full">
          <div className="border-input flex size-9 items-center justify-center rounded-full border">
            <MessageSquare className="text-muted-foreground size-5" />
          </div>
          <span className="text-xl">info@nordiccharge.com</span>
        </div>
        <div className="flex items-center gap-2.5 rounded-full">
          <div className="border-input flex size-9 items-center justify-center rounded-full border">
            <Phone className="text-muted-foreground size-5" />
          </div>
          <span className="text-xl">+45 31 43 59 50</span>
        </div>
        <p className="text-xl">
          You can call us from 09:00 to 16:00 (Central European Time) every day
          of the week.
        </p>
      </div>

      <Card className="flex-1 py-8">
        <CardHeader className="gap-3 px-8">
          <h2 className="text-3xl font-bold">Write us</h2>
          <p className="text-xl">We'd love to hear from you!</p>
        </CardHeader>

        <CardContent className="px-8">
          <form className="flex flex-col gap-6" onSubmit={onSubmit} noValidate>
            {/* Honeypot (bots fill this, humans don't) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="flex gap-10">
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Jane"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type something..."
                className="min-h-[120px]"
                required
              />
            </div>

            <AnimatedSubmitButton
              className="w-full"
              type="submit" // <-- makes it submit the form
              loading={status === 'submitting'}
              aria-busy={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Submit'}
            </AnimatedSubmitButton>

            {status === 'success' && (
              <p className="text-sm text-green-600">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">
                {error ?? 'Could not send your message.'}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
