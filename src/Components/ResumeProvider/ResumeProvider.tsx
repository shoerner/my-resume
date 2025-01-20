import React from "react";
import tlResume from "../../resume_techLead.json?raw";

interface Props {
  children: React.ReactElement;
}

interface ContactTypes {
  Name: string;
  Body: string;
  Icon: string;
  Target?: string;
}

interface Skill {
  Name: string;
  Level?: number;
}

interface School {
  StartYear: string;
  EndYear: string;
  Degree: string;
  Name: string;
}

interface Person {
  Name: string;
  Title: string;
  Description: string[];
  ContactElements: ContactTypes[];
  Skills: Skill[];
  Education: School[];
}

interface JobBadge {
  Title: string;
  IconName: string;
  Color: string;
}

interface Job {
  Company: string;
  StartDate: string;
  EndDate?: string;
  Title: string;
  Description: string[];
  Badges?: JobBadge[];
  Location?: string;
}

interface ProjectLink {
  Name: string;
  Target: string;
}

interface Project {
  Name: string;
  Description: string;
  Links: ProjectLink[];
}

interface ResumeContextProps {
  Person: Person;
  Jobs: Job[];
  Projects?: Project[];
}

const ResumeContext = React.createContext<ResumeContextProps>({} as any);

const ResumeProvider = ({ children }: Props) => {
  const [resumeContent, setResumeContent] = React.useState<ResumeContextProps>(
    JSON.parse(tlResume)
  );

  return (
    <ResumeContext.Provider value={resumeContent}>
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeProvider, ResumeContext };
