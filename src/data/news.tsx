export type NewsCategory =
  | 'Healthcare'
  | 'Digital Transformation'
  | 'Social Responsibility'
  | 'Logistics'
  | 'Aviation'
  | 'Training'
  | 'Digital Economy'
  | 'Urban Development';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  date: string;
  dateLabel: string;
  pillar: string;
  dek: string;
  featured: boolean;
  body: string[];
  image: string;
};

export const NEWS: NewsItem[] = [
  {
    id: 'healthcare-studio',
    image: '/news-media/healthcare-studio.jpg',
    category: 'Healthcare',
    title:
      'AWJ Innovation and Sultan Qaboos Hospital Launch Healthcare Innovation Studio',
    date: '2024-11-03',
    dateLabel: 'Nov 03, 2024',
    pillar: 'AWJ Innovation',
    dek: 'A groundbreaking partnership to establish a specialized innovation studio aimed at enhancing healthcare services in Oman through advanced medical solutions.',
    featured: true,
    body: [
      'Muscat, Sultanate of Oman, November 3, 2024.',
      'In an innovative step to enhance healthcare in the Sultanate of Oman, AWJ Innovation signed a cooperation agreement with Sultan Qaboos Hospital to establish a specialized innovation studio.',
      "This partnership was announced during an official event attended by senior officials from both parties. The studio aims to enhance innovation in the healthcare sector and provide advanced medical solutions. This agreement reflects Sultan Qaboos Hospital's commitment to developing the healthcare sector and confirms AWJ Innovation's role in enabling innovation across various sectors.",
      "The studio will work on developing new medical technologies, improving healthcare service quality, and increasing operational efficiency. Through this initiative, new horizons for cooperation between various stakeholders will open, enhancing local value and reflecting Oman's future vision in providing advanced and innovative healthcare.",
    ],
  },
  {
    id: 'embassy-hackathon-execution',
    image: '/news-media/embassy-hackathon-execution.jpg',
    category: 'Digital Transformation',
    title: 'Embassy Hackathon: Enabling Diplomatic Innovation Towards Smart Embassies',
    date: '2024-10-22',
    dateLabel: 'Oct 22, 2024',
    pillar: 'AWJ Innovation',
    dek: 'AWJ successfully manages and executes the Embassy Hackathon in collaboration with the Ministry of Foreign Affairs, marking a pivotal milestone in developing smart Omani embassies.',
    featured: true,
    body: [
      'As part of the commitment to accelerate digital transformation in the government sector, AWJ Innovation successfully managed and executed the Embassy Hackathon program in collaboration with the Ministry of Foreign Affairs, marking a pivotal milestone in developing Omani embassies towards smart and sustainable models.',
      'The program ran for two months with wide participation from ministry staff and diplomatic missions worldwide, achieving great success in terms of engagement level, richness of solutions, and practical applicability.',
      'Several smart solutions and initiatives from the hackathon have already been implemented within the ministry, particularly in digital transformation, data management, and consular services facilitation, contributing to improved operational efficiency and enhanced service quality for citizens abroad.',
      'The program was based on innovation design methodology, focusing on developing implementable technical solutions tested within real work environments, with direct supervision from AWJ Innovation teams throughout various program phases.',
    ],
  },
  {
    id: 'csr-governance-workshop',
    image: '/news-media/csr-governance-workshop.jpg',
    category: 'Social Responsibility',
    title: 'Social Responsibility Governance Workshop',
    date: '2025-01-13',
    dateLabel: 'Jan 13, 2025',
    pillar: 'AWJ Innovation',
    dek: 'Ministry of Social Development collaborates with AWJ Innovation to conduct developmental workshops on CSR governance for 61 participants.',
    featured: false,
    body: [
      "On Monday, January 13, 2025, developmental workshops on 'Social Responsibility Program Governance and Community Development' commenced. Organized by the Ministry of Social Development in collaboration with AWJ Innovation, the workshops hosted 61 participants working in social responsibility from various government, private, and civil society organizations at the National Autism Center.",
      'These 4-day workshops at the National Autism Center aim to enhance social responsibility governance through developing national policies, incentives, and capacities to support projects with sustainable impact.',
      'The developmental workshops focus on 4 pillars: Sustainability and Impact (economic, social, and environmental impact sustainability); Governance (roles, responsibilities, governance structure, standards, and institutional policies); Skills and Capabilities (for organizers, donors, beneficiaries, and implementers); Incentives (financial incentives, recognition programs, and regulatory facilities).',
      "The workshops address 'Enablers' including legislation, institutional and community awareness, alongside the National Social Responsibility Platform.",
    ],
  },
  {
    id: 'embassy-hackathon-launch',
    image: '/news-media/embassy-hackathon-launch.jpg',
    category: 'Digital Transformation',
    title: 'Launch of Smart Embassies Hackathon Program',
    date: '2024-10-22',
    dateLabel: 'Oct 22, 2024',
    pillar: 'AWJ Innovation',
    dek: 'Ministry of Foreign Affairs launches the first Smart Embassies Hackathon to enhance innovation in Omani embassies worldwide.',
    featured: false,
    body: [
      "Under the patronage of His Excellency Khalid bin Hashel Al Muslahi, Undersecretary of the Ministry of Foreign Affairs for Administrative and Financial Affairs, the Ministry of Foreign Affairs launched the opening session of the 'Smart Embassies Hackathon' program, which aims to enhance innovation and continuous improvement in Omani embassies worldwide.",
      "This first-of-its-kind program in the Ministry of Foreign Affairs comes as part of the Ministry's efforts to develop smart embassies that rely on modern technology to improve efficiency and sustainability in service delivery.",
      'The hackathon aims to generate initiatives and ideas for developing smart embassy models that use modern technological solutions such as artificial intelligence to enhance the quality of services provided to citizens abroad and improve effective communication.',
      'The program includes several main tracks, including digital transformation, cybersecurity, resource management, and digital communication, focusing on smart and sustainable solutions that meet the needs of both embassies and citizens.',
    ],
  },
  {
    id: 'asyad-expand-challenge',
    image: '/news-media/asyad-expand-challenge.jpg',
    category: 'Logistics',
    title: 'ASYAD Group Launches Expand Challenge',
    date: '2024-09-15',
    dateLabel: 'Sep 15, 2024',
    pillar: 'AWJ Innovation',
    dek: 'ASYAD Group launches Expand Challenge managed by AWJ Innovation to drive innovation in the global logistics sector.',
    featured: false,
    body: [
      'ASYAD Group launched the Expand Challenge, managed by AWJ Innovation. Expand is an ideas challenge to stimulate innovation within ASYAD Group, aimed at finding solutions to current challenges facing the global logistics sector.',
      'The competition includes three main themes: Operational Efficiency; Product Identity and Awareness; New Products and Services.',
      'The challenge aims to attract innovative ideas from inside and outside the group to develop practical and applicable solutions in the logistics sector, focusing on leveraging modern technologies and artificial intelligence to improve operational efficiency and develop new services.',
    ],
  },
  {
    id: 'oman-airports-runway',
    image: '/news-media/oman-airports-runway.jpg',
    category: 'Aviation',
    title: 'Oman Airports Runway Incubator Journey',
    date: '2024-08-30',
    dateLabel: 'Aug 30, 2024',
    pillar: 'AWJ Innovation',
    dek: 'A pioneering 12-month incubator program by Oman Airports transforms aviation challenges into impactful solutions.',
    featured: false,
    body: [
      'In a pioneering experience aimed at enabling innovation in the aviation and logistics services sector, the Runway Incubator activities of Oman Airports concluded after 12 months of intensive work, professional guidance, and continuous experimentation.',
      'The incubator, managed by AWJ Innovation, was more than just an incubator; it was an integrated platform designed to nurture ideas and transform operational challenges in the aviation sector into realistic and impactful solutions.',
      "The incubator embodied Oman Airports' commitment to enhancing local value and achieving institutional self-sufficiency through ideas stemming from local awareness and led by global experts in aviation innovation.",
      'The program included: focused workshops and mentoring sessions; administrative, financial and security enablement for participating projects; opportunities to provide smart solutions in airport management efficiency, recurring cost reduction, and system automation.',
      'Numbers reflecting impact: 44 participants registered in the incubator; 12 existing companies; 7 international participations; 51 local participations.',
      "One of the incubator's notable successes was the Sust team securing investment from an investment fund, a promising step toward turning their idea into impactful reality.",
    ],
  },
  {
    id: 'royal-academy-community',
    image: '/news-media/royal-academy-community.jpg',
    category: 'Training',
    title: 'Royal Academy Executes Community Communication Program',
    date: '2024-05-15',
    dateLabel: 'May 15, 2024',
    pillar: 'AWJ Academy',
    dek: 'The Royal Academy of Management conducts Community Communication program for government leaders.',
    featured: false,
    body: [
      "The Royal Academy of Management, managed by AWJ, implemented the 'Community Communication' program from May 4–15 for undersecretaries and directors general, aiming to enable government leaders to play an effective role in enhancing trust and cohesion between government and society through effective institutional communication rooted in Omani culture.",
      'The program seeks to enhance community-centered communication mindset among government leaders, enabling them to clearly and accurately convey government directions and policies, while developing their skills in crisis management using modern tools and techniques that enhance community response.',
      'The program covered five main themes: community communication and trust building; crisis management and public opinion handling; stakeholder engagement; monitoring, analysis and digital content creation; community communication strategy.',
      "The program embodied an advanced model in executive learning, reflecting the Academy's commitment to qualifying government leaders and enabling them to efficiently perform their community roles, in line with Oman Vision 2040 objectives.",
    ],
  },
  {
    id: 'aerohack',
    image: '/news-media/aerohack.jpg',
    category: 'Aviation',
    title: "AeroHack: Oman's Largest Aviation Hackathon",
    date: '2024-03-20',
    dateLabel: 'Mar 20, 2024',
    pillar: 'AWJ Innovation',
    dek: 'AeroHack brings together innovators and tech developers to create innovative solutions for aviation sector challenges.',
    featured: false,
    body: [
      "AeroHack is the first-of-its-kind ideas race in Oman specializing in developing ideas for the airport sector, in collaboration with AWJ Innovation and .nxt Ventures. The hackathon served as an innovative platform bringing together elite innovators, technology developers, designers, students, and startups to find innovative solutions for the sector's key challenges.",
      'Challenges: The aviation sector is experiencing rapid development in employing the latest technologies. Amid this unprecedented growth, the sector faces significant challenges in keeping up, including the need for innovative solutions to meet the constantly changing requirements of airport operations.',
      "Solutions: The 'AeroHack' ideas race came as an ideal platform bringing together visionaries to shape the aviation ecosystem. Through a series of pioneering ideas and solutions, the hackathon enabled participants to develop 16 innovative ideas to reimagine passenger experiences, airport operations, entertainment, loyalty programs, customer retention, automation, efficiency, and transportation outside the airport.",
      'Key topics: reimagining passenger experience; reimagining airport operations; future of airport entertainment; marketing, communications and loyalty; automation and efficiency solutions; sustainability and environmental solutions; transportation outside the airport; safety, security and privacy.',
    ],
  },
  {
    id: 'nxt-gig-launch',
    image: '/news-media/nxt-gig-launch.jpg',
    category: 'Digital Economy',
    title: 'Launch of .nxt Gig Freelance Platform',
    date: '2024-01-15',
    dateLabel: 'Jan 15, 2024',
    pillar: 'AWJ Innovation',
    dek: 'AWJ Innovation launches .nxt Gig digital platform for freelance work, creating opportunities for Omani freelancers and businesses in the digital economy.',
    featured: false,
    body: [
      "AWJ Innovation launched the '.nxt Gig' digital freelance platform under the patronage of His Excellency Engineer Salem bin Nasser Al Aufi, Minister of Energy and Minerals. This platform launch is the result of collaboration between AWJ Innovation, the National Employment Program, and Occidental Oman as the main sponsor.",
      "The Gig freelance platform is an advanced digital platform that brings together Omani freelancers, companies, and project owners under one roof in a facilitated, secure, and organized environment, acting as an intermediary to ensure everyone's rights.",
      "His Excellency Engineer Salem bin Nasser Al Aufi praised the platform, noting that it is open to many local and international companies. He stated that all graduates from the .nxt program achieved 100% employment, demonstrating the program's ambition and high capabilities in producing competitive talents for the job market.",
      "Dr. Yousuf bin Abdullah Al Balushi, CEO of AWJ Innovation, noted that the gig economy is experiencing remarkable development worldwide, especially in countries with advanced digital infrastructure. The launch of the '.nxt Gig platform' and its associated services aligns with the global trend toward the gig economy.",
    ],
  },
  {
    id: 'gulf-urban-planning',
    image: '/news-media/gulf-urban-planning.jpg',
    category: 'Urban Development',
    title: 'First Gulf Urban Planning Hackathon',
    date: '2023-10-31',
    dateLabel: 'Oct 31, 2023',
    pillar: 'AWJ Innovation',
    dek: "80 youth from across GCC countries participated in Oman's first Urban Planning Hackathon, developing innovative solutions for urban development challenges.",
    featured: false,
    body: [
      "Organized by AWJ Innovation, the Ministry of Housing and Urban Planning held the First Gulf Urban Planning Hackathon from October 28–31, 2023. This event served as an innovative platform to highlight major urban development challenges in Oman, with 80 young participants from across GCC countries exchanging ideas and finding innovative solutions aligned with Oman Vision 2040 and the Ministry's urban strategy.",
      'Challenges: Urban planning is crucial for countries facing rapid population growth worldwide. The need for innovative solutions is clear as urban spaces struggle with transportation issues, space-efficient parking, and sustainable development.',
      'Solutions: The First Gulf Urban Planning Hackathon serves as a pivotal response to pressing urban development challenges facing Oman. This transformative event emerged as a direct result of recognizing escalating demands on urban spaces.',
      'The hackathon brought together 80 exceptionally talented individuals from across GCC countries, serving as a dynamic platform for collective brainstorming, innovation, and strategic solution formulation.',
    ],
  },
];

type CategoryStyle = { ink: string; a: string; b: string; accent: string };

export const CATEGORY_STYLES: Record<NewsCategory, CategoryStyle> = {
  Healthcare: { ink: '#0d3a4a', a: '#0d3a4a', b: '#127a7a', accent: '#f5e6c5' },
  'Digital Transformation': { ink: '#1a1f3a', a: '#1a1f3a', b: '#3a4a8e', accent: '#9aa8d8' },
  'Social Responsibility': { ink: '#2a3d2a', a: '#2a3d2a', b: '#557a4a', accent: '#dde9c0' },
  Logistics: { ink: '#2a2a2a', a: '#2a2a2a', b: '#4a4a52', accent: '#ee6c11' },
  Aviation: { ink: '#0a1f3a', a: '#0a1f3a', b: '#1a4a7a', accent: '#f8a661' },
  Training: { ink: '#3a2a18', a: '#3a2a18', b: '#7a5a3a', accent: '#fac99e' },
  'Digital Economy': { ink: '#1a1a1a', a: '#1a1a1a', b: '#3a3a3a', accent: '#ee6c11' },
  'Urban Development': { ink: '#2a3a4a', a: '#2a3a4a', b: '#5a7a9a', accent: '#fde0ca' },
};

type CoverProps = { category: NewsCategory };

export const NewsCover = ({ category }: CoverProps) => {
  const s = CATEGORY_STYLES[category] ?? CATEGORY_STYLES['Digital Transformation'];
  const W = 1600;
  const H = 1000;
  const key = category.replace(/\s/g, '');

  const renderArt = () => {
    switch (category) {
      case 'Healthcare':
        return (
          <g>
            <path
              d="M0 600 L300 600 L360 380 L420 820 L500 600 L900 600 L960 460 L1020 720 L1100 600 L1600 600"
              stroke={s.accent}
              strokeWidth="6"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M0 700 L400 700 L460 540 L520 860 L600 700 L1600 700"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              opacity="0.35"
            />
            <g transform="translate(1200, 280)">
              <rect x="-20" y="-90" width="40" height="180" fill={s.accent} opacity="0.9" />
              <rect x="-90" y="-20" width="180" height="40" fill={s.accent} opacity="0.9" />
              <circle r="160" fill="none" stroke={s.accent} strokeWidth="2" opacity="0.4" />
              <circle r="220" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.25" />
            </g>
          </g>
        );
      case 'Digital Transformation':
        return (
          <g>
            <g stroke={s.accent} strokeWidth="0.6" opacity="0.4">
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 100} x2={W} y2={i * 100} />
              ))}
              {Array.from({ length: 17 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2={H} />
              ))}
            </g>
            <g transform="translate(800, 500)" fill="none" stroke={s.accent} strokeWidth="2">
              <circle r="280" opacity="0.6" />
              <ellipse rx="280" ry="100" opacity="0.5" />
              <ellipse rx="280" ry="180" opacity="0.4" />
              <ellipse rx="100" ry="280" opacity="0.5" />
              <ellipse rx="180" ry="280" opacity="0.4" />
              <line x1="-280" y1="0" x2="280" y2="0" opacity="0.7" />
            </g>
            {[
              [200, 200],
              [1400, 300],
              [1300, 800],
              [300, 750],
              [1100, 150],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="8" fill={s.accent} />
            ))}
          </g>
        );
      case 'Social Responsibility':
        return (
          <g>
            <g fill="none" stroke={s.accent} strokeWidth="3" opacity="0.7">
              <circle cx="500" cy="500" r="240" />
              <circle cx="800" cy="500" r="240" />
              <circle cx="1100" cy="500" r="240" />
              <circle cx="650" cy="280" r="240" opacity="0.5" />
              <circle cx="950" cy="280" r="240" opacity="0.5" />
              <circle cx="650" cy="720" r="240" opacity="0.5" />
              <circle cx="950" cy="720" r="240" opacity="0.5" />
            </g>
            <g fill={s.accent} opacity="0.85">
              <circle cx="500" cy="500" r="14" />
              <circle cx="800" cy="500" r="14" />
              <circle cx="1100" cy="500" r="14" />
            </g>
          </g>
        );
      case 'Logistics':
        return (
          <g>
            <g transform="translate(900, 400)">
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3].map((col) => {
                  const x = col * 120 - row * 60;
                  const y = row * 70;
                  return (
                    <g key={`${row}-${col}`} transform={`translate(${x}, ${y})`}>
                      <path
                        d="M0 0 L120 0 L180 -40 L60 -40 Z"
                        fill={col % 2 ? s.accent : '#fff'}
                        opacity={0.85 - row * 0.15}
                      />
                      <path
                        d="M0 0 L0 120 L120 120 L120 0 Z"
                        fill={col % 2 ? '#fff' : s.accent}
                        opacity={0.65 - row * 0.15}
                      />
                      <path
                        d="M120 0 L180 -40 L180 80 L120 120 Z"
                        fill="#000"
                        opacity="0.25"
                      />
                    </g>
                  );
                }),
              )}
            </g>
            <g stroke={s.accent} strokeWidth="3" fill="none" opacity="0.6">
              <path d="M100 200 L600 200" markerEnd="url(#arr)" />
              <path d="M100 800 L600 800" markerEnd="url(#arr)" />
            </g>
            <defs>
              <marker
                id="arr"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10 Z" fill={s.accent} />
              </marker>
            </defs>
          </g>
        );
      case 'Aviation':
        return (
          <g>
            <g>
              <path d="M0 1000 L600 400 L1000 400 L1600 1000 Z" fill="#fff" opacity="0.06" />
              {Array.from({ length: 6 }).map((_, i) => {
                const t = i / 6;
                const w = 30 - t * 24;
                const cx = 800;
                const cy = 1000 - t * 600;
                return (
                  <rect
                    key={i}
                    x={cx - w / 2}
                    y={cy - (60 - t * 48)}
                    width={w}
                    height={40 - t * 32}
                    fill={s.accent}
                    opacity={0.85 - t * 0.4}
                  />
                );
              })}
            </g>
            <g fill="none" stroke={s.accent} strokeWidth="1.5" opacity="0.5">
              <path d="M0 400 Q800 340 1600 400" />
              <path d="M0 380 Q800 300 1600 380" opacity="0.4" />
              <path d="M0 360 Q800 260 1600 360" opacity="0.3" />
            </g>
            <g transform="translate(1200, 280) rotate(-20)" fill={s.accent} opacity="0.95">
              <path d="M0 0 L120 -10 L180 -8 L200 -4 L210 0 L200 4 L180 8 L120 10 L40 22 L20 22 L40 10 L0 8 L-30 22 L-40 22 L-25 8 L-30 0 L-25 -8 L-40 -22 L-30 -22 L0 -8 Z" />
            </g>
          </g>
        );
      case 'Training':
        return (
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${100 + i * 200} 200 L${300 + i * 200} 500 L${100 + i * 200} 800`}
                fill="none"
                stroke={s.accent}
                strokeWidth="6"
                opacity={0.3 + i * 0.15}
              />
            ))}
            <g fill={s.accent} opacity="0.85">
              {[300, 600, 900, 1200].map((x, i) => (
                <g key={i} transform={`translate(${x}, 550)`}>
                  <circle cx="0" cy="-30" r="22" />
                  <path d="M-32 50 Q-32 0 0 0 Q32 0 32 50 Z" />
                </g>
              ))}
            </g>
          </g>
        );
      case 'Digital Economy':
        return (
          <g>
            <g stroke={s.accent} strokeWidth="1.2" opacity="0.7">
              <line x1="300" y1="300" x2="800" y2="500" />
              <line x1="800" y1="500" x2="1300" y2="280" />
              <line x1="800" y1="500" x2="1200" y2="780" />
              <line x1="800" y1="500" x2="400" y2="800" />
              <line x1="300" y1="300" x2="400" y2="800" />
              <line x1="1300" y1="280" x2="1200" y2="780" />
              <line x1="600" y1="200" x2="800" y2="500" />
              <line x1="1000" y1="900" x2="800" y2="500" />
            </g>
            <g>
              <circle cx="800" cy="500" r="36" fill={s.accent} />
              <circle cx="800" cy="500" r="60" fill="none" stroke={s.accent} strokeWidth="2" opacity="0.4" />
              <circle cx="800" cy="500" r="100" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.25" />
              {[
                [300, 300],
                [1300, 280],
                [1200, 780],
                [400, 800],
                [600, 200],
                [1000, 900],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="18" fill="#fff" opacity="0.9" />
                  <circle cx={x} cy={y} r="8" fill={s.accent} />
                </g>
              ))}
            </g>
          </g>
        );
      case 'Urban Development':
        return (
          <g>
            <g transform="translate(400, 200)">
              {(
                [
                  [0, 0, 180, 1],
                  [200, 0, 140, 0.85],
                  [360, 0, 220, 0.7],
                  [0, 200, 260, 0.9],
                  [280, 200, 180, 1],
                  [480, 200, 140, 0.8],
                  [0, 420, 180, 0.75],
                  [200, 420, 260, 0.95],
                ] as [number, number, number, number][]
              ).map(([x, y, h, o], i) => (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  <path
                    d={`M0 ${-h} L120 ${-h - 40} L240 ${-h} L120 ${-h + 40} Z`}
                    fill={s.accent}
                    opacity={o}
                  />
                  <path
                    d={`M0 ${-h} L120 ${-h + 40} L120 40 L0 0 Z`}
                    fill="#fff"
                    opacity={o * 0.7}
                  />
                  <path
                    d={`M240 ${-h} L120 ${-h + 40} L120 40 L240 0 Z`}
                    fill="#000"
                    opacity={0.35}
                  />
                  {Array.from({ length: Math.floor(h / 40) }).map((_, w) => (
                    <rect
                      key={w}
                      x="20"
                      y={-h + 30 + w * 40}
                      width="20"
                      height="14"
                      fill="#fff"
                      opacity={o * 0.5}
                    />
                  ))}
                </g>
              ))}
            </g>
          </g>
        );
      default:
        return <g />;
    }
  };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="news-cover-svg"
    >
      <defs>
        <linearGradient id={`bg-${key}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={s.a} />
          <stop offset="100%" stopColor={s.b} />
        </linearGradient>
        <pattern id={`grain-${key}`} width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#fff" opacity="0.05" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#bg-${key})`} />
      <rect width={W} height={H} fill={`url(#grain-${key})`} />
      {renderArt()}
    </svg>
  );
};
