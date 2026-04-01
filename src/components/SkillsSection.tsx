import { Code2, Globe, Database, GitBranch } from "lucide-react";
import SectionCard from "./SectionCard";

const skillGroups = [
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["Java", "Python", "C++"],
  },
  {
    title: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["SQL", "MySQL"],
  },
  {
    title: "Tools",
    icon: <GitBranch className="h-5 w-5" />,
    skills: ["Git"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4">
      <SectionCard title="Skills" icon={<Code2 className="h-5 w-5" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="gradient-subtle-bg rounded-lg p-5 hover:scale-[1.03] transition-transform duration-200"
            >
              <div className="flex items-center gap-2 mb-3 text-primary">
                {g.icon}
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {s}
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

export default SkillsSection;