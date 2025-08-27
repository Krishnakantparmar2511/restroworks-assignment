# Restroworks Frontend

A modern Next.js website with multi-language support and dynamic content from a CMS backend.

## ✨ Features

### 🌍 Multi-Language Support
- **English** (`/en`) - Default language
- **Spanish** (`/es`) - Secondary language
- **Language switcher** in the navigation
- **Auto-detection** based on browser settings

### 📱 Responsive Design
- **Mobile-first** approach
- **Desktop optimized** layouts
- **Tablet responsive** breakpoints
- **Touch-friendly** interactions

### 🎨 UI Components
- **Hero Section** - Eye-catching landing area with call-to-action buttons
- **Features Grid** - Showcase of key business benefits
- **Testimonials** - Customer reviews and feedback
- **Contact Form** - Working contact submission
- **Call-to-Action** - Conversion-focused sections

### ⚡ Performance Features
- **Loading skeletons** while content loads
- **Optimized images** with Next.js Image component
- **Fast page transitions** with App Router
- **SEO optimized** with dynamic metadata

## 🗺️ Available Pages & URLs

### Homepage
- **English**: `/en` or `/` (default)
- **Spanish**: `/es`
- **Features**: Hero, features, testimonials, CTA sections

### Contact Page
- **English**: `/en/contact`
- **Spanish**: `/es/contact`
- **Features**: Contact form, company information

### Language-Specific Routes
- **English Homepage**: `http://localhost:3000/en`
- **Spanish Homepage**: `http://localhost:3000/es`
- **English Contact**: `http://localhost:3000/en/contact`
- **Spanish Contact**: `http://localhost:3000/es/contact`

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment
Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### 3. Run the frontend
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Dynamic language routing
│   │   ├── page.tsx       # Homepage
│   │   └── contact/       # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/             # Reusable UI components
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── Testimonial.tsx    # Testimonials
│   ├── CTA.tsx            # Call-to-action
│   └── LanguageSwitcher.tsx # Language toggle
├── lib/                    # Utilities
│   └── cms.ts             # CMS data fetching
└── i18n/                   # Internationalization
    ├── setting.ts          # Language config
    └── request.ts          # Language detection
```

## 🎯 Key Frontend Features

### Dynamic Content Loading
- **CMS Integration** - All content comes from backend API
- **Loading States** - Skeleton loaders while fetching data
- **Error Handling** - Graceful fallbacks if API fails

### SEO Optimization
- **Dynamic Meta Tags** - Titles and descriptions from CMS
- **Sitemap Generation** - Automatic `/sitemap.xml`
- **Robots.txt** - Search engine directives
- **Language Alternates** - Proper hreflang tags

### User Experience
- **Smooth Navigation** - Fast page transitions
- **Interactive Elements** - Hover effects and animations
- **Accessibility** - Semantic HTML and ARIA labels
- **Form Validation** - Contact form error handling

## 🔧 Development Commands

```bash
# Development
npm run dev         # Start dev server
npm run build       # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run type-check  # Check TypeScript
```


## 🎨 Styling & Design

- **TailwindCSS** for utility-first styling
- **Custom components** for consistent design
- **Responsive breakpoints** for all devices
- **Modern design** with clean aesthetics


## 💡 Frontend Highlights

- **Next.js 14 App Router** for modern React development
- **TypeScript** for better code quality and developer experience
- **Component-based architecture** for maintainable code
- **Performance optimized** with Next.js best practices
- **SEO ready** out of the box
- **Accessibility focused** for inclusive design

