import type { PillarId } from './pillars';
import type { Lang } from '../i18n/dict';
import { COMPANY_ADDRESS } from './company';

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
        'Since 2020, the .nxt Jadeer program has empowered more than 6,600 participants across the governorates of Oman, completing over 300,000 learning hours and 6,500 training courses, and earning more than 100,000 certificates across 136 educational tracks. It has contributed to employing over 2,700 participants, supported the development of 2,000+ entrepreneurial ideas (135 reaching the entrepreneurial bootcamp), and established 20+ startups, alongside 40+ live courses and 100 follow-up sessions, making Jadeer a national platform for talent development, entrepreneurship, and youth readiness for the labor market.',
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
        location: COMPANY_ADDRESS.en,
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://dotnxt.om',
      definition:
        'أوج الابتكار قطاعٌ متخصّص في تصميم منظومات الابتكار وريادة الأعمال وتطويرها وتشغيلها، وتحويل الأفكار والأبحاث إلى مشاريع وشركات ذات أثر اقتصادي وتنموي مستدام.',
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
      valueProposition: [
        'تمكين الجهات من بناء منظومات ابتكار مستدامة',
        'تسريع تحويل الأفكار إلى مشاريع قابلة للتنفيذ',
        'تعزيز الجاهزية المستقبلية',
        'رفع كفاءة الكفاءات الوطنية',
        'تحقيق أثر اقتصادي وتنموي ملموس',
      ],
      impactNotes: [
        'نجاح شركات ناشئة في الحصول على استثمارات والانضمام إلى مسرعات أعمال، حيث حصلت 3 شركات ناشئة من أصل 5 ضمن حاضنة المدرج على استثمار وانضمت بعض الشركات إلى مسرعات أعمال، كما حصلت شركة ناشئة واحدة من أصل 4 ضمن حاضنة GUStartHub على استثمار.',
        'منذ عام 2020، نجح برنامج دوت نكست جدير في تمكين أكثر من 6,600 منتسب من مختلف محافظات سلطنة عُمان، حيث أكمل المنتسبون أكثر من 300 ألف ساعة تعلم و6,500 دورة تدريبية، وحصلوا على أكثر من 100 ألف شهادة ضمن 136 مسارًا تعليميًا. كما ساهم البرنامج في توظيف أكثر من 2,700 منتسب، ودعم تطوير أكثر من 2,000 فكرة ريادية، منها 135 فكرة وصلت إلى مرحلة المعسكر الريادي وأكثر من 20 شركة ناشئة تم تأسيسها، إلى جانب تقديم أكثر من 40 دورة مباشرة و100 جلسة متابعة، ليُصبح جدير منصة وطنية تُسهم في تطوير الكفاءات، وتعزيز ريادة الأعمال، ودعم جاهزية الشباب لسوق العمل.',
      ],
      contact: {
        email: 'info@dotnxt.om',
        phone: '+968 7259 4693',
        location: COMPANY_ADDRESS.ar,
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
        location: COMPANY_ADDRESS.en,
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://awj.om/pillars/sustain',
      definition:
        'أوج الاستدامة هي الذراع المتخصّصة في الاستدامة والتميز المؤسسي ضمن مجموعة أوج، تقدّم حلولًا في الحوكمة البيئية والاجتماعية والمؤسسية (ESG) والمسؤولية الاجتماعية والتحول المؤسسي المستدام.',
      coreServices: [
        {
          group: 'الاستدامة',
          items: [
            { name: 'الاستراتيجية والاستشارات في الاستدامة', desc: 'تطوير خارطة طريق مخصصة لتحقيق أهداف الاستدامة وتعزيز الأداء ESG بما يتوافق مع رؤية عُمان 2040 والأطر الدولية.' },
            { name: 'قياس وتقييم أثر المسؤولية الاجتماعية', desc: 'تصميم مؤشرات الأثر الاجتماعي والبيئي وتقييم فاعلية برامج المسؤولية الاجتماعية وفق معايير دولية معتمدة.' },
            { name: 'الذكاء الاصطناعي وأدوات بيانات الاستدامة', desc: 'توظيف أدوات التحليل الآلي والذكاء الاصطناعي لمعالجة بيانات ESG وضمان دقتها وقابليتها للتدقيق.' },
            { name: 'إعداد تقارير الاستدامة والإفصاح', desc: 'صياغة تقارير الاستدامة وفق أطر GRI وSASB وIFRS S1/S2 واشتراطات بورصة مسقط لتحقيق الشفافية والمصداقية.' },
            { name: 'الاستشارات في الطاقة المتجددة واستراتيجيات المناخ', desc: 'دعم المؤسسات في تبني حلول الطاقة النظيفة وقياس البصمة الكربونية وتطوير خطط الحياد الصفري المتوافقة مع هدف عُمان 2050.' },
            { name: 'تطبيق معايير الأيزو والاعتماد الدولي', desc: 'تنفيذ متطلبات معيار ISO 26000 للمسؤولية الاجتماعية والمعايير الدولية ذات الصلة بالحوكمة والاستدامة، وصولاً إلى الاعتماد.' },
            { name: 'التدريب وبناء القدرات في الاستدامة', desc: 'تصميم وتنفيذ برامج تدريبية متخصصة لتمكين الفرق المؤسسية من إدارة ملف الاستدامة باحترافية وفق أفضل الممارسات العالمية.' },
          ],
        },
        {
          group: 'التميز المؤسسي',
          items: [
            { name: 'إدارة التغيير والاعتماد المهني', desc: 'قيادة مسارات التحول المؤسسي ودعم الحصول على اعتماد CMI في إدارة التغيير لتعزيز قدرة المؤسسة على التكيف والتحول المستدام.' },
            { name: 'الأداء الاستراتيجي والتحسين المستمر', desc: 'بناء منظومة مؤشرات الأداء المؤسسي وربطها بأهداف الاستدامة وخطط التحسين المستمر لتحقيق التميز التشغيلي.' },
            { name: 'تطوير القيادة والتدريب التنفيذي', desc: 'تصميم مسارات تنمية القيادات وتنفيذ برامج التدريب التنفيذي لتعزيز الكفاءة القيادية وثقافة الاستدامة داخل المؤسسة.' },
            { name: 'إدارة المخاطر وأطر الحوكمة', desc: 'تطوير سياسات وأطر إدارة المخاطر المؤسسية وتعزيز هياكل الحوكمة الداخلية بما يدعم الاستدامة والامتثال.' },
            { name: 'Lean Six Sigma وكايزن', desc: 'تطبيق منهجيات التحسين المستمر للقضاء على الهدر وتعزيز الكفاءة التشغيلية بوصفها ركيزة أساسية من ركائز الاستدامة المؤسسية.' },
            { name: 'تقييم الثقافة المؤسسية', desc: 'قياس مستوى التوافق الثقافي مع قيم الاستدامة وتشخيص الفجوات، وتصميم مبادرات لترسيخ ثقافة التميز والمسؤولية على مستوى المؤسسة.' },
          ],
        },
      ],
      valueProposition: [
        'تحويل الاستدامة إلى ميزة تنافسية',
        'تعزيز الامتثال وإدارة المخاطر',
        'تحسين الأداء المؤسسي والتشغيلي',
        'دعم اتخاذ القرار المبني على البيانات',
        'تعزيز السمعة والجاذبية الاستثمارية',
      ],
      referenceWorks: [
        'تطوير الإطار الوطني لحوكمة برامج المسؤولية الاجتماعية في سلطنة عُمان',
        'إعداد تقرير الاستدامة لشركة أبراج لخدمات الطاقة 2025',
        'دعم مشروع أول وأكبر مبنى مطبوع بتقنية ثلاثية الأبعاد في الشرق الأوسط',
        'تنفيذ مشاريع استدامة وبنية أساسية وطاقة ذات أثر وطني',
      ],
      impactNotes: [
        'المساهمة في تنفيذ أول وأكبر مبنى مطبوع بتقنية الطباعة ثلاثية الأبعاد في الشرق الأوسط، بما ساهم في تقليل الهدر الإنشائي وتعزيز استخدام المواد المستدامة والقابلة لإعادة التدوير.',
        '66 مشاركًا من القطاع الحكومي والخاص والمجتمع المدني في ورش العمل التشاورية لتطوير إطار حوكمة برامج المسؤولية الاجتماعية.',
        'إعداد تقرير الاستدامة لشركة أبراج لخدمات الطاقة 2025، والذي حصد جائزة أفضل تقرير استدامة لعام 2025، مما يعكس جودة الإفصاح والالتزام بأفضل الممارسات العالمية في الاستدامة.',
      ],
      contact: {
        email: 'sustain@awj.om',
        phone: '+968 9390 9693',
        location: COMPANY_ADDRESS.ar,
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
        'CIDEEA, International Center for Strategic Studies in Aquaculture',
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
        location: COMPANY_ADDRESS.en,
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
    ar: {
      websiteUrl: 'https://academy.awj.om/',
      definition:
        'أكاديمية أوج منصة متكاملة للمعرفة والتدريب والحوار العلمي، تقدّم برامج تعليمية وتدريبية بلغ عدد خرّيجيها 7,600 مهنيّ، مبنيّةٌ على احتياج سوق العمل والمجتمع، مع التركيز على التمكين بالمعارف والمهارات في بيئة تفاعلية تجمع بين الخبرات العالمية والسياق المحلي.',
      coreServices: [
        {
          items: [
            { name: 'البرامج التدريبية', desc: 'الابتكار وريادة الأعمال (من الفكرة إلى التخارج، التفكير التصميمي، الابتكار المؤسسي)، البرمجة والتطوير، الذكاء الاصطناعي والتعلم الآلي، الاستدامة والطاقة المتجددة والحوكمة البيئية ESG، الاقتصاد الدائري والتنمية المستدامة، التواصل وصناعة المحتوى وإدارة الأزمات التواصلية.' },
            { name: 'خدمات المعرفة', desc: 'المنتجات المعرفية (إصدارات علمية محكّمة، أدلة مهنية، تقارير تحليلية)، ورصد المنظومة المعرفية عبر مراصد متخصصة (الصناعة والتصنيع، التقنية والابتكار، الاستدامة والبيئة، الأعمال والاقتصاد).' },
            { name: 'الفعاليات العلمية', desc: 'فعاليات حضورية (مؤتمرات، ملتقيات مهنية، حلقات عمل، معارض) وفعاليات افتراضية (مؤتمرات وندوات رقمية وحلقات عمل ومعارض ثلاثية الأبعاد).' },
            { name: 'خدمات الاستشارات', desc: 'تطوير وإنتاج المحتوى والمناهج ومنصات التعلم الإلكتروني، الاستشارات المتخصصة (تقييم احتياجات التدريب، قياس الأثر، دعم التحول الرقمي)، والدراسات والبحوث (دراسات الجدوى، البحوث التطبيقية القطاعية، نقل المعرفة والتقنية).' },
          ],
        },
      ],
      valueProposition: [
        'مزيج من الخبرات المحلية والممارسات العالمية',
        'نخبة من الخبراء والاستشاريين ذوي الخبرة الواسعة',
        'التزام بتحقيق نتائج ملموسة وقابلة للقياس',
        'برامج معتمدة متوائمة مع وظائف المستقبل واحتياجات سوق العمل',
        'بيئة تفاعلية تجمع بين الخبرة الدولية والسياق المحلي',
        'بناء شراكات استراتيجية مستدامة',
      ],
      referenceWorks: [
        'برنامج التواصل المجتمعي',
        'برنامج القيادة في الصناعات الثقافية والإبداعية',
      ],
      numbers: [
        { value: '500+', label: 'متدرب' },
        { value: '20+', label: 'برنامج تدريبي' },
        { value: '10+', label: 'شريك استراتيجي' },
        { value: '95%', label: 'معدل الرضا' },
      ],
      contact: {
        email: 'academy@awj.om',
        phone: '+968 9390 9693',
        location: COMPANY_ADDRESS.ar,
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
        'We design, develop, and integrate production-ready software systems and artificial intelligence solutions for government bodies and major institutions across Oman and the Gulf, working along three tracks: projects, products, and research and development.',
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
        'Oman AI Studio, the National AI Studio, operated by AWJ Systems on behalf of the Ministry of Transport, Communications and Information Technology',
        'NCSI API, National Center for Statistics and Information',
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
        location: COMPANY_ADDRESS.en,
      },
    },
    ar: {
      websiteUrl: 'https://systems.awj.om/',
      definition:
        'نصمم ونطوّر ونُكامل الأنظمة البرمجية وحلول الذكاء الاصطناعي الجاهزة للإنتاج لصالح الجهات الحكومية والمؤسسات الكبرى في عُمان ودول الخليج، ونعمل عبر ثلاثة محاور: المشاريع، والمنتجات، والبحث والتطوير.',
      coreServices: [
        {
          group: 'المشاريع',
          items: [
            { name: 'الاستشارة', desc: 'الاستشارات الاستراتيجية وخرائط التحول الرقمي وتجهيز المناقصات.' },
            { name: 'البناء', desc: 'تطوير الأنظمة والمنصات ونماذج الذكاء الاصطناعي المخصصة المملوكة للعميل.' },
            { name: 'التعزيز', desc: 'دمج الذكاء الاصطناعي والأتمتة في الأنظمة القائمة وعقود الصيانة والتطوير (AMC).' },
          ],
        },
        {
          group: 'المنتجات',
          items: [
            { name: 'بناء المشاريع', desc: 'بناء الشركات والمنتجات الرقمية داخليًا كمنصة بناء مشاريع (Venture Builder).' },
            { name: 'محفظة المنتجات', desc: 'تطوير وإدارة محفظة منتجات قابلة للتوسّع.' },
          ],
        },
        {
          group: 'البحث والتطوير',
          items: [
            { name: 'البحث المتقدم', desc: 'البحث في القضايا والتقنيات المتقدمة طويلة المدى.' },
            { name: 'تحويل نتائج البحث', desc: 'تحويل نتائج البحث إلى منتجات وحلول مخصصة ورصد الطلب السوقي.' },
          ],
        },
      ],
      valueProposition: [
        'أنظمة تصمد أمام التدقيق الصارم',
        'سرعة في الإنجاز دون المساس بالاستقرار المؤسسي',
        'بنية تحتية وطنية مهندَسة محليًا تحترم قوانين الإقامة الرقمية للبيانات',
        'ميزة تقنية تراكمية من البحث والتطوير تضع العملاء على حدود ما هو ممكن',
      ],
      referenceWorks: [
        'Oman AI Studio الاستوديو الوطني للذكاء الاصطناعي بتشغيل أوج الأنظمة نيابة عن وزارة النقل والاتصالات وتقنية المعلومات',
        'NCSI API المركز الوطني للإحصاء والمعلومات',
        'منصات .nxt: SPACES و GIG و Jadeer',
        'منصات لوزارة التنمية الاجتماعية: رعاية الطفولة، المسؤولية الاجتماعية، أدوات تحليلية بالذكاء الاصطناعي',
        'المنتجات: Second Brain، Qimmah، Q-AI، Planning & Strategy',
        'البحث والتطوير: Noor AI و Data Platform، خوارزميات الكم بمساعدة الذكاء الاصطناعي، ترميز نماذج اللغة العربية، والذكاء الاصطناعي للكيمياء',
      ],
      numbers: [
        { value: '18+', label: 'جهة حكومية مخدومة' },
        { value: '33+', label: 'حلًّا للذكاء الاصطناعي' },
        { value: '7+', label: 'شركة ناشئة ضمن المنظومة' },
        { value: '20+', label: 'شريكًا ضمن المنظومة' },
      ],
      contact: {
        email: 'systems@awj.om',
        phone: '+968 9895 7933',
        location: COMPANY_ADDRESS.ar,
        social: [
          { label: 'Instagram', handle: '@awj.corp', url: 'https://www.instagram.com/awj.corp' },
        ],
      },
    },
  },
};

/**
 * Resolve one pillar's content for the language being rendered.
 *
 * Both language entries are complete, so this is a plain lookup. It stays a
 * function rather than an exported record so the fallback rules live in one
 * place if a field ever has to borrow from the other language again.
 */
export const getPillarContent = (
  pillarId: PillarId,
  lang: Lang,
): PillarPageContent | undefined => PILLAR_CONTENT[pillarId]?.[lang];
