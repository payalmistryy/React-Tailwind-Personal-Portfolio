import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about", label: "About"},
    { href: "#projects", label: "Projects"},
    { href: "#contact", label: "Contact"},
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a 
            href="#" 
            className="text-xl font-bold tracking-light hover:text-primary"
            >
            PM<span style={{color: "#3a5795"}}>.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
            <div className="glass-primary rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link, index) => (
                    <a 
                      href={link.href}
                      key={index}
                      className="px-4 py-2 text-sm text-primary hover:text-foreground rounded-full hover:bg-surface"
                    >
                      {link.label}
                    </a>
                ))}
            </div>
        </div>
        {/* Theme Toggle */}
        <div className="hidden md:block">
            <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2.5 rounded-full glass-primary hover:bg-surface text-primary transition-colors cursor-pointer"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
        {navLinks.map((link, index) => (
         <a 
            href={link.href} 
            key={index} 
            className="text-lg text-muted-foreground hover:text-foreground py-2"
         >
            {link.label}
            </a>
        ))}
        <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="self-start p-2.5 rounded-full glass-primary hover:bg-surface text-primary transition-colors cursor-pointer inline-flex items-center gap-2"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">{isDark ? "Light mode" : "Dark mode"}</span>
        </button>
        </div>
      </div>
      )}
    </header>
    );
};
