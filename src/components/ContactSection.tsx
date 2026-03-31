import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const info = [
    { icon: Mail, label: "edurojas.developer@gmail.com" },
    { icon: Phone, label: "+55 (34) 99115-7227" },
    { icon: MapPin, label: "Uberlândia - MG, Brasil" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-code text-primary text-sm">
            // contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tem um projeto interessante ou quer bater um papo sobre
              tecnologia? Ficarei feliz em ouvir de você. Preencha o formulário
              ou use um dos contatos abaixo.
            </p>
            <div className="space-y-4">
              {info.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 text-muted-foreground"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <Input placeholder="Seu nome" required className="bg-card" />
            <Input
              type="email"
              placeholder="Seu email"
              required
              className="bg-card"
            />
            <Input placeholder="Assunto" required className="bg-card" />
            <Textarea
              placeholder="Sua mensagem"
              required
              rows={5}
              className="bg-card resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full glow-primary font-semibold"
              disabled={sending}
            >
              <Send size={18} />
              {sending ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
