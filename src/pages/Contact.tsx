import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-lg text-cyan-100">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:zeynab@example.com"
                  className="flex items-center space-x-3 text-cyan-100 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>zeynab@example.com</span>
                </a>
                <a
                  href="tel:+221123456789"
                  className="flex items-center space-x-3 text-cyan-100 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+221 12 345 67 89</span>
                </a>
                <a
                  href="https://wa.me/221123456789"
                  className="flex items-center space-x-3 text-cyan-100 hover:text-cyan-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zeynab"
                  className="p-2 bg-white/10 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/zeynab"
                  className="p-2 bg-white/10 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-lg p-6 space-y-6 border border-white/20">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-100 mb-1">
                  Name
                </label>
                <Input id="name" type="text" required className="bg-white/10 border-white/20 text-white placeholder-cyan-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-100 mb-1">
                  Email
                </label>
                <Input id="email" type="email" required className="bg-white/10 border-white/20 text-white placeholder-cyan-200" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cyan-100 mb-1">
                  Subject
                </label>
                <Input id="subject" type="text" required className="bg-white/10 border-white/20 text-white placeholder-cyan-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-100 mb-1">
                  Message
                </label>
                <Textarea id="message" rows={5} required className="bg-white/10 border-white/20 text-white placeholder-cyan-200" />
              </div>
              <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;