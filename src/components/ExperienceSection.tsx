import { Briefcase, Award, GraduationCap } from "lucide-react";
import SectionCard from "./SectionCard";

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 space-y-8">
      {/* Experience */}
      <SectionCard title="Experience" icon={<Briefcase className="h-5 w-5" />}>
        <div className="border-l-2 border-primary/30 pl-5">
          <div className="relative">
            <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full gradient-bg" />
            <h3 className="font-semibold">AWS Cloud Virtual Internship</h3>
            <p className="text-sm text-muted-foreground">AICTE / EduSkills</p>
            <p className="text-sm text-muted-foreground mt-1">
              Gained hands-on experience with AWS cloud services including EC2, S3, and Lambda.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Certifications */}
      <SectionCard title="Certifications" icon={<Award className="h-5 w-5" />}>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
            <span>Data Structures & Backend Development with Java</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
            <span>NPTEL Python Certification</span>
          </li>
        </ul>
      </SectionCard>

      {/* Education */}
      <SectionCard title="Education" icon={<GraduationCap className="h-5 w-5" />} className="" >
        <div id="education" className="border-l-2 border-primary/30 pl-5">
          <div className="relative">
      <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full gradient-bg" />
      <h3 className="font-semibold">Master of Computer Applications (MCA)</h3>
      <p className="text-sm text-muted-foreground">
        2023 - 2025 · CGPA: 7.78
      </p>
    </div>

    {/* Degree */}
    <div className="relative">
      <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full gradient-bg" />
      <h3 className="font-semibold">Bachelor of Science (MPCS)</h3>
      <p className="text-sm text-muted-foreground">
        Sri Gowthami Degree & PG College
      </p>
      <p className="text-sm text-muted-foreground">
        Jun 2019 - Aug 2022 · CGPA: 7.59 · Darsi, Andhra Pradesh
      </p>
    </div>

    {/* Intermediate */}
    <div className="relative">
        <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full gradient-bg" />
        <h3 className="font-semibold">Intermediate (MPC)</h3>
        <p className="text-sm text-muted-foreground">
          M.N.M Junior College
        </p>
         <p className="text-sm text-muted-foreground">
          Jun 2017 - Apr 2019 · CGPA: 7.54 · Kanigiri, Andhra Pradesh
          </p>
    </div>

    {/* School */}
    <div className="relative">
      <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full gradient-bg" />
      <h3 className="font-semibold">SSC (10th)</h3>
          <p className="text-sm text-muted-foreground">
           KVN & L High School
          </p>
          <p className="text-sm text-muted-foreground">
            Jun 2016 - Apr 2017 · GPA: 8.2 · K.N. Puram, Andhra Pradesh
          </p>
        </div>
        </div>
      </SectionCard>
    </div>
  </section>
);

export default ExperienceSection;