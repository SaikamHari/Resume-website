import { FolderOpen } from "lucide-react";
import SectionCard from "./SectionCard";

const projects = [
  {
    title: "Cloud Data Deduplication",
    description:
      "A web application for eliminating duplicate data stored in the cloud, improving storage efficiency and reducing costs.",
    tech: ["Java", "J2EE", "MySQL"],
  },
  {
    title: "College Management System",
    description:
      "An integrated system for managing student records, faculty, courses, and administrative tasks in an educational institution.",
    tech: ["Java", "MySQL", "HTML/CSS"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <SectionCard title="Projects" icon={<FolderOpen className="h-5 w-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full gradient-bg text-primary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  </section>
);

export default ProjectsSection;