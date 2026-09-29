import type { PillarId } from './pillars';
import { fromPayload } from '../content';

export type TeamMember = {
  name: string;
  title: string;
  department: string;
  description?: string;
  image: string;
  accentColor?: string;
  pillarId?: PillarId;
};

export type Team = { management: TeamMember[]; leaders: TeamMember[]; members: TeamMember[] };

const management: TeamMember[] = [
  { name: 'Dr. Yousuf Al-Bulushi', title: 'Chief Executive Officer', department: 'Management', description: "Leading AWJ's strategic vision and fostering innovation across all business units", image: '/team/dr-yousef-albulushi.jpg' },
  { name: 'Dr. Nathan Pike', title: 'Senior Projects Director', department: 'Management', description: 'Technical leadership across all verticals and complex project solutions', image: '/team/nathan-pike.jpg' },
  { name: 'Ahmed Al Busaidi', title: 'Senior Director for Corporate Affairs', department: 'Management', description: "Managing partnerships and strengthening AWJ's market presence", image: '/team/ahmed-albusaidi.jpg' },
];

const leaders: TeamMember[] = [
  { name: 'Talib Al Abri', title: 'Head of AWJ Academy', department: 'Academy', description: 'Capacity Building & Training Programs', image: '/team/talib-alabri.jpg', accentColor: '#9674ce', pillarId: 'academy' },
  { name: 'Eng. Rawan Al Salmi', title: 'Head of AWJ Sustain', department: 'Sustain', description: 'Sustainability & Business Excellence', image: '/team/rawan-alsalmi.jpg', accentColor: '#00a19d', pillarId: 'sustain' },
  { name: 'Eng. Yousuf Al Ibrahim', title: 'Head of AWJ Innovation', department: 'Innovation', description: 'Strategic Innovation Consulting', image: '/team/yousef-alibrahim.jpg', accentColor: '#ff6b00', pillarId: 'innovation' },
  { name: 'Eng. Yousuf Al Mawali', title: 'Head of AWJ Systems', department: 'Systems', description: 'Technology Solutions & Platforms', image: '/team/placeholder.svg', accentColor: '#0069c8', pillarId: 'systems' },
];

const members: TeamMember[] = [
  { name: 'Mohammed Al Amri', title: 'Software Developer', department: 'Technical', image: '/team/mohammed-01.jpg' },
  { name: 'Zainab Al Musawi', title: 'Software Engineer', department: 'Technical', image: '/team/zainab-almawaswi.jpg' },
  { name: 'Mohammed Al Hashmi', title: 'Business Development Manager', department: 'Business Development', image: '/team/mohammed-alhashmi.jpg' },
  { name: 'Shahad Al Raisi', title: 'Business Development Executive', department: 'Business Development', image: '/team/shahed.jpg' },
  { name: 'Jawaher Al Kharusi', title: 'Business Development Coordinator', department: 'Business Development', image: '/team/jawaher-alkharusi.jpg' },
  { name: 'Maitha Al Wahaibi', title: 'Operations Coordinator', department: 'Operations', image: '/team/maitha-02.jpg' },
];

const TEAM_FALLBACK: Team = { management, leaders, members };

export const TEAM: Team = fromPayload('team', TEAM_FALLBACK);
