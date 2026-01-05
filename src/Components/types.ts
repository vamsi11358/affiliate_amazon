export interface InterviewQuestion {
  q: string;
  a: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
}

export interface Technology {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  topics: string[];
  interviewQuestions: InterviewQuestion[];
  latestNews?: NewsArticle[];
}

export interface LandingPageProps {
  onCardClick: (tech: Technology) => void;
}

export interface DetailPageProps {
  technology: Technology;
  onBack: () => void;
}