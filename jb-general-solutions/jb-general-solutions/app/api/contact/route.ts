import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "jbgeneralsolutionserv@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, service, message, company } =
      await req.json();

    // Honeypot check (defense in depth — client already filters this)
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Update this once a custom domain is verified in Resend.
      from: "JB General Solutions Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New quote request — ${service} (${name})`,
      text: `New contact form submission from the website:

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message}
`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
