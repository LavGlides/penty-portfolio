import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <service.icon className="w-8 h-8 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-right font-bold mt-4">{service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
