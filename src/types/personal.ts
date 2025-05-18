export interface PortfolioData {
  profile: UserProfile;
  projects: PortfolioItem[];
  meta: MetaData;
}

// ========== Profile ==========
export type SocialLinks = {
  github?: string;
  twitter?: string;
  linkedin?: string;
  [key: string]: string | undefined;
};

export interface UserProfile {
  full_name: string;
  pronouns?: string;
  bio: string;
  email: string;
  open_to_work: boolean;
  socials: SocialLinks;
}

// ========== Portfolio ==========
export interface ProjectLinks {
  homepage?: string;
  repository?: string;
  [key: string]: string | undefined;
}

export interface ProjectTags {
  is_new?: boolean;
  is_featured?: boolean;
  [key: string]: boolean | undefined;
}

export interface PortfolioItem {
  title: string;
  summary: string;
  category?: string;
  links: ProjectLinks;
  tech_stack: string[];
  status: "active" | "archived" | "private";
  tags: string[];
}

// ========== Meta ==========
export interface MetaData {
  created_at: string;
}
