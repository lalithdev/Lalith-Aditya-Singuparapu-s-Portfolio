<div align="center">

<h1><strong>LalithDev — Developer Portfolio</strong></h1>

<p>
  <strong>A Cinematic, High-Performance Developer Portfolio</strong><br/>
  Built with React 19 · Vite 8 · Tailwind CSS 4 · Framer Motion · Supabase
</p>

<p>
  <img src="https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer_Motion-12.38.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Supabase-2.106.2-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <a href="https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio/stargazers"><img src="https://img.shields.io/github/stars/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio?style=for-the-badge&logo=github&color=yellow" alt="GitHub Stars"/></a>
</p>

<p>
  <a href="https://meetlalith.vercel.app" target="_blank"><strong>🌐 Live Demo</strong></a> ·
  <a href="https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio" target="_blank">⚙️ GitHub Repo</a>
</p>

<p>
  ⭐ <strong>If you find this project useful, please consider giving it a star!</strong>
</p>

</div>

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [Architecture & Working Flow](#-architecture--working-flow)
4. [Project Structure](#-project-structure)
5. [Core Features](#-core-features)
6. [Supabase Integration](#-supabase-integration)
7. [Local Setup Guide](#-local-setup-guide)
8. [Environment Variables Reference](#-environment-variables-reference)
9. [Available Scripts](#-available-scripts)
10. [Author & Credits](#-author--credits)

---

## 🎯 Project Overview

This repository contains the source code for my personal developer portfolio. It is designed to be a highly interactive, visually striking, and performant web application. The design language focuses on a deep, cinematic "midnight" theme with immersive radial gradients, custom cursors, and physics-based animations.

### ✨ Highlights

- **Cinematic Scene World**: The Hero and About sections share a continuous background environment with heavily blurred indigo and midnight key lights.
- **Custom Cursor**: Replaces the default browser cursor with a custom React-driven animated cursor.
- **Scroll Animations**: Dynamic reveal animations across all sections as the user scrolls.
- **Backend as a Service (BaaS)**: Integrates with Supabase to handle contact forms or testimonials dynamically.

---

## 🛠 Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| **Core** | **React 19** | Component-based UI rendering |
| **Bundler** | **Vite 8** | Lightning-fast development server and optimized build |
| **Styling** | **Tailwind CSS v4** | Utility-first CSS framework for rapid UI development |
| **Animations** | **Framer Motion** | Declarative physics-based animations and transitions |
| **Icons** | **Lucide React & React Icons** | Lightweight, highly customizable SVG icon sets |
| **Database/BaaS** | **Supabase** | Backend services for managing dynamic data (e.g., messages) |

---

## 🏛 Architecture & Working Flow

The portfolio operates as a Single Page Application (SPA) structured modularly by UI sections. 

### 🔄 The Application Flow

1. **App Boot (`main.jsx`)**: Renders the `<App />` component wrapped in standard React StrictMode.
2. **Main Layout Load**:
   - The `<Navbar />` and `<CustomCursor />` mount instantly.
   - The global "Scene World" wrapper renders, applying cinematic gradients that span seamlessly across the `<Hero />` and `<About />` sections.
3. **Scroll & Reveal**:
   - As the user scrolls, subsequent sections mount and trigger their `framer-motion` enter animations: `<Education />`, `<Skills />`, `<Projects />`, `<Testimonials />`, and `<Contact />`.
4. **Data Layer (`src/lib/supabase.js`)**:
   - The Supabase client initializes using environment variables.
   - Contact form submissions or dynamic content requests route directly to the Supabase Postgres backend.

---

## 📁 Project Structure

```text
Lalith-Aditya-Singuparapu-s-Portfolio/
│
├── .env                       # Supabase environment variables (Not committed)
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration for code quality
├── index.html                 # HTML application shell
├── package-lock.json          # Dependency lockfile
├── package.json               # Project dependencies and npm scripts
├── vite.config.js             # Vite bundler configuration
│
├── public/                    # Static public assets
│
└── src/
    ├── App.jsx                # Main layout and section orchestration
    ├── index.css              # Global styles and Tailwind v4 CSS
    ├── main.jsx               # React DOM mounting point
    │
    ├── assets/                # Local images, SVGs, and brand assets
    │
    ├── components/
    │   ├── common/            # Reusable UI components
    │   │   ├── AnimatedText.jsx
    │   │   ├── Button.jsx
    │   │   ├── Card3D.jsx
    │   │   ├── ContactButton.jsx
    │   │   ├── Container.jsx
    │   │   ├── FadeIn.jsx
    │   │   ├── IosEmoji.jsx
    │   │   ├── Magnetic.jsx
    │   │   └── SectionTitle.jsx
    │   ├── layout/            # Layout structure elements
    │   │   ├── CustomCursor.jsx
    │   │   ├── Footer.jsx
    │   │   ├── HeroTransition.jsx
    │   │   ├── Navbar.jsx
    │   │   └── ScrollToTop.jsx
    │   ├── sections/          # Core portfolio page sections
    │   │   ├── About.jsx
    │   │   ├── Achievements.jsx
    │   │   ├── Certifications.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Education.jsx
    │   │   ├── ExtraActivities.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Skills.jsx
    │   │   └── Testimonials.jsx
    │   │
    │   └── GoogleIntro/       # [In Development] Experimental intro sequence
    │
    ├── constants/
    │   └── data.js            # Hardcoded static content (Skills, Projects, etc.)
    │
    ├── data/                  # Extended portfolio data
    │   └── portfolio.jsx
    │
    ├── hooks/                 # Custom React hooks (e.g., useScroll, useWindowSize)
    │
    ├── lib/
    │   └── supabase.js        # Supabase client initialization
    │
    ├── styles/                # Additional module-specific styles
    │
    └── utils/                 # Helper functions and utilities
```

---

## 🚀 Core Features

### 1. Cinematic Environment Lighting
Instead of hard borders between sections, the `Hero` and `About` components share a single, massive background wrapper. This wrapper uses massive, heavily blurred radial gradients to simulate 3D atmospheric lighting, creating a highly immersive experience.

### 2. Custom Cursor Tracking
Replaces the standard pointer with a custom `<CustomCursor />` element built in React and Framer Motion, which reacts smoothly to links, buttons, and user interaction states.

### 3. Smooth Physics Animations
Every section uses Framer Motion's `useInView` or `motion.div` attributes to orchestrate entry animations. Elements slide up, fade in, and scale elegantly based on the user's scroll position.

### 🚧 Future Enhancements
- **Google Search Intro Sequence**: Currently in development within the `GoogleIntro` directory, this upcoming feature simulates a user searching for my name on Google, seeing the results, and "clicking" into the portfolio before the main Hero renders.

---

## 🗄️ Supabase Integration

This project uses **Supabase** for backend operations. 

**Client Initialization (`src/lib/supabase.js`):**
```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## ⚙️ Local Setup Guide

Follow these steps to run the portfolio locally.

### Step 1: Clone the Repository
```bash
git clone https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio.git
cd Lalith-Aditya-Singuparapu-s-Portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Start the Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

---

## 🔑 Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `VITE_SUPABASE_URL` | ✅ Yes | Your Supabase Project URL |
| `VITE_SUPABASE_ANON_KEY` | ✅ Yes | Your Supabase Publishable API Key |

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement |
| `npm run build` | Builds the app for production to the `dist` folder |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs ESLint to catch errors and enforce code style |

---

## 👨‍💻 Author & Credits

<div align="center">

| | |
|:---:|:---|
| <img src="https://avatars.githubusercontent.com/lalithdev" width="80" style="border-radius:50%"/> | **Lalith Aditya S** *(LalithDev)*<br/>Full-Stack Developer · Designer · Builder<br/>📍 India |

</div>

| Platform | Link |
|---|---|
| 🌐 **Portfolio** | [meetlalith.vercel.app](https://meetlalith.vercel.app) |
| 💼 **LinkedIn** | [linkedin.com/in/lalith-aditya-singuparapu](https://www.linkedin.com/in/lalith-aditya-singuparapu) |
| 🐙 **GitHub** | [github.com/lalithdev](https://github.com/lalithdev) |
| 📧 **Email** | [lalithadityasinguparapu@gmail.com](mailto:lalithadityasinguparapu@gmail.com) |

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Lalith Aditya S (LalithDev)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <p>Built with ❤️ by <a href="https://meetlalith.vercel.app" target="_blank"><strong>Lalith Aditya S</strong></a></p>
  <p>
    <a href="https://github.com/lalithdev/Lalith-Aditya-Singuparapu-s-Portfolio" target="_blank">📦 GitHub Repository</a> ·
    <a href="https://www.linkedin.com/in/lalith-aditya-singuparapu" target="_blank">💼 LinkedIn</a> ·
    <a href="https://meetlalith.vercel.app" target="_blank">🌐 Portfolio</a>
  </p>
</div>
