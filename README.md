# Maksym Kostiv - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing frontend development skills and projects.

## About

This is a personal portfolio website for Maksym Kostiv, a Frontend Developer from Lviv, Ukraine. The site features a clean, modern design with smooth animations and showcases technical skills, projects, and professional experience.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean design with smooth animations using Framer Motion
- **Interactive Components**: Animated elements and hover effects
- **Multiple Pages**: Home, Projects, Resume, and Contact sections
- **CV Download**: Direct download link for professional resume
- **Contact Form**: Integrated email functionality using EmailJS

## Tech Stack

- **Frontend**: React 19, Next.js 15.3.3, TypeScript
- **Styling**: Tailwind CSS, CSS3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tools**: Next.js, ESLint
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── contact/         # Contact page
│   ├── projects/        # Projects showcase
│   ├── resume/          # Resume/CV page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── header/          # Navigation components
│   ├── footer/          # Footer component
│   └── resumeInfo/      # Resume-related components
└── constants/           # App constants and data
    └── constants.ts     # Skills, contact info, etc.
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Skills Showcased

**Technical Skills:**
- React, TypeScript, JavaScript
- Next.js, HTML5, CSS3
- Tailwind CSS

**Tools & Others:**
- Git, Webpack, Vite
- Node.js, REST APIs
- Responsive Design

## Contact Information

- **Email**: kostiv.maksym.work@gmail.com
- **Phone**: +380 (93) 655-7900
- **Location**: Lviv, Ukraine
- **Languages**: Ukrainian (Native), English (B1+), German (A1)

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

For other platforms, build the project using:
```bash
npm run build
```

## License

This project is private and for portfolio purposes.
