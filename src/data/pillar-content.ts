import type { PillarId } from './pillars';
import type { Lang } from '../i18n/dict';

export type ServiceItem = { name: string; desc?: string };
export type ServiceGroup = { group?: string; items: ServiceItem[] };

export type PillarPageContent = {
  /** The external website destination, if any (visible regardless of language). */
  websiteUrl?: string;
  /** Short definition shown as the hero lede. */
  definition: string;
  /** Core services, optionally grouped. */
  coreServices: ServiceGroup[];
  /** Value-proposition bullets (the pillar's "values"). */
  valueProposition?: string[];
  /** Reference works / projects. */
  referenceWorks?: string[];
  /** Headline numbers. */
  numbers?: { value: string; label: string }[];
  /** Narrative impact notes. */
  impactNotes?: string[];
  /** Clients & partners served. */
  clients?: string[];
  contact: {
    email?: string;
    phone?: string;
    location?: string;
    social?: { label: string; handle: string; url?: string }[];
  };
};

export type PillarContentBundle = Record<Lang, PillarPageContent>;

export const PILLAR_CONTENT: Record<PillarId, PillarContentBundle> = {
  innovation: {
    en: {
      websiteUrl: 'https://dotnxt.om',
      definition:
        'A specialized arm in designing and managing innovation, R&D, and technology transfer ecosystems, transforming ideas and emerging opportunities into solutions, products, and services with sustainable impact and value.',
      coreServices: [
        {
          items: [
            { name: 'Designing and managing innovative programs' },
            { name: 'Transferring and localizing science, knowledge, and technology' },
            { name: 'Operating incubators and accelerators' },
            { name: 'Developing technology transfer offices' },
            { name: 'Organizing hackathons and challenges' },
            { name: 'Building national capacities' },
            { name: 'Strategic consulting' },
            { name: 'Intellectual property management' },
            { name: 'Developing corporate innovation ecosystems' },
          ],
        },
      ],
      valueProposition: [
        'Enabling entities to build sustainable innovation ecosystems',
        'Accelerating the transformation of ideas into actionable projects',
        'Enhancing future readiness',
        "Upgrading national talents' efficiency",
        'Achieving tangible economic and developmental impact',
      ],
      numbers: [
        { value: '6,600+', label: 'Participants empowered' },
        { value: '300,000+', label: 'Learning hours' },
        { value: '2,700+', label: 'Participants employed' },
        { value: '20+', label: 'Startups established' },
      ],
      impactNotes: [
        '3 out of 5 startups within the Runway incubator secured investment, and some joined accelerators; 1 out of 4 startups within the GUStartHub incubator secured investment.',
        'Since 2020, the .nxt Jadeer program has empowered more than 6,600 participants across the governorates of Oman — completing over 300,000 learning hours and 6,500 training courses, and earning more than 100,000 certificates across 136 educational tracks. It has contributed to employing over 2,700 participants, supported the development of 2,000+ entrepreneurial ideas (135 reaching the entrepreneurial bootcamp), and established 20+ startups, alongside 40+ live courses and 100 follow-up sessions — making Jadeer a national platform for talent development, entrepreneurship, and youth readiness for the labor market.',
      ],
      clients: [
        'Riyada (SME Development Authority)',
        'Ministry of Labour',
        'Ministry of Foreign Affairs',
        'German University of Technology (GUtech)',
        'Occidental Oman',
        'Oman Airports',
        'Ministry of Housing and Urban Planning',
        'Asyad',
        'Office of the Governor of North Al Batinah',
        'Ministry of Education',
        'Ministry of Transport, Communications and Information Technology',
      ],
      contact: {
        email: 'info@dotnxt.om',
        phone: '+968 7259 4693',
        location: 'Muscat · Sultanate of Oman',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://dotnxt.om',
      definition:
        'قطاع متخصص في تصميم وتطوير وتشغيل منظومات الابتكار وريادة الأعمال، وتحويل الأفكار والأبحاث إلى مشاريع وشركات ذات أثر اقتصادي وتنموي مستدام.',
      coreServices: [
        {
          items: [
            { name: 'تصميم وإدارة البرامج الابتكارية' },
            { name: 'نقل وتوطين العلوم والمعرفة والتكنولوجيا' },
            { name: 'تشغيل الحاضنات والمسرعات' },
            { name: 'تطوير مكاتب نقل التكنولوجيا' },
            { name: 'تنظيم الهاكاثونات والتحديات' },
            { name: 'بناء القدرات الوطنية' },
            { name: 'الاستشارات الاستراتيجية' },
            { name: 'إدارة الملكية الفكرية' },
            { name: 'تطوير منظومات الابتكار المؤسسي' },
          ],
        },
      ],
      contact: {
        email: 'info@dotnxt.om',
        phone: '+968 7259 4693',
        location: 'مسقط · سلطنة عُمان',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
  },

  sustain: {
    en: {
      websiteUrl: 'https://awj.om/pillars/sustain',
      definition:
        'A strategic partner in sustainability and institutional excellence, specializing in governance, environmental and social strategies, and impact management, to enable institutions to achieve responsible growth and sustainable value for business and society.',
      coreServices: [
        {
          group: 'Sustainability',
          items: [
            { name: 'Sustainability Strategy & Consulting', desc: 'A customized roadmap to achieve sustainability goals and enhance ESG performance, in line with Oman Vision 2040 and international frameworks.' },
            { name: 'CSR Impact Measurement & Evaluation', desc: 'Designing social and environmental impact indicators and evaluating CSR program effectiveness against accredited international standards.' },
            { name: 'AI & Sustainability Data Tools', desc: 'Automated analysis and AI to process ESG data, ensuring accuracy and auditability.' },
            { name: 'Sustainability Reporting & Disclosure', desc: 'Drafting reports per GRI, SASB, IFRS S1/S2, and Muscat Stock Exchange requirements for transparency and credibility.' },
            { name: 'Renewable Energy & Climate Strategies', desc: 'Adopting clean-energy solutions, measuring carbon footprints, and developing net-zero plans aligned with Oman’s 2050 target.' },
            { name: 'ISO Standards & International Certification', desc: 'Implementing ISO 26000 and related governance and sustainability standards, leading up to certification.' },
            { name: 'Sustainability Training & Capability Building', desc: 'Specialized programs empowering teams to manage the sustainability portfolio professionally.' },
          ],
        },
        {
          group: 'Institutional Excellence',
          items: [
            { name: 'Change Management & Professional Accreditation', desc: 'Leading institutional transformation and supporting CMI accreditation in change management.' },
            { name: 'Strategic Performance & Continuous Improvement', desc: 'Building a KPI system linked to sustainability objectives and improvement plans.' },
            { name: 'Leadership Development & Executive Training', desc: 'Leadership development paths and executive programs that foster a sustainability culture.' },
            { name: 'Risk Management & Governance Frameworks', desc: 'Corporate risk policies and strengthened internal governance structures.' },
            { name: 'Lean Six Sigma & Kaizen', desc: 'Continuous-improvement methodologies to eliminate waste and enhance operational efficiency.' },
            { name: 'Corporate Culture Assessment', desc: 'Measuring cultural alignment with sustainability values and designing initiatives to anchor a culture of excellence.' },
          ],
        },
      ],
      valueProposition: [
        'Transforming sustainability into a competitive advantage',
        'Enhancing compliance and risk management',
        'Improving institutional and operational performance',
        'Supporting data-driven decision making',
        'Boosting reputation and investment attractiveness',
      ],
      referenceWorks: [
        'Developing the National Framework for Corporate Social Responsibility Programs Governance in the Sultanate of Oman',
        'Preparing the Sustainability Report for Abraj Energy Services 2025',
        'Supporting the first and largest 3D-printed building in the Middle East',
        'Executing sustainability, infrastructure, and energy projects with national impact',
      ],
      numbers: [
        { value: 'Best Award', label: 'Sustainability Report 2025' },
        { value: '66', label: 'Workshop participants' },
        { value: '1st', label: 'Largest 3D-printed building in ME' },
      ],
      impactNotes: [
        'Contributed to the first and largest 3D-printed building in the Middle East, helping reduce construction waste and promote sustainable, recyclable materials.',
        '66 participants from government, private sector, and civil society took part in consultative workshops to develop the CSR governance framework.',
        'The Sustainability Report for Abraj Energy Services 2025 won the Best Sustainability Report Award for 2025, reflecting the quality of disclosure and commitment to global best practices.',
      ],
      clients: [
        'Government entities',
        'Oil, gas, and energy companies',
        'Financial and banking institutions',
        'Real estate development and construction companies',
        'Industrial and logistics sector',
        'Institutions developing their ESG performance',
      ],
      contact: {
        email: 'sustain@awj.om',
        phone: '+968 9390 9693',
        location: 'Muscat, Sultanate of Oman',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://awj.om/pillars/sustain',
      definition:
        'أوج للاستدامة هي الذراع المتخصص في الاستدامة والتميز المؤسسي ضمن مجموعة أوج، تقدّم حلولاً متكاملة في حوكمة (ESG) والمسؤولية الاجتماعية والتحول المؤسسي المستدام.',
      coreServices: [
        {
          items: [
            { name: 'تقارير ESG والإفصاح عن الاستدامة', desc: 'إعداد وتدقيق تقارير الاستدامة المتوافقة مع معايير GRI ومتطلبات بورصة مسقط و SASB و IFRS S1/S2.' },
            { name: 'استراتيجية الاستدامة واستشارات المسؤولية المجتمعية', desc: 'تطوير الاستراتيجية وصياغة البرامج وقياس الأثر وأطر إشراك أصحاب المصلحة.' },
            { name: 'ذكاء ESG وأدوات الذكاء الاصطناعي', desc: 'أدوات تحليل آلي ومعالجة بيانات ESG لضمان الدقة وقابلية التدقيق.' },
            { name: 'الخدمات البيئية والمناخية', desc: 'تقييم البصمة الكربونية واستشارات الطاقة المتجددة وخطط الحياد الصفري.' },
            { name: 'تطبيق معايير ISO والاعتماد', desc: 'دعم التطبيق والتدقيق والاعتماد لمعايير ISO ذات الصلة بالحوكمة والاستدامة.' },
            { name: 'التدريب على الاستدامة وبناء القدرات', desc: 'برامج متخصصة لتمكين الفرق من إدارة ملف الاستدامة باحترافية.' },
          ],
        },
      ],
      contact: {
        email: 'sustain@awj.om',
        phone: '+968 9390 9693',
        location: 'مسقط، سلطنة عُمان',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
  },

  academy: {
    en: {
      websiteUrl: 'https://academy.awj.om/',
      definition:
        'The capability building and human capital development arm, specializing in designing and implementing learning and professional development programs that enable individuals and institutions to lead innovation, enhance competitiveness, and prepare for future requirements.',
      coreServices: [
        {
          items: [
            { name: 'Training Programs', desc: 'Innovation and entrepreneurship (idea to exit, design thinking, corporate innovation), programming and development, AI and machine learning, sustainability and ESG, circular economy, and communication, content creation, and crisis management.' },
            { name: 'Knowledge Services', desc: 'Peer-reviewed publications, professional guides, and analytical reports, plus specialized observatories across industry, technology, sustainability, and economics.' },
            { name: 'Scientific Events', desc: 'In-person conferences, forums, workshops, and exhibitions, and virtual conferences, seminars, workshops, and 3D exhibitions.' },
            { name: 'Consulting Services', desc: 'Content, curricula, and e-learning development; specialized consulting (training needs, impact measurement, digital transformation); and studies and research.' },
          ],
        },
      ],
      valueProposition: [
        'A blend of local expertise and global practices',
        'An elite group of widely experienced experts and consultants',
        'A commitment to tangible, measurable results',
        'Accredited programs aligned with future jobs and labor-market needs',
        'An interactive environment combining international expertise and local context',
        'Sustainable strategic partnerships',
      ],
      referenceWorks: [
        'Community Communication Program',
        'Leadership in Cultural and Creative Industries Program',
      ],
      numbers: [
        { value: '500', label: 'Trainees' },
        { value: '20', label: 'Training Programs' },
        { value: '10', label: 'Strategic Partners' },
        { value: '95%', label: 'Satisfaction Rate' },
      ],
      clients: [
        'Local network and key clients',
        'CIDEEA — International Center for Strategic Studies in Aquaculture',
        'Temasek Polytechnic (Singapore)',
        'Lean Enterprise Institute (USA)',
        'Simplilearn',
        'World Science Council',
        'Oxford Oracle',
        'International Network for Government Science Advice (INGSA)',
      ],
      contact: {
        email: 'academy@awj.om',
        phone: '+968 9390 9693',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://academy.awj.om/',
      definition:
        'أكاديمية أوج منصة متكاملة للمعرفة والتدريب والحوار العلمي، تقدّم برامج تعليمية وتدريبية متقدمة وشاملة تلبّي الاحتياجات الفعلية لسوق العمل والمجتمع، مع التركيز على التمكين بالمعارف والمهارات في بيئة تفاعلية تجمع بين الخبرات العالمية والسياق المحلي.',
      coreServices: [
        {
          items: [
            { name: 'البرامج التدريبية', desc: 'الابتكار وريادة الأعمال، البرمجة والتطوير، الذكاء الاصطناعي، الاستدامة والطاقة، التواصل وصناعة المحتوى.' },
            { name: 'خدمات المعرفة', desc: 'منشورات علمية محكَّمة وأدلة مهنية وتقارير ومراصد قطاعية متخصصة.' },
            { name: 'الفعاليات العلمية', desc: 'مؤتمرات وملتقيات وحلقات عمل ومعارض، حضورياً وافتراضياً.' },
            { name: 'خدمات الاستشارات', desc: 'تطوير المحتوى والمناهج ومنصات التعلم، والاستشارات المتخصصة، والدراسات والبحوث.' },
          ],
        },
      ],
      contact: {
        email: 'academy@awj.om',
        phone: '+968 9390 9693',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
  },

  systems: {
    en: {
      websiteUrl: 'https://systems.awj.om/',
      definition:
        'A center of excellence in future technologies, specializing in data, artificial intelligence, quantum computing, and emerging technologies, to develop smart solutions and systems that support innovation, institutional transformation, and decision-making.',
      coreServices: [
        {
          group: 'Projects',
          items: [
            { name: 'Advise', desc: 'Strategic consulting, digital transformation roadmaps, and tender preparation.' },
            { name: 'Build', desc: 'Developing customized systems, platforms, and AI models owned by the client.' },
            { name: 'Augment', desc: 'Integrating AI and automation into existing systems, with Annual Maintenance Contracts (AMC).' },
          ],
        },
        {
          group: 'Products',
          items: [
            { name: 'Venture Builder', desc: 'Building digital companies and products internally as a project-building platform.' },
            { name: 'Product Portfolio', desc: 'Developing and managing a portfolio of scalable products.' },
          ],
        },
        {
          group: 'Research & Development',
          items: [
            { name: 'Advanced Research', desc: 'Researching long-term advanced technologies and issues.' },
            { name: 'Commercialization', desc: 'Transforming research results into customized products and monitoring market demand.' },
          ],
        },
      ],
      valueProposition: [
        'Systems that withstand rigorous scrutiny',
        'Rapid delivery without compromising institutional stability',
        'Locally engineered national infrastructure that respects digital data residency laws',
        'A cumulative technical advantage from R&D that puts clients at the frontier of what is possible',
      ],
      referenceWorks: [
        'Oman AI Studio — the National AI Studio, operated by AWJ Systems on behalf of the Ministry of Transport, Communications and Information Technology',
        'NCSI API — National Center for Statistics and Information',
        '.nxt Platforms: SPACES, GIG, and Jadeer',
        'Platforms for the Ministry of Social Development: Child Care, CSR, and AI analytical tools',
        'Products: Second Brain, Qimmah, Q-AI, Planning & Strategy',
        'R&D: Noor AI and Data Platform; AI-assisted quantum algorithms; Arabic LLM tokenization; AI for chemistry',
      ],
      numbers: [
        { value: '18', label: 'Government entities served' },
        { value: '33', label: 'AI solutions' },
        { value: '7', label: 'Startups in the ecosystem' },
        { value: '20+', label: 'Partners' },
      ],
      clients: [
        'North Al Batinah Governorate',
        'Ministry of Transport, Communications and Information Technology',
        'Ministry of Social Development',
        'National Center for Statistics and Information',
        'Dar Al Tathmeen Real Estate Valuation Company',
        'Al Anqa (Phoenix) Innovation Company',
        'Nashed Company',
      ],
      contact: {
        email: 'systems@awj.om',
        phone: '+968 7222 5178',
        location: 'Mazoon Square, 5th Floor, Al Khoudh, Muscat, Sultanate of Oman',
      },
    },
    ar: {
      websiteUrl: 'https://systems.awj.om/',
      definition:
        'نصمم ونطوّر ونُكامل الأنظمة البرمجية وحلول الذكاء الاصطناعي الجاهزة للإنتاج لصالح الجهات الحكومية والمؤسسات الكبرى في عُمان ودول الخليج، ونعمل عبر ثلاثة محاور: المشاريع، والمنتجات، والبحث والتطوير.',
      coreServices: [
        {
          items: [
            { name: 'الاستشارة', desc: 'توجيه التحول الرقمي وخرائط التحديث وإعداد العطاءات المعقّدة.' },
            { name: 'البناء', desc: 'حلول من الصفر: منصّات ويب عالية الأداء وتطبيقات ونماذج ذكاء اصطناعي مملوكة للعميل.' },
            { name: 'التعزيز', desc: 'دمج الذكاء الاصطناعي والأتمتة في الأنظمة القائمة وعقود الصيانة السنوية.' },
            { name: 'المنتجات والبحث والتطوير', desc: 'بناء منتجات رقمية قابلة للتوسّع والبحث في التقنيات المتقدمة طويلة المدى.' },
          ],
        },
      ],
      contact: {
        email: 'systems@awj.om',
        phone: '+968 9895 7933',
        location: 'ساحة المزون، الطابق الخامس، الخوض، مسقط',
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
  },
};
