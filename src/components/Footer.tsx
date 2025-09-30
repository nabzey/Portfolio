const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} BA Zeynab. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/nabzey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/zeynab-ba-4342a021a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
