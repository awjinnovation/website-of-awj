import type { PillarId } from './pillars';

export type Lang = 'en' | 'ar';

export type Service = {
  title: string;
  body: string;
  items?: string[];
};

export type PillarContent = {
  lang: Lang;
  /** External website link used by the page's primary CTA. */
  websiteUrl: string;
  /** Localized labels for headings + CTA. */
  labels: {
    about: string;
    whatWeDo: string;
    contact: string;
    cta: string;
    email: string;
    phone: string;
    location: string;
    social: string;
  };
  aboutTitle: string;
  about: string[];
  services: Service[];
  contact: {
    email?: string;
    phone?: string;
    location?: string;
    social?: { label: string; handle: string }[];
  };
};

const enLabels = {
  about: 'About',
  whatWeDo: 'What we do',
  contact: 'Get in touch',
  cta: 'Visit',
  email: 'Email',
  phone: 'Phone',
  location: 'Location',
  social: 'Social',
};

const arLabels = {
  about: 'من نحن',
  whatWeDo: 'ماذا نفعل',
  contact: 'تواصل معنا',
  cta: 'زيارة',
  email: 'البريد الإلكتروني',
  phone: 'الهاتف',
  location: 'الموقع',
  social: 'وسائل التواصل',
};

export const PILLAR_CONTENT: Record<PillarId, PillarContent> = {
  academy: {
    lang: 'ar',
    websiteUrl: 'https://awj.om/academy',
    labels: arLabels,
    aboutTitle: 'أكاديمية متكاملة للمعرفة والتدريب والحوار العلمي',
    about: [
      'أكاديمية أوج منصة متكاملة للمعرفة والتدريب والحوار العلمي، تنتمي إلى شركة أوج للابتكار. نقدم برامج تعليمية وتدريبية متقدمة وشاملة تستجيب لاحتياجات سوق العمل والمجتمع، ونعمل على تمكين الأفراد والمؤسسات بالمعارف والمهارات والقدرات في بيئة تجمع خبرة عالمية بسياق محلي.',
      'ترتكز هويتنا على ثلاثة أركان: إطار معرفي يبني الأفكار، إطار تدريبي يحوّل المعرفة إلى مهارة تطبيقية، وإطار حواري يبني وعياً نقدياً تفاعلياً. نعمل ضمن منظومة وطنية تستلهم رؤية عُمان 2040 وتتقاطع مع مستهدفات وزارة العمل.',
    ],
    services: [
      {
        title: 'البرامج التدريبية',
        body: 'مسارات معتمدة في الابتكار وريادة الأعمال، التقنية والذكاء الاصطناعي، الاستدامة والطاقة، التواصل وصناعة المحتوى.',
      },
      {
        title: 'خدمات المعرفة',
        body: 'منشورات علمية محكَّمة، أدلة مهنية، تقارير دورية، ومراصد قطاعية في الصناعة والتقنية والاستدامة والاقتصاد.',
      },
      {
        title: 'الفعاليات العلمية',
        body: 'مؤتمرات وملتقيات وحلقات عمل وهاكاثونات وجلسات نقاش، حضورياً وافتراضياً.',
      },
      {
        title: 'خدمات الاستشارات',
        body: 'نرافق المؤسسات في رحلات التطوير والتحول، من تقييم الواقع إلى تنفيذ الحلول وقياس الأثر.',
      },
    ],
    contact: {
      email: 'academy@awj.om',
      social: [
        { label: 'Instagram & X', handle: '@awj_academy' },
        { label: 'LinkedIn', handle: 'awj-academy' },
      ],
    },
  },

  sustain: {
    lang: 'en',
    websiteUrl: 'https://awj.om/sustain',
    labels: enLabels,
    aboutTitle: 'From sustainability ambition to measurable outcomes.',
    about: [
      "AWJ Sustain is the dedicated sustainability division of AWJ, built to help public and private sector organizations across Oman and the GCC move from sustainability ambition to measurable, standards-aligned outcomes. Operating at the intersection of ESG strategy, reporting excellence, and organizational transformation, AWJ Sustain combines deep local market knowledge with access to globally certified methodologies through its exclusive partnership with CSR Company International — one of the world's leading sustainability consultancies, active in over 70 countries.",
      "AWJ Sustain's portfolio spans national-scale initiatives, including co-developing Oman's National CSR Governance Framework in collaboration with the Ministry of Social Development, and delivering MSX-aligned sustainability reports for listed companies in the energy sector. The practice works across energy, infrastructure, finance, technology, and government — translating complex international frameworks into practical, context-specific solutions aligned with Oman Vision 2040.",
    ],
    services: [
      {
        title: 'ESG Reporting & Sustainability Disclosure',
        body: 'Development and validation of sustainability reports aligned with GRI Standards, MSX ESG disclosure requirements, OIA ESG metrics, SASB, IFRS S1 & S2, and CSRD. Includes materiality assessment, ESG data collection and validation, bilingual (EN/AR) report drafting, GRI content index mapping, and publication-ready design.',
      },
      {
        title: 'Sustainability Strategy & CSR Consulting',
        body: 'End-to-end sustainability strategy development, CSR programme formulation and implementation, CSR impact measurement and evaluation, stakeholder engagement frameworks, CSR governance and communication strategies, and measuring Social Return on Investment.',
      },
      {
        title: 'ESG Intelligence & AI Tools',
        body: "Launching 2026. The ESG Sustainability Index — an AI-powered platform ranking all MSX-listed companies across Environmental, Social, and Governance dimensions, providing Oman's first structured, comparable ESG benchmark. ESG Reporting Automation, starting with Phase 1 data validation.",
      },
      {
        title: 'Environmental & Climate Services',
        body: 'Carbon footprint assessment and GHG inventory (Scopes 1, 2 and 3) in line with the GHG Protocol, renewable energy consultancy, and green supply chain management.',
      },
      {
        title: 'ISO Standards Implementation & Certification',
        body: 'Practical implementation, auditing and certification support across ISO 26000 (Social Responsibility), ISO 20121 (Sustainable Events Management), ISO 19600 (Compliance), ISO 20400 (Sustainable Procurement), and ISO 37001 (Anti-Bribery).',
      },
      {
        title: 'Sustainability Training & Capacity Building',
        body: 'A structured learning pathway from foundational to executive level: Sustainability Foundations, Applying Sustainability in Practice, Strategic Sustainability Leadership & Integration, ISO 26000 & Social Audit — Certified CSR Practitioner, and an Executive Masterclass in CSR Strategy & Leadership. Certificates issued in partnership with CSR Company International and Austrian Standards International.',
      },
    ],
    contact: {
      email: 'sustain@awj.om',
      location: 'Muscat, Sultanate of Oman',
    },
  },

  innovation: {
    lang: 'ar',
    websiteUrl: 'https://dotnxt.om',
    labels: arLabels,
    aboutTitle: 'شركة استشارية رائدة لتمكين الأفراد ومنظومات الابتكار',
    about: [
      'نحن شركة استشارية رائدة مقرها سلطنة عُمان، متخصصة في تمكين الأفراد، وتطوير الأعمال، وبناء منظومات الابتكار، من خلال دمج الخبرات العالمية في الاستشارات والتقنية والابتكار لتحقيق نمو مستدام.',
      'نعمل مع الجهات الحكومية ومؤسسات القطاع الخاص لتمكينها من الانتقال نحو نماذج عمل أكثر ابتكاراً وكفاءة، عبر حلول متكاملة تُحدث أثراً حقيقياً وقابلاً للقياس.',
    ],
    services: [
      {
        title: 'تمكين الكفاءات',
        body: 'نُطوّر المواهب وفق معايير عالمية تتماشى مع مستهدفات رؤية عُمان 2040، لضمان جاهزية الكوادر الوطنية لمتطلبات المستقبل.',
      },
      {
        title: 'بناء القدرات الابتكارية',
        body: 'نُصمّم برامج نوعية تدعم ريادة الأعمال وتعزز التنافسية في مختلف القطاعات، من خلال منهجيات حديثة وتجارب عملية.',
      },
      {
        title: 'حلول تقنية متقدمة',
        body: 'نُوظّف أحدث التقنيات لتقديم حلول مبتكرة تدعم التحول الرقمي وتحقق أثراً مستداماً.',
      },
      {
        title: 'استشارات استراتيجية',
        body: 'نقدّم توجيهاً مخصصاً يساعد المؤسسات على النمو، واتخاذ قرارات فعّالة، ومواجهة التحديات بثقة.',
      },
      {
        title: 'إدارة الابتكار',
        body: 'نُمكّن المؤسسات من تبنّي التقنيات الناشئة وتعزيز جاهزيتها للمستقبل، عبر بناء أنظمة ابتكار متكاملة.',
      },
      {
        title: 'الملكية الفكرية',
        body: 'نُساعد على حماية وتطوير الأصول الفكرية وتحويلها إلى منتجات وخدمات ذات قيمة اقتصادية.',
      },
      {
        title: 'تصميم وإدارة البرامج',
        body: 'نُطوّر ونُدير البرامج والمشاريع الابتكارية بكفاءة عالية، بدءاً من الفكرة وحتى التنفيذ وتحقيق الأثر.',
      },
    ],
    contact: {
      email: 'info@dotnxt.om',
      phone: '+968 7259 4693',
      location: 'سلطنة عُمان · مسقط',
    },
  },

  systems: {
    lang: 'en',
    websiteUrl: 'https://awj.om/systems',
    labels: enLabels,
    aboutTitle: 'Engineering excellence for institutions that cannot fail.',
    about: [
      'AWJ Systems is the specialist AI and software engineering arm of AWJ. Based in Muscat, we partner with government entities, large enterprises, and fast-moving businesses across Oman and the GCC to deliver technology that works flawlessly on day one — and scales securely for the future.',
      "We carry AWJ's core purpose into the digital realm: making innovation meaningful. We build the digital engines that propel our clients toward their most ambitious goals — software that accelerates growth while holding up under rigorous audit, AI that solves actual operational bottlenecks, and national-scale infrastructure engineered locally by the people who rely on it.",
      'The single largest expression of this mandate is the Oman AI Studio, which AWJ Systems operates on behalf of the Ministry of Transport, Communications and Information Technology (MTCIT). Our portfolio includes mission-critical deployments for the Ministry of Social Development, the National Centre for Statistics and Information, and leading enterprises like Nama Group.',
    ],
    services: [
      {
        title: 'Advise',
        body: "Digital transformation guidance for ministries and enterprises. AI adoption, modernization roadmaps, and complex tender preparations. We help you scope the real problem, write the brief, and choose the right path forward — even when that means advising where AI isn't the right solution.",
      },
      {
        title: 'Build',
        body: 'Custom software and production AI. Greenfield solutions from high-performance web platforms to cross-platform mobile applications to custom machine-learning models. Your models trained on your data, deployed in your environment, owned by you.',
      },
      {
        title: 'Augment',
        body: 'AI integration into existing operational workflows. Leading models integrated directly into the systems your team already uses, engineering out the manual toil without requiring expensive, disruptive rebuilds.',
      },
      {
        title: 'Hybrid & Localized Cloud',
        body: 'We design hybrid and localized cloud architectures that strictly adhere to data residency laws. Whether hosted in-country for Oman-based buyers or scaled internationally for pan-GCC enterprises, your data stays exactly where regulation dictates.',
      },
    ],
    contact: {
      email: 'systems@awj.om',
      phone: '+968 7222 5178',
      location: 'Mazoon Square, 5th Floor, Al Khoudh, Muscat',
    },
  },
};
