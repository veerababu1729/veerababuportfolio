import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center container-padding max-w-2xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="text-8xl md:text-9xl font-black text-gradient mb-8">404</div>
          <h1 className="text-headline font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-body text-muted-foreground mb-12 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-primary"
            >
              <Home className="w-5 h-5" />
              Go Home
            </a>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
