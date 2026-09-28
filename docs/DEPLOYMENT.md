# Deployment & Developer Guide

**Project Name:** Dr. Maya Reynolds, PsyD — Clinical Psychologist Website  
**Assignment:** Stage 2 Grow My Therapy Internship Selection Process  
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  

---

## 1. Project Tech Stack & System Requirements

- **Framework:** Next.js `15.5.26` (App Router)
- **Language:** TypeScript `5.7.3`
- **Styling:** Tailwind CSS `3.4.17` + PostCSS + Autoprefixer
- **Icons:** `lucide-react`
- **Node.js Requirement:** Node.js `v18.17.0` or higher (Recommended: Node `v20.x`)
- **Package Manager:** `npm` `v9.x` or higher

---

## 2. Environment Variables

**No environment variables are required** for local development or production deployment. All therapist information is statically compiled from [`data/mayaData.ts`](file:///c:/Users/HP/Documents/Grow%20My%20Therapy_Assignment/data/mayaData.ts).

---

## 3. Local Development & Build Commands

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Step 3: Run Code Quality Checks (ESLint)
```bash
npm run lint
```

### Step 4: Create Production Build
```bash
npm run build
```

### Step 5: Test Production Server Locally
```bash
npm run start
```

---

## 4. Expected Deployment Platform

This Next.js App Router project is configured for 1-click deployment on **Vercel** or any standard Node.js hosting platform (Netlify, AWS Amplify, Render):

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node Version:** `18.x` / `20.x`
- **Environment Variables:** None needed.

---

## 5. Assignment Deliverables

- **Live Website:** [https://grow-my-therapy-frontend-assignment-one.vercel.app/](https://grow-my-therapy-frontend-assignment-one.vercel.app/)
- **GitHub Repository:** [https://github.com/ramcharan0308/grow-my-therapy-frontend-assignment](https://github.com/ramcharan0308/grow-my-therapy-frontend-assignment)
- **Loom Walkthrough:** `[Pending Loom Video Link]`
