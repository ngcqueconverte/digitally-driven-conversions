import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero section-padding">
      <div className="container-narrow text-center">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up opacity-0">
          Negócio Que Converte
        </h1>
        
        <h2 className="font-heading font-semibold text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6 animate-fade-up opacity-0 delay-100">
          Soluções Digitais para Vender Todos os Dias
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-200">
          Criamos estruturas simples, rápidas e estratégicas para transformar visitantes em clientes.
        </p>
        
        <div className="animate-fade-up opacity-0 delay-300">
          <Button variant="cta" size="xl" onClick={scrollToContact}>
            Quero Converter Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
