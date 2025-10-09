import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import GlacialBackground from './GlacialBackground';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBackground = true }) => {
  return (
    <div className="relative min-h-screen">
      {showBackground && <GlacialBackground />}
      <Navigation />
      <main className="relative z-10 pt-16">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;