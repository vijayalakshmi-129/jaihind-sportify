import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard = ({ name, price, image, rating, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-card hover-lift cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
          NEW
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
          {category}
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-primary">
            ₹{price.toLocaleString()}
          </div>
          <Button variant="default" size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
