import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { siteData } from "../../data/siteData";

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavigation: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavigation,
}) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border py-3 shadow-sm text-foreground"
          : "bg-transparent py-6 text-white",
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-3 group"
          onClick={() => handleNavigation("start")}
        >
          <div
            className={cn(
              "p-2 rounded-lg transition-transform duration-300 shadow-lg",
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white/10 backdrop-blur-md text-primary border border-white/20",
            )}
          >
            <img src={siteData.logo_full} alt="Logo" className="h-10 w-10" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span
              className={cn(
                "text-3xl font-display font-bold tracking-wider transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              Bistro Burger
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase w-full text-left">
              Szczecin
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {siteData.navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.id)}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary bg-transparent border-none cursor-pointer",
                isScrolled
                  ? "text-foreground/80"
                  : "text-white/90 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}

          {/* Dynamic Reservation Button */}
          <Button
            onClick={() => handleNavigation("contact")}
            className={cn(
              "group relative overflow-hidden rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all duration-500 w-[200px]",
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary hover:shadow-primary/50"
                : "bg-white text-foreground hover:bg-white hover:text-black border-transparent",
            )}
          >
            <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-[150%]">
              <span>Rezerwacja</span>
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">
              <Phone className="w-4 h-4 mr-2" />
              <span className="whitespace-nowrap text-base">
                {siteData.contact.phone}
              </span>
            </div>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 shadow-xl text-foreground">
          {siteData.navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.id)}
              className="text-xl font-bold p-4 hover:bg-muted rounded-xl transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
          <Button
            className="w-full h-14 text-lg rounded-xl"
            onClick={() => handleNavigation("contact")}
          >
            Zarezerwuj Stolik
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
