import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  itemCount: number;
  gradient: string;
}

const CategoryCard = ({ title, icon: Icon, itemCount, gradient }: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden cursor-pointer hover-lift border-none shadow-card">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="relative p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{itemCount} Products</p>
      </div>
    </Card>
  );
};

export default CategoryCard;
