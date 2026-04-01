import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import SectionCard from "./SectionCard";

const contacts = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "harisaikam7569@gmail.com", href: "mailto:saikamhari@email.com" },
  { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 75692 14527", href: "tel:+91XXXXXXXXXX" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "www.linkedin.com/in/hari-saikam", href: "https://linkedin.com" },
  { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "https://github.com/SaikamHari/", href: "https://github.com" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 pb-32">
    <div className="container mx-auto px-4">
      <SectionCard title="Get In Touch" icon={<Send className="h-5 w-5" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
            >
              <span className="text-primary group-hover:scale-110 transition-transform">{c.icon}</span>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </SectionCard>
    </div>
  </section>
);

export default ContactSection;