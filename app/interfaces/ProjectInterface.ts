export interface ProjectInterface {
  id: number;
  project_name: string;
  project_des: string;
  img: string;
  details_link: string;
  demo_link: string;
  source_code_link?: string | undefined;
  tech_stacks: TechStack[];
}

interface TechStack {
  id: number;
  tech_name: string;
  tech_logo: string;
}
