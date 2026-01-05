import { Target, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    text: "Foco em resultados",
  },
  {
    icon: BarChart3,
    text: "Baseado em dados",
  },
  {
    icon: Zap,
    text: "Testes e otimização",
  },
];

const AuthoritySection = () => {
  return (
    <section className="bg-hero section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-10">
            Não criamos sites bonitos apenas. Criamos estruturas pensadas para{" "}
            <span className="font-semibold text-primary">conversão</span>, baseadas em{" "}
            <span className="font-semibold">dados</span>,{" "}
            <span className="font-semibold">testes</span> e{" "}
            <span className="font-semibold">comportamento do usuário</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
