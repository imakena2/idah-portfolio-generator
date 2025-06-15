
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/", section: "about" },
    { name: "Experience", path: "/experience", section: "experience" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Skills", path: "/skills", section: "skills" },
    { name: "Certifications", path: "/certifications", section: "certifications" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-slate-800 flex items-center hover:text-blue-500 transition-colors" onClick={() => setActiveSection("about")}>
            <span className="text-blue-500">Idah</span>
            <span className="ml-1">Makena</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.section ? "text-blue-500" : "text-slate-600 hover:text-blue-500"
                }`}
                onClick={() => setActiveSection(item.section)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/projects#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-500"
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
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.section ? "text-blue-500" : "text-slate-600 hover:text-blue-500"
                  }`}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/projects#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors text-center"
                onClick={() => {
                  setActiveSection("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
