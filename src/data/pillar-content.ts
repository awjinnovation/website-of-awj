import type { PillarId } from './pillars';
import type { Lang } from '../i18n/dict';

export type Service = {
  title: string;
  body: string;
  items?: string[];
};

export type PillarPageContent = {
  /** The external CTA destination, visible regardless of language. */
  websiteUrl: string;
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

export type PillarContentBundle = Record<Lang, PillarPageContent>;

export const PILLAR_CONTENT: Record<PillarId, PillarContentBundle> = {
  academy: {
    ar: {
      websiteUrl: 'https://awj.om/academy',
      aboutTitle: 'أكاديمية متكاملة للمعرفة والتدريب والحوار العلمي',
      about: [
        'أكاديمية أوج منصة متكاملة للمعرفة والتدريب والحوار العلمي، تنتمي إلى شركة أوج الابتكار. نقدم برامج تعليمية وتدريبية متقدمة وشاملة تستجيب لاحتياجات سوق العمل والمجتمع، ونعمل على تمكين الأفراد والمؤسسات بالمعارف والمهارات والقدرات في بيئة تجمع خبرة عالمية بسياق محلي.',
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
    en: {
      websiteUrl: 'https://awj.om/academy',
      aboutTitle: 'An integrated platform for knowledge, training, and scholarly dialogue.',
      about: [
        'AWJ Academy is an integrated platform for knowledge, training, and scholarly dialogue, part of AWJ Innovation. We offer advanced and comprehensive education and training programs that respond to the needs of the labour market and society, empowering individuals and institutions with the knowledge, skills, and capabilities they need, in an environment that combines global expertise with local context.',
        "Our identity rests on three pillars: a knowledge framework that builds ideas, a training framework that translates knowledge into applicable skill, and a dialogue framework that builds critical, interactive awareness. We operate within a national system inspired by Oman Vision 2040 and aligned with the Ministry of Labour's objectives.",
      ],
      services: [
        {
          title: 'Training Programs',
          body: 'Accredited tracks across innovation and entrepreneurship, technology and AI, sustainability and energy, and communications and content.',
        },
        {
          title: 'Knowledge Services',
          body: 'Peer-reviewed publications, professional guides, periodic reports, and sector observatories across industry, technology, sustainability, and economy.',
        },
        {
          title: 'Scholarly Events',
          body: 'Conferences, forums, workshops, hackathons, and dialogue sessions, both in-person and virtual.',
        },
        {
          title: 'Consultation Services',
          body: 'We accompany institutions through development and transformation journeys, from assessing the current state to implementing solutions and measuring impact.',
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
  },

  sustain: {
    en: {
      websiteUrl: 'https://awj.om/sustain',
      aboutTitle: 'From sustainability ambition to measurable outcomes.',
      about: [
        "AWJ Sustain is the dedicated sustainability division of AWJ, built to help public and private sector organizations across Oman and the GCC move from sustainability ambition to measurable, standards-aligned outcomes. Operating at the intersection of ESG strategy, reporting excellence, and organizational transformation, AWJ Sustain combines deep local market knowledge with access to globally certified methodologies through its exclusive partnership with CSR Company International, one of the world's leading sustainability consultancies, active in over 70 countries.",
        "AWJ Sustain's portfolio spans national-scale initiatives, including co-developing Oman's National CSR Governance Framework in collaboration with the Ministry of Social Development, and delivering MSX-aligned sustainability reports for listed companies in the energy sector. The practice works across energy, infrastructure, finance, technology, and government, translating complex international frameworks into practical, context-specific solutions aligned with Oman Vision 2040.",
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
          body: "Launching 2026. The ESG Sustainability Index, an AI-powered platform ranking all MSX-listed companies across Environmental, Social, and Governance dimensions, providing Oman's first structured, comparable ESG benchmark. ESG Reporting Automation, starting with Phase 1 data validation.",
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
          body: 'A structured learning pathway from foundational to executive level: Sustainability Foundations, Applying Sustainability in Practice, Strategic Sustainability Leadership & Integration, ISO 26000 & Social Audit, Certified CSR Practitioner, and an Executive Masterclass in CSR Strategy & Leadership. Certificates issued in partnership with CSR Company International and Austrian Standards International.',
        },
      ],
      contact: {
        email: 'sustain@awj.om',
        location: 'Muscat, Sultanate of Oman',
      },
    },
    ar: {
      websiteUrl: 'https://awj.om/sustain',
      aboutTitle: 'من طموح الاستدامة إلى نتائج قابلة للقياس.',
      about: [
        'أوج الاستدامة هي الوحدة المتخصصة في الاستدامة ضمن مجموعة أوج، مُصمَّمة لمساعدة المؤسسات الحكومية والخاصة في عُمان ودول الخليج على الانتقال من طموح الاستدامة إلى نتائج قابلة للقياس ومتوافقة مع المعايير الدولية. نعمل عند تقاطع استراتيجية الحوكمة البيئية والاجتماعية والمؤسسية (ESG) مع تميز التقارير والتحول المؤسسي، ونجمع بين معرفة عميقة بالسوق المحلية والوصول إلى منهجيات معتمدة عالمياً عبر شراكتنا الحصرية مع CSR Company International, إحدى أبرز شركات الاستشارات في الاستدامة، الفاعلة في أكثر من 70 دولة.',
        'تمتد محفظة أوج الاستدامة لتشمل مبادرات على المستوى الوطني، من بينها المشاركة في تطوير الإطار الوطني العُماني لحوكمة المسؤولية المجتمعية بالتعاون مع وزارة التنمية الاجتماعية، وإنتاج تقارير استدامة متوافقة مع متطلبات بورصة مسقط للشركات المدرجة في قطاع الطاقة. نعمل عبر قطاعات الطاقة والبنية التحتية والمالية والتقنية والحكومية, مُحوِّلين الأطر الدولية المعقدة إلى حلول عملية ملائمة للسياق ومتوافقة مع رؤية عُمان 2040.',
      ],
      services: [
        {
          title: 'تقارير ESG والإفصاح عن الاستدامة',
          body: 'إعداد وتدقيق تقارير الاستدامة المتوافقة مع معايير GRI ومتطلبات الإفصاح في بورصة مسقط ومؤشرات OIA ومعايير SASB و IFRS S1 و S2 و CSRD. يشمل تقييم الأهمية النسبية وجمع بيانات ESG والتحقق منها وكتابة التقارير ثنائية اللغة وتصميمها للنشر.',
        },
        {
          title: 'استراتيجية الاستدامة واستشارات المسؤولية المجتمعية',
          body: 'تطوير استراتيجية الاستدامة من البداية إلى النهاية، وصياغة برامج المسؤولية المجتمعية وتنفيذها، وقياس الأثر، وأطر إشراك أصحاب المصلحة، وحوكمة المسؤولية المجتمعية والاتصال، وقياس العائد الاجتماعي على الاستثمار.',
        },
        {
          title: 'ذكاء ESG وأدوات الذكاء الاصطناعي',
          body: 'انطلاق في 2026. مؤشر ESG للاستدامة, منصّة مدعومة بالذكاء الاصطناعي تُصنّف جميع الشركات المدرجة في بورصة مسقط عبر الأبعاد البيئية والاجتماعية والمؤسسية، وتُقدّم أول معيار مرجعي ESG منظّم وقابل للمقارنة في عُمان. أتمتة تقارير ESG بدءاً من المرحلة الأولى للتحقق من البيانات.',
        },
        {
          title: 'الخدمات البيئية والمناخية',
          body: 'تقييم البصمة الكربونية وجرد الانبعاثات (النطاق 1 و2 و3) وفقاً لبروتوكول الانبعاثات، واستشارات الطاقة المتجددة، وإدارة سلاسل التوريد الخضراء.',
        },
        {
          title: 'تطبيق معايير ISO والاعتماد',
          body: 'دعم التطبيق والتدقيق والاعتماد لمعايير ISO 26000 (المسؤولية الاجتماعية)، و20121 (إدارة الفعاليات المستدامة)، و19600 (إدارة الامتثال)، و20400 (المشتريات المستدامة)، و37001 (مكافحة الرشوة).',
        },
        {
          title: 'التدريب على الاستدامة وبناء القدرات',
          body: 'مسار تعلّمي منظّم من المستوى التأسيسي إلى التنفيذي: أساسيات الاستدامة، تطبيق الاستدامة عملياً، القيادة الاستراتيجية للاستدامة، ISO 26000 والتدقيق الاجتماعي, ممارس معتمد في المسؤولية المجتمعية، ودورة تنفيذية متقدمة في استراتيجية وقيادة المسؤولية المجتمعية. الشهادات بالشراكة مع CSR Company International و Austrian Standards International.',
        },
      ],
      contact: {
        email: 'sustain@awj.om',
        location: 'مسقط، سلطنة عُمان',
      },
    },
  },

  innovation: {
    ar: {
      websiteUrl: 'https://dotnxt.om',
      aboutTitle: 'شركة استشارية رائدة لتمكين الأفراد ومنظومات الابتكار',
      about: [
        'نحن شركة استشارية رائدة مقرها سلطنة عُمان، متخصصة في تمكين الأفراد، وتطوير الأعمال، وبناء منظومات الابتكار، من خلال دمج الخبرات العالمية في الاستشارات والتقنية والابتكار لتحقيق نمو مستدام.',
        'نعمل مع الجهات الحكومية ومؤسسات القطاع الخاص لتمكينها من الانتقال نحو نماذج عمل أكثر ابتكاراً وكفاءة، عبر حلول متكاملة تُحدث أثراً حقيقياً وقابلاً للقياس.',
      ],
      services: [
        { title: 'تمكين الكفاءات', body: 'نُطوّر المواهب وفق معايير عالمية تتماشى مع مستهدفات رؤية عُمان 2040، لضمان جاهزية الكوادر الوطنية لمتطلبات المستقبل.' },
        { title: 'بناء القدرات الابتكارية', body: 'نُصمّم برامج نوعية تدعم ريادة الأعمال وتعزز التنافسية في مختلف القطاعات، من خلال منهجيات حديثة وتجارب عملية.' },
        { title: 'حلول تقنية متقدمة', body: 'نُوظّف أحدث التقنيات لتقديم حلول مبتكرة تدعم التحول الرقمي وتحقق أثراً مستداماً.' },
        { title: 'استشارات استراتيجية', body: 'نقدّم توجيهاً مخصصاً يساعد المؤسسات على النمو، واتخاذ قرارات فعّالة، ومواجهة التحديات بثقة.' },
        { title: 'إدارة الابتكار', body: 'نُمكّن المؤسسات من تبنّي التقنيات الناشئة وتعزيز جاهزيتها للمستقبل، عبر بناء أنظمة ابتكار متكاملة.' },
        { title: 'الملكية الفكرية', body: 'نُساعد على حماية وتطوير الأصول الفكرية وتحويلها إلى منتجات وخدمات ذات قيمة اقتصادية.' },
        { title: 'تصميم وإدارة البرامج', body: 'نُطوّر ونُدير البرامج والمشاريع الابتكارية بكفاءة عالية، بدءاً من الفكرة وحتى التنفيذ وتحقيق الأثر.' },
      ],
      contact: {
        email: 'info@dotnxt.om',
        phone: '+968 7259 4693',
        location: 'سلطنة عُمان · مسقط',
      },
    },
    en: {
      websiteUrl: 'https://dotnxt.om',
      aboutTitle: 'A leading consultancy for talent enablement and innovation ecosystems.',
      about: [
        'We are a leading consultancy based in the Sultanate of Oman, specialized in empowering individuals, developing businesses, and building innovation ecosystems. We combine global expertise in consulting, technology, and innovation to achieve sustainable growth.',
        'We work with government entities and private sector organizations to enable their transition toward more innovative and efficient business models, through integrated solutions that create real, measurable impact.',
      ],
      services: [
        { title: 'Talent Enablement', body: "We develop talent against global standards aligned with Oman Vision 2040, ensuring national cadres are ready for the work of the future." },
        { title: 'Innovation Capacity Building', body: 'We design quality programs that support entrepreneurship and competitiveness across sectors, using modern methodologies and hands-on experiences.' },
        { title: 'Advanced Technology Solutions', body: 'We deploy the latest technologies to deliver innovative solutions that drive digital transformation and create sustainable impact.' },
        { title: 'Strategic Consulting', body: 'Tailored guidance that helps institutions grow, make effective decisions, and face challenges with confidence.' },
        { title: 'Innovation Management', body: 'Enabling institutions to adopt emerging technologies and strengthen their future readiness through integrated innovation systems.' },
        { title: 'Intellectual Property', body: 'Helping protect and develop intellectual assets, turning them into products and services of economic value.' },
        { title: 'Program Design & Management', body: 'We develop and run innovation programs and projects efficiently, from idea through execution to impact.' },
      ],
      contact: {
        email: 'info@dotnxt.om',
        phone: '+968 7259 4693',
        location: 'Muscat · Sultanate of Oman',
      },
    },
  },

  systems: {
    en: {
      websiteUrl: 'https://awj.om/systems',
      aboutTitle: 'Engineering excellence for institutions that cannot fail.',
      about: [
        'AWJ Systems is the specialist AI and software engineering arm of AWJ. Based in Muscat, we partner with government entities, large enterprises, and fast-moving businesses across Oman and the GCC to deliver technology that works flawlessly on day one, and scales securely for the future.',
        "We carry AWJ's core purpose into the digital realm: making innovation meaningful. We build the digital engines that propel our clients toward their most ambitious goals, software that accelerates growth while holding up under rigorous audit, AI that solves actual operational bottlenecks, and national-scale infrastructure engineered locally by the people who rely on it.",
        'The single largest expression of this mandate is the Oman AI Studio, which AWJ Systems operates on behalf of the Ministry of Transport, Communications and Information Technology (MTCIT). Our portfolio includes mission-critical deployments for the Ministry of Social Development, the National Centre for Statistics and Information, and leading enterprises like Nama Group.',
      ],
      services: [
        {
          title: 'Advise',
          body: "Digital transformation guidance for ministries and enterprises. AI adoption, modernization roadmaps, and complex tender preparations. We help you scope the real problem, write the brief, and choose the right path forward, even when that means advising where AI isn't the right solution.",
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
        phone: '+968 9895 7933',
        location: 'Mazoon Square, 5th Floor, Al Khoudh, Muscat',
      },
    },
    ar: {
      websiteUrl: 'https://awj.om/systems',
      aboutTitle: 'تميّز هندسي للمؤسسات التي لا تحتمل الخطأ.',
      about: [
        'أوج الأنظمة هي الذراع المتخصصة في الذكاء الاصطناعي وهندسة البرمجيات لمجموعة أوج. ومقرها مسقط، نشارك الجهات الحكومية والمؤسسات الكبرى والشركات سريعة النمو في عُمان ودول الخليج في تقديم تقنية تعمل بكفاءة من اليوم الأول, وتتوسّع بأمان نحو المستقبل.',
        'نحمل غاية أوج الأساسية إلى العالم الرقمي: جعل الابتكار ذا معنى. نبني المحركات الرقمية التي تدفع عملاءنا نحو أهدافهم الأكثر طموحاً, برمجيات تُسرّع النمو وتصمد أمام التدقيق الصارم، وذكاء اصطناعي يحلّ اختناقات تشغيلية فعلية، وبنية تحتية بحجم وطني هندستها محلياً بأيدي الذين يعتمدون عليها.',
        'أكبر تجسيد لهذا التكليف هو استوديو عُمان للذكاء الاصطناعي، الذي تُشغّله أوج الأنظمة نيابةً عن وزارة النقل والاتصالات وتقنية المعلومات. تشمل محفظتنا تطبيقات حرجة لوزارة التنمية الاجتماعية والمركز الوطني للإحصاء والمعلومات ومؤسسات رائدة مثل مجموعة نماء.',
      ],
      services: [
        { title: 'الاستشارة', body: 'توجيه التحول الرقمي للوزارات والمؤسسات. تبنّي الذكاء الاصطناعي، خرائط التحديث، وإعداد العطاءات المعقّدة. نساعدك على تحديد المشكلة الحقيقية وكتابة الموجز واختيار المسار الصحيح, حتى لو كان ذلك يعني الإشارة إلى أن الذكاء الاصطناعي ليس هو الحل.' },
        { title: 'البناء', body: 'برمجيات مُخصّصة وذكاء اصطناعي إنتاجي. حلول من الصفر تمتد من منصّات الويب عالية الأداء إلى تطبيقات الموبايل متعددة المنصات إلى نماذج تعلّم آلي مُخصّصة. نماذجك مُدرَّبة على بياناتك، منشورة في بيئتك، ومملوكة لك.' },
        { title: 'التعزيز', body: 'دمج الذكاء الاصطناعي في سير العمل التشغيلي القائم. نُدمج النماذج الرائدة مباشرةً في الأنظمة التي يستخدمها فريقك بالفعل، فنُلغي العمل اليدوي دون الحاجة إلى إعادة بناء مكلفة ومُربكة.' },
        { title: 'سحابة هجينة ومحلية', body: 'نُصمّم بنى سحابية هجينة ومحلية تلتزم بصرامة بقوانين إقامة البيانات. سواء كانت مستضافة داخلياً للعملاء العُمانيين أو موسّعة دولياً لمؤسسات الخليج، تبقى بياناتك حيث ينصّ التنظيم.' },
      ],
      contact: {
        email: 'systems@awj.om',
        phone: '+968 9895 7933',
        location: 'ساحة المزون، الطابق الخامس، الخوض، مسقط',
      },
    },
  },
};
