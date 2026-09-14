import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-surface">
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;