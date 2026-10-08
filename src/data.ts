import {
  Brain,
  Cpu,
  Bot,
  Sparkles,
  FileText,
  GraduationCap,
  Award,
  Briefcase,
  Lightbulb,
  Users,
  Clock,
  Target,
  MessageSquare,
  Laptop,
  Search,
  Wrench,
  PenTool,
  Calendar,
  BookOpen,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

export interface Certificate {
  name: string;
  shortName: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  gradient: string;
  image: string;
  credentialUrl: string;
  year: string;
  institution: string;
}

export const certificates: Certificate[] = [
  {
    name: 'Artificial Intelligence Certificate',
    shortName: 'AI Certificate',
    description:
      'Comprehensive certification covering AI concepts, machine learning fundamentals, and practical AI applications for real-world problem solving.',
    skills: ['AI Concepts', 'Machine Learning', 'AI Applications', 'Digital Innovation'],
    icon: Brain,
    gradient: 'from-teal-500 to-cyan-600',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    credentialUrl: '#',
    year: '2024',
    institution: 'AI Education Institute',
  },
  {
    name: 'National Senior Certificate',
    shortName: 'Matric Certificate',
    description:
      'South African secondary education qualification representing the completion of Grade 12 with a strong academic foundation.',
    skills: ['Secondary Education', 'Academic Foundation', 'Critical Thinking', 'Core Subjects'],
    icon: GraduationCap,
    gradient: 'from-gold-500 to-amber-600',
    image:
      'https://images.pexels.com/photos/3990446/pexels-photo-3990446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    credentialUrl: '#',
    year: '2022',
    institution: 'Department of Education',
  },
  {
    name: 'International Computer Driving Licence',
    shortName: 'ICDL Certificate',
    description:
      'Globally recognised certification demonstrating competence in computer and digital literacy, productivity software, and essential digital workplace skills.',
    skills: ['Computer Literacy', 'Productivity Software', 'Digital Workplace', 'IT Security Basics'],
    icon: Award,
    gradient: 'from-sky-500 to-blue-600',
    image:
      'https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    credentialUrl: '#',
    year: '2023',
    institution: 'ICDL South Africa',
  },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; icon: LucideIcon; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Technology',
    icon: Bot,
    accent: 'teal',
    skills: [
      { name: 'Artificial Intelligence', icon: Brain, level: 88 },
      { name: 'AI Tools & Applications', icon: Cpu, level: 85 },
      { name: 'Digital Technology', icon: Zap, level: 90 },
      { name: 'Technology Applications', icon: Sparkles, level: 82 },
    ],
  },
  {
    title: 'Digital Skills',
    icon: Laptop,
    accent: 'sky',
    skills: [
      { name: 'Microsoft Office', icon: FileText, level: 92 },
      { name: 'Computer Literacy', icon: Laptop, level: 95 },
      { name: 'Internet Research', icon: Search, level: 88 },
      { name: 'Digital Communication', icon: MessageSquare, level: 86 },
    ],
  },
  {
    title: 'Professional Skills',
    icon: Briefcase,
    accent: 'gold',
    skills: [
      { name: 'Communication', icon: MessageSquare, level: 90 },
      { name: 'Teamwork', icon: Users, level: 88 },
      { name: 'Problem Solving', icon: Lightbulb, level: 85 },
      { name: 'Time Management', icon: Clock, level: 87 },
      { name: 'Organisation', icon: Target, level: 89 },
      { name: 'Adaptability', icon: PenTool, level: 86 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl: string;
  icon: LucideIcon;
  accent: string;
}

export const projects: Project[] = [
  {
    title: 'Smart Generator',
    description:
      'An AI-powered content and idea generation tool that helps users create written content, brainstorm ideas, and generate creative outputs efficiently.',
    technologies: ['AI', 'Content Generation', 'NLP', 'Productivity'],
    image:
      'https://images.pexels.com/photos/7818100/pexels-photo-7818100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    projectUrl: '#',
    icon: Sparkles,
    accent: 'teal',
  },
  {
    title: 'AI Task Planner',
    description:
      'An intelligent task planning and productivity assistant that uses AI to prioritise tasks, suggest schedules, and help users stay organised and focused.',
    technologies: ['AI', 'Task Planning', 'Productivity', 'Scheduling'],
    image:
      'https://images.pexels.com/photos/6172482/pexels-photo-6172482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    projectUrl: '#',
    icon: Calendar,
    accent: 'sky',
  },
  {
    title: 'AI Research Assistant',
    description:
      'An AI-powered research and information organisation tool that helps users gather, summarise, and structure research findings from multiple sources.',
    technologies: ['AI', 'Research', 'Information Organisation', 'Data Summarisation'],
    image:
      'https://images.pexels.com/photos/11369534/pexels-photo-11369534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    projectUrl: '#',
    icon: BookOpen,
    accent: 'gold',
  },
];

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'jabulilemhlongo58@gmail.com',
    href: 'mailto:jabulilemhlongo58@gmail.com',
    icon: MessageSquare,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jabulile-mhlongo',
    href: 'https://linkedin.com/in/jabulile-mhlongo',
    icon: Briefcase,
  },
  {
    label: 'GitHub',
    value: 'github.com/jabulile-mhlongo',
    href: 'https://github.com/jabulile-mhlongo',
    icon: Wrench,
  },
];

export const profileData = {
  name: 'Jabulile Mhlongo',
  fullName: 'Jabulile Lungile Mhlongo',
  title: 'AI & Digital Skills Enthusiast',
  phone: '0765965481',
  email: 'jabulilemhlongo58@gmail.com',
  tagline: 'Passionate about technology, artificial intelligence, and continuous learning.',
  bio: `Jabulile Mhlongo is a motivated and digitally skilled individual with a strong foundation in artificial intelligence, computer applications, digital tools, research, and communication. She is committed to developing her skills and leveraging technology to solve problems and create meaningful, practical solutions.

With certifications in AI, digital literacy (ICDL), and a National Senior Certificate, Jabulile combines technical knowledge with a passion for innovation. She is eager to contribute her skills in a professional environment where technology meets creativity.`,
  profileImage:
    'https://images.pexels.com/photos/18028052/pexels-photo-18028052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroBadgeImage:
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  cvUrl: '#',
};
