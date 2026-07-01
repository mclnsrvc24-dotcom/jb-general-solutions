# JB General Solutions Service — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built for deployment on
Vercel via GitHub.

## What's here

- `app/page.tsx` — homepage, assembles all sections
- `components/` — Header, Hero, Services, Gallery, About, Contact, Footer
- `app/api/contact/route.ts` — serverless function that emails contact form
  submissions using Resend
- `public/logo.png` — brand logo (from the uploaded PNG)

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Visit `http://localhost:3000`.

## Contact form — Resend setup (required before the form will send email)

1. Create a free account at https://resend.com (3,000 emails/month free).
2. Generate an API key in the Resend dashboard.
3. Locally: put it in `.env.local` as `RESEND_API_KEY=...`
4. On Vercel: Project Settings → Environment Variables → add
   `RESEND_API_KEY` for Production (and Preview, if you want form testing on
   preview deploys too).
5. **Once you register a domain**, verify it in Resend and update the
   `from` address in `app/api/contact/route.ts` (currently
   `onboarding@resend.dev`, Resend's shared testing sender — it works, but a
   branded sender address is more trustworthy and has better deliverability).

Submissions are sent to `jbgeneralsolutionserv@gmail.com` with `replyTo` set
to the customer's email, so hitting "Reply" in Gmail goes straight back to
them.

## Deploying (GitHub → Vercel)

1. Push this repo to GitHub.
2. In Vercel: **New Project** → import the GitHub repo → it will
   auto-detect Next.js, no config changes needed.
3. Add the `RESEND_API_KEY` environment variable in Vercel before your
   first deploy (or redeploy after adding it).
4. You'll get a `*.vercel.app` URL immediately. Add a custom domain later
   under Project Settings → Domains — no code changes required.

## Things intentionally left as placeholders

- **Gallery photos** (`components/Gallery.tsx`): currently labeled
  placeholder tiles by category, not real images. To swap in real photos,
  drop images into `public/gallery/`, then replace the placeholder `<div>`
  block for each category with an `<Image src="/gallery/your-file.jpg" ... />`.
  Ask me for this swap when photos are ready — it's a quick change.
- **Domain-based email sending** — see Resend setup above.
- **License number / years in business**: not included since these weren't
  provided. Add them to `components/About.tsx` under the trust points
  whenever you have them — this kind of detail meaningfully helps
  conversion for a trades business.

## Notes on decisions made during the build

- No street address is displayed anywhere on the site or implied in copy —
  the business mailing address (Austin) differs from the actual service
  area (Killeen/Central Texas), and showing it would hurt local SEO and
  confuse customers about whether the business travels to them. Recommend
  setting up the Google Business Profile as a **service-area business**
  (no public address, just service area + phone) to match.
- Services list matches exactly what's on the business card: Windows/Doors
  Installation, Drywall Repair, Trim Molding, Electrical, Plumbing,
  Masonry. Nothing was added.
- Booking is a direct-to-email contact form, not a calendar scheduler — the
  Google Calendar API route was ruled out because OAuth apps in "Testing"
  mode (required until a verified domain exists) expire refresh tokens
  every 7 days, which would break booking weekly.
