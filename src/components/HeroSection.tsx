import profileImg from "@/assets/profile-placeholder.png";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16" id="hero">
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary animate-fade-up">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 animate-fade-up-delay-1">
            Saikam <span className="gradient-text">Hari</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground mt-3 animate-fade-up-delay-2">
            Software Developer
          </p>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto md:mx-0 animate-fade-up-delay-3">
            Passionate about building scalable and efficient software solutions
          </p>
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start animate-fade-up-delay-3">
            <Button variant="gradient" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 animate-fade-up">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
            <img
              src={profileImg}
              alt="Saikam Hari"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
