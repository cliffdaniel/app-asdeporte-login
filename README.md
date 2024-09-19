=========
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Versión 0.1.0

## Node.js Version

This project requires Node.js version 18. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions. To install the correct version, run:

```bash
nvm use 18
nvm install
```

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Database Setup

To set up the database, run the following commands:

```bash
npx prisma migrate dev --name init
npx ts-node --project tsconfig.seed.json src/seed.ts
```

## User list

```bash
email: 'john.doe@example.com'
password: 'password123'

email: 'jane.smith@example.com'
password: 'password456'

email: 'alice.johnson@example.com'
password: 'password789'
```

## Protected routes

```bash
/dashboard
```

## Login route

```bash
/login
```
