import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-final" className="bg-accent section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-accent-foreground mb-8 max-w-2xl mx-auto">
          Pronto para transformar seu projeto em um negócio que converte?
        </h2>
        
        <Button 
          variant="cta" 
          size="xl"
          asChild
        >
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Falar Agora no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
