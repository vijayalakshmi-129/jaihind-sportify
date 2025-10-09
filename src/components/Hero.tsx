import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent opacity-95" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          JAIHIND SPORTS
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
          Premium Sports Equipment for Champions
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for shoes, bats, balls, gym equipment..." 
              className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur border-none shadow-2xl"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg font-bold">
            <ShoppingBag className="mr-2 w-5 h-5" />
            Shop Now
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg font-bold">
            View Categories
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-black">500+</div>
            <div className="text-white/80 text-sm md:text-base font-medium">Products</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-black">10k+</div>
            <div className="text-white/80 text-sm md:text-base font-medium">Happy Customers</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-black">100%</div>
            <div className="text-white/80 text-sm md:text-base font-medium">Authentic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
