# aancu

Website for **aancu** — Edinburgh outdoor services covering pressure washing, garden maintenance, outdoor clearance and commercial properties across EH1–EH30.

Live site: [aancu.com](https://aancu.com)  
Designed and built by [etu.is](https://etu.is)

---

## Stack

- [Next.js 15](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Umami Analytics](https://umami.is) — self-hosted, cookieless
- Deployed on [Netlify](https://netlify.com)

---

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Build

```bash
bun run build
```

---

## Project Structure

```
src/
  app/                  # Pages and layouts (App Router)
    projects/[slug]/    # Dynamic project pages
    privacy/            # Privacy policy
    terms/              # Terms of service
    sitemap.ts          # Auto-generated sitemap
  components/           # UI components
  lib/
    projects.ts         # Project data — add new projects here
public/
  qr-codes/            # WhatsApp QR code assets
  images/              # Local image assets
```

---

## Adding a Project

Open `src/lib/projects.ts` and add a new entry to the `projects` array. The project page and sitemap update automatically.

---

## Environment

No environment variables required. Contact form posts to `https://ipa.ainic.org/contact`.