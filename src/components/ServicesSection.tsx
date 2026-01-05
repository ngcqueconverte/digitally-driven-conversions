import { FileText, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas rápidas, diretas e focadas em conversão",
  },
  {
    icon: Users,
    title: "Estratégias de Afiliados",
    description: "Estrutura completa para vender produtos digitais",
  },
  {
    icon: TrendingUp,
    title: "Otimização de Conversão",
    description: "Ajustes estratégicos para vender mais com o mesmo tráfego",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
          O Que Fazemos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
