import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter conhecimento técnico para implementar as estratégias?",
    answer: "Não! Nosso curso foi desenvolvido especialmente para corretores sem conhecimento técnico. Todas as estratégias são explicadas de forma simples e prática, com passo a passo detalhado."
  },
  {
    question: "Quanto tempo leva para ver os primeiros resultados?",
    answer: "A maioria dos nossos alunos começam a ver resultados nos primeiros 30 dias. Alguns conseguem gerar leads qualificados já na primeira semana de implementação."
  },
  {
    question: "O curso funciona para corretores iniciantes?",
    answer: "Sim! O curso é ideal tanto para iniciantes quanto para corretores experientes. Temos módulos específicos para cada nível de experiência."
  },
  {
    question: "Qual o investimento necessário em ferramentas digitais?",
    answer: "Ensinamos estratégias que podem ser implementadas com investimento zero ou muito baixo. Mostramos opções gratuitas e pagas para cada estratégia."
  },
  {
    question: "Há suporte durante o curso?",
    answer: "Sim! Oferecemos suporte completo através de grupo exclusivo no WhatsApp, calls semanais de dúvidas e mentoria individual."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border-0 shadow-soft">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;