import { Smartphone, Target, TrendingUp, Users, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Tecnologia a favor do corretor",
    description: "Ferramentas digitais avançadas para automatizar processos e otimizar seu tempo de trabalho."
  },
  {
    icon: Target,
    title: "Automação de vendas",
    description: "Sistemas inteligentes que qualificam leads e nutrem prospects automaticamente."
  },
  {
    icon: TrendingUp,
    title: "Marketing digital eficiente",
    description: "Estratégias comprovadas para gerar leads qualificados através das redes sociais e Google."
  },
  {
    icon: Users,
    title: "Acompanhamento personalizado",
    description: "Mentoria individual para acelerar sua implementação e garantir resultados."
  },
  {
    icon: Zap,
    title: "Resultados em 30 dias",
    description: "Metodologia testada que entrega os primeiros resultados em apenas 30 dias."
  },
  {
    icon: Globe,
    title: "Presença digital profissional",
    description: "Construa uma marca pessoal sólida e seja reconhecido como autoridade no mercado."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher o <span className="text-primary">Corretor Digital</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.500 corretores já transformaram suas carreiras com nossa metodologia exclusiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;