import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";
import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece sua transformação hoje mesmo
            </h2>
            <p className="text-xl opacity-90">
              Receba acesso gratuito ao nosso material exclusivo "5 Estratégias para Dobrar suas Vendas"
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm shadow-strong max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-4 text-lg rounded-full shadow-glow transition-bounce hover:scale-105 group"
                >
                  Quero Receber o Material Gratuito
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Seus dados estão 100% seguros conosco</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;