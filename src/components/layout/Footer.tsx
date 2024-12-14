import { Zap } from "lucide-react";

const footerLinks = {
  company: ["About Us", "Careers", "Press"],
  support: ["Help Center", "Contact Us", "Terms of Service"],
  connect: ["Twitter", "Instagram", "LinkedIn"],
} as const;

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">QuickRent</span>
            </div>
            <p className="text-muted-foreground">
              Rent the latest tech without breaking the bank.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link} className="hover:text-primary cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.support.map((link) => (
                <li key={link} className="hover:text-primary cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.connect.map((link) => (
                <li key={link} className="hover:text-primary cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 QuickRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}