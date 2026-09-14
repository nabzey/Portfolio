import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

// Créer un formulaire sur https://formspree.io (gratuit), destinataire zeynabba45@gmail.com,
// puis remplacer l'ID ci-dessous par celui fourni par Formspree (ex: "xanybqpr").
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") {
      toast({
        title: "Formulaire non configuré",
        description: "Remplace FORMSPREE_FORM_ID dans Contact.tsx par ton ID Formspree.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Merci, je te répondrai dès que possible.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Réponse non valide du serveur");
      }
    } catch (error) {
      toast({
        title: "Échec de l'envoi",
        description: "Une erreur est survenue, réessaie ou écris-moi directement par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-violet mb-4">CONTACT</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink mb-4">Discutons de ton projet</h1>
          <p className="text-ink/60">
            Que ce soit pour collaborer ou simplement échanger des idées, je réponds rapidement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-6">
                Me contacter
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:zeynabba45@gmail.com"
                  className="flex items-center space-x-3 text-ink/70 hover:text-violet transition-colors"
                >
                  <Mail className="w-5 h-5 text-violet" />
                  <span>zeynabba45@gmail.com</span>
                </a>
                <a
                  href="tel:+221773657435"
                  className="flex items-center space-x-3 text-ink/70 hover:text-violet transition-colors"
                >
                  <Phone className="w-5 h-5 text-violet" />
                  <span>+221 77 365 74 35</span>
                </a>
                <a
                  href="https://wa.me/221773657435"
                  className="flex items-center space-x-3 text-ink/70 hover:text-violet transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-violet" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink mb-4">
                Réseaux
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nabzey"
                  className="p-3 bg-violet-light rounded-full text-violet hover:bg-violet hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/zeynab-ba-4342a021a"
                  className="p-3 bg-violet-light rounded-full text-violet hover:bg-violet hover:text-white transition-colors"
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
            <form onSubmit={handleSubmit} className="bg-white rounded-card p-6 space-y-6 border border-ink/5 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1">
                  Nom
                </label>
                <Input id="name" type="text" required value={formData.name} onChange={handleChange} className="bg-secondary/60 border-ink/10 text-ink" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1">
                  Email
                </label>
                <Input id="email" type="email" required value={formData.email} onChange={handleChange} className="bg-secondary/60 border-ink/10 text-ink" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink/70 mb-1">
                  Sujet
                </label>
                <Input id="subject" type="text" required value={formData.subject} onChange={handleChange} className="bg-secondary/60 border-ink/10 text-ink" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1">
                  Message
                </label>
                <Textarea id="message" rows={5} required value={formData.message} onChange={handleChange} className="bg-secondary/60 border-ink/10 text-ink" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-ink hover:bg-violet text-white rounded-full py-6">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
