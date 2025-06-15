
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/", section: "about" },
    { name: "Experience", path: "/experience", section: "experience" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Skills", path: "/skills", section: "skills" },
    { name: "Certifications", path: "/certifications", section: "certifications" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveSection(item.section);
    setIsMenuOpen(false);
    
    // If already on the target page, scroll to top
    if (location.pathname === item.path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the page
      navigate(item.path);
    }
  };

  const handleContactClick = () => {
    setActiveSection("contact");
    setIsMenuOpen(false);
    
    // If already on projects page, scroll to contact section
    if (location.pathname === "/projects") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Navigate to projects page and then scroll to contact
      navigate("/projects");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-xl font-bold text-slate-800 flex items-center hover:text-blue-400 transition-colors" 
            onClick={() => {
              setActiveSection("about");
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span className="text-blue-400">Idah</span>
            <span className="ml-1">Makena</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.section ? "text-blue-400" : "text-slate-600 hover:text-blue-400"
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            ))}
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-500 transition-colors"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`text-sm font-medium transition-colors text-left ${
                    activeSection === item.section ? "text-blue-400" : "text-slate-600 hover:text-blue-400"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-500 transition-colors text-center"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
