import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const SectionCard = ({ title, icon, children, className = "" }: SectionCardProps) => (
  <div className={`bg-card rounded-xl border border-border shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 ${className}`}>
    <div className="flex items-center gap-2 mb-6">
      {icon && <span className="text-primary">{icon}</span>}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    {children}
  </div>
);

export default SectionCard;
