import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="text-center">
        <h1 className="mb-4 font-display text-5xl font-extrabold text-ink">404</h1>
        <p className="mb-4 text-ink/60">Page introuvable</p>
        <a href="/" className="text-violet font-semibold underline hover:text-violet-dark">
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
