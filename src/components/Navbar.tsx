import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center glow-effect">
              <span className="text-white font-black text-xl">JS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black tracking-tight">JAIHIND SPORTS</h1>
              <p className="text-xs text-muted-foreground">Premium Equipment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-semibold hover:text-primary transition-colors">Home</a>
            <a href="#" className="font-semibold hover:text-primary transition-colors">Categories</a>
            <a href="#" className="font-semibold hover:text-primary transition-colors">Offers</a>
            <a href="#" className="font-semibold hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button className="hidden md:inline-flex" variant="default">
              Sign In
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a href="#" className="block font-semibold hover:text-primary transition-colors">Home</a>
            <a href="#" className="block font-semibold hover:text-primary transition-colors">Categories</a>
            <a href="#" className="block font-semibold hover:text-primary transition-colors">Offers</a>
            <a href="#" className="block font-semibold hover:text-primary transition-colors">Contact</a>
            <Button className="w-full" variant="default">Sign In</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
