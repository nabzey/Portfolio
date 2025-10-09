# BA Zeynab - Modern Portfolio Website

A modern, multi-page portfolio website showcasing Fullstack Development and UI/UX Design expertise. Built with React, TypeScript, and featuring a glacial theme with smooth animations, multilingual support, and an intelligent chatbot.

## 🌟 Features

### 🎨 Design & UX
- **Glacial Theme**: Beautiful ice-like animations with particles, waves, and flowing blue lights
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Typewriter effects, hover animations, and scroll reveals
- **Modern UI**: Clean, professional design with cyan/blue color palette

### 🌐 Multilingual Support
- **English & French**: Complete language switching throughout the site
- **Persistent Language**: Choice saved in localStorage
- **Chatbot Translation**: AI assistant responds in selected language

### 🤖 Smart Chatbot
- **Pricing Information**: Provides accurate service quotes
  - Website: 100,000 FCFA (fixed)
  - Web Application: 200,000 - 500,000 FCFA (based on complexity)
  - UI/UX Design: 200,000 FCFA (fixed)
- **Service Information**: Details about skills, projects, and expertise
- **Contact Guidance**: Directs users to contact forms for negotiations
- **Multilingual Responses**: Adapts to user's language preference

### 📱 Multi-Page Structure
- **Home**: Hero section with typewriter animation
- **About**: Personal introduction and values
- **Skills**: Categorized technical expertise with progress bars
- **Projects**: Portfolio showcase with media galleries
- **Experience**: Professional timeline
- **Education**: Academic background
- **Certifications**: Professional achievements
- **Contact**: Functional contact form with social links

### 🔧 Technical Features
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, alt texts
- **Performance**: Lazy loading, optimized images, efficient animations
- **Progressive Web App**: Fast loading and smooth interactions

## 🚀 Technologies Used

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for multi-page navigation

### UI & Styling
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for high-quality components
- **Framer Motion** for smooth animations
- **Lucide React** for consistent icons

### State Management & Data
- **React Query** for server state management
- **Context API** for language state
- **Local Storage** for language persistence

### Development Tools
- **ESLint** for code quality
- **TypeScript** for type safety
- **PostCSS** for CSS processing

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mon-elegante-portfolio-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── GlacialBackground.tsx  # Animated background
│   ├── Navigation.tsx      # Responsive navigation
│   ├── Footer.tsx          # Site footer
│   ├── Layout.tsx          # Page layout wrapper
│   ├── Typewriter.tsx      # Animated text effect
│   └── Chatbot.tsx         # AI assistant
├── contexts/               # React contexts
│   └── LanguageContext.tsx # Multilingual support
├── pages/                  # Page components
│   ├── Index.tsx          # Home page
│   ├── About.tsx          # About page
│   ├── Skills.tsx         # Skills page
│   ├── Projects.tsx       # Projects showcase
│   ├── Experience.tsx     # Professional experience
│   ├── Education.tsx      # Education background
│   ├── Certifications.tsx # Professional certifications
│   └── Contact.tsx        # Contact form
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── assets/                 # Static assets
```

## 🎯 Usage Guide

### Adding New Content

#### Projects
1. Add project images to `src/assets/`
2. Update the projects array in `src/pages/Projects.tsx`
3. Include screenshots, videos, or images
4. Add tech stack and descriptions

#### Skills
1. Modify the `skillCategories` array in `src/pages/Skills.tsx`
2. Update skill names, levels, and categories
3. Progress bars animate automatically

#### Language Content
1. Edit translations in `src/contexts/LanguageContext.tsx`
2. Add new keys for both English and French
3. Use the `t()` function in components

#### Chatbot Responses
1. Modify the `generateResponse` function in `src/components/Chatbot.tsx`
2. Add new keywords and responses
3. Update pricing logic as needed

### Customization

#### Colors & Theme
- Primary colors: Cyan (#06B6D4) and Blue (#3B82F6)
- Background: Gradient from blue-50 to cyan-100
- Text: White on dark backgrounds, dark on light

#### Animations
- Reduce motion for accessibility in system preferences
- Animations automatically disable on low-performance devices

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean Spaces

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=zeynabba45@gmail.com
```

### Performance Optimization
- Images are automatically optimized
- Code splitting enabled by default
- Service worker for caching (if needed)

## 📊 Pricing Information

| Service | Price (FCFA) | Details |
|---------|-------------|---------|
| Website | 100,000 | Fixed price for complete responsive website |
| Web Application | 200,000 - 500,000 | Depends on features (auth, dashboard, payments) |
| UI/UX Design | 200,000 | Fixed price for wireframes, prototypes, design systems |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**BA Zeynab**
- Email: zeynabba45@gmail.com
- Phone/WhatsApp: +221 77 365 74 35
- LinkedIn: [linkedin.com/in/zeynab-ba-4342a021a](https://linkedin.com/in/zeynab-ba-4342a021a)
- GitHub: [github.com/nabzey](https://github.com/nabzey)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
