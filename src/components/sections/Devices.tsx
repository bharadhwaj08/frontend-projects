import { Card } from "@/components/ui/card";
import { Camera, Headphones, Laptop, Smartphone } from "lucide-react";

const devices = [
  {
    icon: Laptop,
    title: "Laptops",
    description: "MacBooks, Gaming Laptops, Ultrabooks",
  },
  {
    icon: Smartphone,
    title: "Smartphones",
    description: "iPhones, Android Flagships",
  },
  {
    icon: Camera,
    title: "Cameras",
    description: "DSLRs, Mirrorless, Action Cameras",
  },
  {
    icon: Headphones,
    title: "Audio",
    description: "Headphones, Speakers, Microphones",
  },
] as const;

interface DeviceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function DeviceCard({ icon: Icon, title, description }: DeviceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export function Devices() {
  return (
    <section id="devices" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Available Devices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => (
            <DeviceCard key={device.title} {...device} />
          ))}
        </div>
      </div>
    </section>
  );
}