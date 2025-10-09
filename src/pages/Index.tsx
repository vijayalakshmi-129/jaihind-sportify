import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Dumbbell, Trophy, ShoppingBag, Target, Shirt, Zap } from "lucide-react";
import productBat from "@/assets/product-bat.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productBall from "@/assets/product-ball.jpg";
import productGym from "@/assets/product-gym.jpg";

const Index = () => {
  const categories = [
    { title: "Sports Shoes", icon: Target, itemCount: 120, gradient: "bg-gradient-to-br from-primary to-primary-glow" },
    { title: "Cricket & Bats", icon: Trophy, itemCount: 85, gradient: "bg-gradient-to-br from-accent to-blue-400" },
    { title: "Balls & Equipment", icon: ShoppingBag, itemCount: 95, gradient: "bg-gradient-to-br from-orange-400 to-red-500" },
    { title: "Gym Equipment", icon: Dumbbell, itemCount: 150, gradient: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { title: "Sports Apparel", icon: Shirt, itemCount: 200, gradient: "bg-gradient-to-br from-green-400 to-teal-500" },
    { title: "Trophies & Awards", icon: Trophy, itemCount: 60, gradient: "bg-gradient-to-br from-yellow-400 to-orange-500" },
  ];

  const featuredProducts = [
    { 
      name: "Professional Cricket Bat",
      price: 2499,
      image: productBat,
      rating: 5,
      category: "Cricket Equipment"
    },
    { 
      name: "Premium Running Shoes",
      price: 3999,
      image: productShoes,
      rating: 5,
      category: "Sports Footwear"
    },
    { 
      name: "Professional Football",
      price: 899,
      image: productBall,
      rating: 4,
      category: "Sports Balls"
    },
    { 
      name: "Adjustable Dumbbell Set",
      price: 4999,
      image: productGym,
      rating: 5,
      category: "Gym Equipment"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Find Your Perfect Gear</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our extensive collection of premium sports equipment and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">Featured Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Trending Now</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out our most popular products loved by athletes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-primary via-primary-glow to-accent rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Need Help?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Chat with us on WhatsApp for instant support and personalized recommendations
          </p>
          <a 
            href="https://wa.me/919080559390" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
