import { Instagram, Linkedin, Globe } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Website" },
];

const Footer = () => {
  return (
    <footer className="bg-background py-10">
      <div className="container-narrow px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-heading font-semibold text-foreground">
              Negócio Que Converte
            </span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-social-icon hover:text-primary hover:bg-muted/80 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © Negócio Que Converte – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
