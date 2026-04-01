import { User } from "lucide-react";
import SectionCard from "./SectionCard";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <SectionCard title="About Me" icon={<User className="h-5 w-5" />}>
        <p className="text-muted-foreground leading-relaxed">
          I'm a <span className="font-semibold text-foreground">Master of Computer Applications (MCA) graduate (2025)</span> with
          a strong foundation in <span className="font-semibold text-foreground">Java, Python, and Web Development</span>.
          I'm passionate about software development and enjoy solving complex problems through clean,
          efficient code. I'm eager to contribute to innovative projects and continuously grow as a developer.
        </p>
      </SectionCard>
    </div>
  </section>
);

export default AboutSection;
