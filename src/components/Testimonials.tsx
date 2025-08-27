import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Corretora há 8 anos",
    avatar: "M",
    content: "Em apenas 3 meses usando as estratégias do curso, consegui triplicar minha carteira de clientes. O sistema de automação mudou completamente minha rotina de trabalho.",
    rating: 5
  },
  {
    name: "Carlos Rodrigues",
    role: "Corretor Premium",
    avatar: "C",
    content: "O que mais me impressionou foi a qualidade do suporte. Cada dúvida foi esclarecida rapidamente e consegui implementar tudo sem dificuldades. Recomendo 100%.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Corretora Digital",
    avatar: "A",
    content: "Finalmente encontrei um curso que ensina estratégias práticas e funcionais. Hoje tenho uma agenda lotada com leads qualificados que chegam até mim automaticamente.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos alunos estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de corretores que transformaram suas carreiras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-soft hover:shadow-medium transition-smooth border-0 hover:transform hover:-translate-y-2 animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-soft">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;