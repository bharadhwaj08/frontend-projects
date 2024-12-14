import { Card } from "@/components/ui/card";
import { Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "Rent for a day, week, or month. Extend or return anytime.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All rentals come with comprehensive insurance coverage.",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "Access the newest gadgets as soon as they hit the market.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuickRent?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}