import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-white font-black text-xl">JS</span>
              </div>
              <h3 className="text-xl font-black">JAIHIND SPORTS</h3>
            </div>
            <p className="text-white/70 text-sm">
              Your trusted partner for premium sports equipment and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Offers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>9080559390</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>info@jaihindsports.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Sports Avenue, Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 JAIHIND SPORTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
