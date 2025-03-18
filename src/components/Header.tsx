import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  logoText?: string;
  navItems?: Array<{ label: string; href: string }>;
}

const Header: React.FC<HeaderProps> = ({
  logoText = "PhilCasinos",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Casinos", href: "/casinos" },
    { label: "Bonuses", href: "/bonuses" },
    { label: "Games", href: "/games" },
    { label: "About", href: "/about" },
  ],
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            {logoText}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-amber-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-gray-300 hover:text-amber-500 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-amber-500"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
