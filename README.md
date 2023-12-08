This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

If you'd like to create a NextJS App from boilerplate, use this command in terminal:

```
npx create-next-app@latest
```

Use the following defaults:

```
✔ What is your project named? … nextjs-shop
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*
```

## PayPal Button and Messaging Integration

Follow `PAYPAL_SETUP.md` guide

Note: You'll need to add `"use client";` at the top of both `layout.js` and `page.js` to render these components as client-side components.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Demo on Vercel

https://nextshop-ninjangai.vercel.app/
