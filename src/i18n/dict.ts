export type Lang = 'en' | 'ar';

/**
 * Every UI string used by the site. Keep both en + ar in sync, if you add a
 * key to one, add it to the other. The `t()` function falls back to the en
 * value if a key is missing in ar.
 */
const en = {
  // Nav
  'nav.about': 'About',
  'nav.pillars': 'Pillars',
  'nav.services': 'Services',
  'nav.projects': 'Projects',
  'nav.events': 'Events',
  'nav.news': 'News',
  'nav.blog': 'Blog',
  'nav.cta': 'Get in touch',
  'nav.langToggle': 'AR',
  'nav.langToggle.label': 'Switch to Arabic',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.pillarsEyebrow': 'Four pillars · one group',

  // Hero
  'hero.eyebrow': 'Sustainable technologies & innovation development Co.',
  'hero.title.line1': 'Bridge,',
  'hero.title.line2': 'Empower,',
  'hero.title.line3': 'Accelerate.',
  'hero.lede':
    "AWJ bridges the gaps in Oman's innovation ecosystem, accelerating sustainable technologies, empowering young Omani talent, and building the institutions that turn opportunity into national wealth.",
  'hero.cta.primary': 'Get in touch',
  'hero.cta.secondary': 'Explore the group',
  'hero.chips.label': 'Pillars',

  // Stats
  'stats.projects.label': 'Projects Delivered',
  'stats.projects.desc': 'Across infrastructure, ventures, and learning mandates.',
  'stats.professionals.label': 'Professionals Trained',
  'stats.professionals.desc': 'Operators, engineers, and educators upskilled in-house.',
  'stats.partners.label': 'Strategic Partners',
  'stats.partners.desc': 'Long-term partners across the GCC, Asia, and Africa.',
  'stats.experience.label': 'Years Combined Experience',
  'stats.experience.desc': 'Founding team operating expertise pooled at AWJ.',

  // Pillars stack
  'pillars.title.first': 'AWJ',
  'pillars.title.second': 'Pillars',
  'pillars.intro':
    'AWJ Corporate operates through four pillars: AWJ Academy develops people and institutions, AWJ Sustain drives sustainability transformation, AWJ Innovation enables talent, capability, and digital transformation, and AWJ Systems integrates infrastructure, digital backbone, and operational technology.',
  'pillars.prev': 'Previous',
  'pillars.next': 'Next',
  'pillars.label': 'PILLAR',
  'pillars.eyebrowPlaceholder': 'eyebrow placeholder',
  // Per-pillar descriptions used in the carousel
  'pillar.academy.desc':
    'Designs accredited learning systems, executive programs, and workforce platforms, equipping people and institutions for the work that does not yet exist.',
  'pillar.sustain.desc':
    'End-to-end ESG advisory, sustainability strategy, GRI/MSX-aligned reporting, ISO certification, climate services, and an AI-powered ESG index for MSX-listed companies.',
  'pillar.innovation.desc':
    'A consulting practice for talent enablement, capability building, advanced technology, strategy, innovation management, IP, and program design, aligned with Oman Vision 2040.',
  'pillar.systems.desc':
    'Mission-critical engineering and integration, infrastructure, digital backbone, and operational technology for the institutions that keep regions running.',
  'pillar.meta.established': 'Established',
  'pillar.meta.reach': 'Reach',
  'pillar.meta.alumni': 'Alumni',
  'pillar.meta.partner': 'Partner',
  'pillar.meta.focus': 'Focus',
  'pillar.meta.based': 'Based',
  'pillar.meta.sectors': 'Sectors',
  'pillar.meta.mandates': 'Mandates',
  'pillar.academy.reach': '12 countries',
  'pillar.academy.alumni': '38,000+',
  'pillar.sustain.partner': 'CSR Company Intl.',
  'pillar.sustain.reach': '70+ countries',
  'pillar.sustain.focus': 'ESG · Reporting · AI',
  'pillar.innovation.based': 'Muscat, Oman',
  'pillar.innovation.sectors': 'Government · Private',
  'pillar.innovation.focus': 'Talent · Tech · Strategy',
  'pillar.systems.mandates': '240+',
  'pillar.systems.focus': 'OT · Digital',

  // Services bento
  'services.eyebrow': 'Key service from each pillar',
  'services.title.first': 'What we do',
  'services.title.second': 'together.',
  'services.more': 'More services',
  'services.b1.title.line1': 'Strategic',
  'services.b1.title.line2': 'Advisory',
  'services.b1.body':
    'Operating-model design, capital strategy, and group-level transformation programs delivered with cross-pillar discipline.',
  'services.b2.title': 'Capability Building',
  'services.b2.body': 'Accredited learning systems and workforce development at scale.',
  'services.b3.title': 'ISO Standards Implementation & Certification',
  'services.b3.body':
    'Practical implementation, auditing and certification support across ISO 26000, 20121, 19600, 20400 & 37001.',
  'services.b4.title': 'Innovation & Capability',
  'services.b4.body': 'Talent, advanced tech & strategy.',
  'services.b5.title': 'Systems Integration',
  'services.b5.body': 'Mission-critical engineering & OT.',

  // Projects (case-studies grid)
  'projects.eyebrow': 'Selected projects',
  'projects.title.first': 'Success',
  'projects.title.second': 'stories.',
  'projects.modal.achievements': 'Key achievements',
  'projects.modal.close': 'Close',

  // News landing block
  'news.title.first': 'News &',
  'news.title.second': 'announcements.',
  'news.viewAll': 'View all news',
  'news.latest': 'Latest',
  'news.allStories': 'All stories',
  'news.readStory': 'Read story',

  // Partners
  'partners.eyebrow': 'Partners & clients',
  'partners.title.before': 'Working alongside',
  'partners.title.highlight': 'institutions',
  'partners.title.after': ', governments, and industry leaders.',

  // Contact
  'contact.title': 'Contact us',
  'contact.lede':
    'A short, structured intake helps us route your enquiry to the right pillar and partner. Most replies within two business days.',
  'contact.step1': 'Which pillar are you interested in?',
  'contact.step2': "What's the area of engagement?",
  'contact.step3': 'Tell us about you.',
  'contact.step4': 'Ready to send.',
  'contact.field.name': 'Full name',
  'contact.field.email': 'Email',
  'contact.field.org': 'Organisation (optional)',
  'contact.field.message': 'Briefly, what would you like to discuss?',
  'contact.area.advisory': 'Strategic advisory',
  'contact.area.advisory.sub': 'Group-level mandates',
  'contact.area.delivery': 'Project delivery',
  'contact.area.delivery.sub': 'Infrastructure / programs',
  'contact.area.partnership': 'Partnership / JV',
  'contact.area.partnership.sub': 'Co-build with us',
  'contact.area.press': 'Press / Media',
  'contact.area.press.sub': 'Editorial enquiry',
  'contact.pillar.academy.label': 'AWJ Academy',
  'contact.pillar.academy.sub': 'Capability building',
  'contact.pillar.sustain.label': 'AWJ Sustain',
  'contact.pillar.sustain.sub': 'Climate & ESG',
  'contact.pillar.innovation.label': 'AWJ Innovation',
  'contact.pillar.innovation.sub': 'Ventures & R&D',
  'contact.pillar.systems.label': 'AWJ Systems',
  'contact.pillar.systems.sub': 'Engineering & infra',
  'contact.summary.pillar': 'Pillar',
  'contact.summary.area': 'Area',
  'contact.summary.name': 'Name',
  'contact.summary.email': 'Email',
  'contact.summary.org': 'Organisation',
  'contact.summary.dash': '-',
  'contact.back': 'Back',
  'contact.continue': 'Continue',
  'contact.send': 'Send enquiry',
  'contact.thanks': "Thanks, we'll be in touch.",

  // Footer
  'footer.brand.desc':
    'An integrated holding group operating across Academy, Sustain, Innovation, and Systems, building durable progress for the regions and sectors we serve.',
  'footer.newsletter.placeholder': 'your@email.com',
  'footer.newsletter.subscribed': 'Subscribed.',
  'footer.col.pillars': 'Pillars',
  'footer.col.group': 'Group',
  'footer.col.group.companies': 'Companies',
  'footer.col.group.capabilities': 'Capabilities',
  'footer.col.group.work': 'Work',
  'footer.col.group.news': 'News',
  'footer.col.connect': 'Connect',
  'footer.col.connect.contact': 'Contact',
  'footer.col.connect.careers': 'Careers',
  'footer.col.connect.press': 'Press',
  'footer.col.connect.ir': 'Investor relations',
  'footer.copyright': '© 2026 AWJ Corporate · All rights reserved',
  'footer.cities': 'Riyadh · Dubai · London · Singapore',

  // Pillar pages (chrome)
  'pillarPage.back': 'Back to AWJ',
  'pillarPage.meta': 'Pillar',
  'pillarPage.about': 'About',
  'pillarPage.whatWeDo': 'What we do',
  'pillarPage.contact': 'Get in touch',
  'pillarPage.cta': 'Visit',
  'pillarPage.contact.email': 'Email',
  'pillarPage.contact.phone': 'Phone',
  'pillarPage.contact.location': 'Location',
  'pillarPage.contact.social': 'Social',

  // News page chrome
  'newsPage.back': 'Back to AWJ',
  'newsPage.meta': 'The Dispatch',
  'newsPage.stories': 'stories',
  'newsPage.title.first': 'News &',
  'newsPage.title.second': 'announcements',
  'newsPage.lede':
    'Mandates, partnerships, and program milestones from across the AWJ group, Innovation, Academy, Sustain, and Systems.',
  'newsPage.featured': 'Featured stories',
  'newsPage.featuredTitle': 'Top of the desk.',
  'newsPage.allEyebrow': 'All stories',
  'newsPage.allTitle': 'The complete archive.',
  'newsPage.filterTopic': 'Topic',
  'newsPage.filterPillar': 'Pillar',
  'newsPage.filterAll': 'All',
  'newsPage.empty': 'No stories match your filters.',
  'newsPage.read': 'Read',
  'newsPage.featuredBadge': 'Featured',
  'newsPage.countOf': 'of',
} as const;

export type TranslationKey = keyof typeof en;

const ar: Record<TranslationKey, string> = {
  // Nav
  'nav.about': 'من نحن',
  'nav.pillars': 'الركائز',
  'nav.services': 'الخدمات',
  'nav.projects': 'المشاريع',
  'nav.events': 'الفعاليات',
  'nav.news': 'الأخبار',
  'nav.blog': 'المدونة',
  'nav.cta': 'تواصل معنا',
  'nav.langToggle': 'EN',
  'nav.langToggle.label': 'Switch to English',
  'nav.openMenu': 'فتح القائمة',
  'nav.closeMenu': 'إغلاق القائمة',
  'nav.pillarsEyebrow': 'أربع ركائز · مجموعة واحدة',

  // Hero
  'hero.eyebrow': 'شركة التقنيات المستدامة وتطوير الابتكار',
  'hero.title.line1': 'نَجسر،',
  'hero.title.line2': 'نُمكِّن،',
  'hero.title.line3': 'نُسرِّع.',
  'hero.lede':
    'تَسد أوج الفجوات في منظومة الابتكار العُمانية, مُسرِّعةً التقنيات المستدامة، ومُمكِّنةً المواهب العُمانية الشابة، وبانيةً المؤسسات التي تُحوِّل الفرص إلى ثروة وطنية.',
  'hero.cta.primary': 'تواصل معنا',
  'hero.cta.secondary': 'استكشف المجموعة',
  'hero.chips.label': 'الركائز',

  // Stats
  'stats.projects.label': 'مشروع منجز',
  'stats.projects.desc': 'في البنية التحتية والمشاريع الاستثمارية وبرامج التعلم.',
  'stats.professionals.label': 'مهني تم تدريبه',
  'stats.professionals.desc': 'مشغّلون ومهندسون ومُربّون رفعوا قدراتهم داخلياً.',
  'stats.partners.label': 'شريك استراتيجي',
  'stats.partners.desc': 'شراكات طويلة الأمد في الخليج وآسيا وأفريقيا.',
  'stats.experience.label': 'سنة خبرة مجتمعة',
  'stats.experience.desc': 'خبرات تشغيلية تأسيسية مجتمعة في أوج.',

  // Pillars stack
  'pillars.title.first': 'ركائز',
  'pillars.title.second': 'أوج',
  'pillars.intro':
    'تعمل أوج عبر أربع ركائز: أكاديمية أوج تُطوّر الأفراد والمؤسسات، وأوج للاستدامة تقود التحوّل البيئي والاجتماعي، وأوج للابتكار تُمكّن الكفاءات والقدرات والتحوّل الرقمي، وأوج سيستمز تُكامل البنية التحتية والعمود الرقمي والتقنية التشغيلية.',
  'pillars.prev': 'السابق',
  'pillars.next': 'التالي',
  'pillars.label': 'ركيزة',
  'pillars.eyebrowPlaceholder': 'نص بديل',
  'pillar.academy.desc':
    'تُصمّم منظومات تعلّم معتمدة وبرامج تنفيذية ومنصات لتنمية القوى العاملة, تُجهّز الأفراد والمؤسسات لأعمال لم تُولد بعد.',
  'pillar.sustain.desc':
    'استشارات حوكمة بيئية واجتماعية ومؤسسية متكاملة, استراتيجية الاستدامة، تقارير مواءمة GRI/MSX، شهادات ISO، خدمات المناخ، ومؤشر ESG مدعوم بالذكاء الاصطناعي للشركات المدرجة.',
  'pillar.innovation.desc':
    'ممارسة استشارية لتمكين الكفاءات وبناء القدرات والتقنية المتقدمة والاستراتيجية وإدارة الابتكار والملكية الفكرية وتصميم البرامج, متوافقة مع رؤية عُمان 2040.',
  'pillar.systems.desc':
    'هندسة وتكامل للأنظمة الحرجة, البنية التحتية والعمود الرقمي والتقنية التشغيلية للمؤسسات التي تُبقي المناطق تعمل.',
  'pillar.meta.established': 'التأسيس',
  'pillar.meta.reach': 'الانتشار',
  'pillar.meta.alumni': 'الخريجون',
  'pillar.meta.partner': 'الشريك',
  'pillar.meta.focus': 'التركيز',
  'pillar.meta.based': 'المقر',
  'pillar.meta.sectors': 'القطاعات',
  'pillar.meta.mandates': 'التكليفات',
  'pillar.academy.reach': '12 دولة',
  'pillar.academy.alumni': '+38,000',
  'pillar.sustain.partner': 'CSR Company Intl.',
  'pillar.sustain.reach': '+70 دولة',
  'pillar.sustain.focus': 'ESG · تقارير · ذكاء اصطناعي',
  'pillar.innovation.based': 'مسقط، عُمان',
  'pillar.innovation.sectors': 'حكومي · خاص',
  'pillar.innovation.focus': 'كفاءات · تقنية · استراتيجية',
  'pillar.systems.mandates': '+240',
  'pillar.systems.focus': 'تقنية تشغيلية · رقمي',

  // Services bento
  'services.eyebrow': 'خدمة رئيسية من كل ركيزة',
  'services.title.first': 'ماذا نفعل',
  'services.title.second': 'معاً.',
  'services.more': 'المزيد من الخدمات',
  'services.b1.title.line1': 'استشارات',
  'services.b1.title.line2': 'استراتيجية',
  'services.b1.body':
    'تصميم نماذج التشغيل واستراتيجية رأس المال وبرامج التحوّل على مستوى المجموعة بانضباط متعدد الركائز.',
  'services.b2.title': 'بناء القدرات',
  'services.b2.body': 'منظومات تعلّم معتمدة وتطوير القوى العاملة على نطاق واسع.',
  'services.b3.title': 'تطبيق معايير ISO والاعتماد',
  'services.b3.body':
    'دعم التطبيق والتدقيق والاعتماد لمعايير ISO 26000 و20121 و19600 و20400 و37001.',
  'services.b4.title': 'الابتكار والقدرات',
  'services.b4.body': 'الكفاءات والتقنية المتقدمة والاستراتيجية.',
  'services.b5.title': 'تكامل الأنظمة',
  'services.b5.body': 'هندسة حرجة وتقنية تشغيلية.',

  // Projects
  'projects.eyebrow': 'مشاريع مختارة',
  'projects.title.first': 'قصص',
  'projects.title.second': 'نجاح.',
  'projects.modal.achievements': 'أبرز الإنجازات',
  'projects.modal.close': 'إغلاق',

  // News landing block
  'news.title.first': 'الأخبار',
  'news.title.second': 'والإعلانات.',
  'news.viewAll': 'عرض كل الأخبار',
  'news.latest': 'الأحدث',
  'news.allStories': 'كل القصص',
  'news.readStory': 'اقرأ القصة',

  // Partners
  'partners.eyebrow': 'الشركاء والعملاء',
  'partners.title.before': 'نعمل إلى جانب',
  'partners.title.highlight': 'المؤسسات',
  'partners.title.after': ' والحكومات وقادة الصناعة.',

  // Contact
  'contact.title': 'تواصل معنا',
  'contact.lede':
    'استمارة قصيرة ومنظّمة تساعدنا على توجيه استفسارك إلى الركيزة والشريك المناسبَين. عادةً ما نرد خلال يومَي عمل.',
  'contact.step1': 'بأي ركيزة أنت مهتم؟',
  'contact.step2': 'ما مجال التعاون؟',
  'contact.step3': 'عرّفنا بنفسك.',
  'contact.step4': 'جاهز للإرسال.',
  'contact.field.name': 'الاسم الكامل',
  'contact.field.email': 'البريد الإلكتروني',
  'contact.field.org': 'المؤسسة (اختياري)',
  'contact.field.message': 'باختصار، ما الذي تودّ مناقشته؟',
  'contact.area.advisory': 'استشارات استراتيجية',
  'contact.area.advisory.sub': 'تكليفات على مستوى المجموعة',
  'contact.area.delivery': 'تنفيذ المشاريع',
  'contact.area.delivery.sub': 'بنية تحتية / برامج',
  'contact.area.partnership': 'شراكة / مشروع مشترك',
  'contact.area.partnership.sub': 'البناء معاً',
  'contact.area.press': 'صحافة / إعلام',
  'contact.area.press.sub': 'استفسار تحريري',
  'contact.pillar.academy.label': 'أكاديمية أوج',
  'contact.pillar.academy.sub': 'بناء القدرات',
  'contact.pillar.sustain.label': 'أوج للاستدامة',
  'contact.pillar.sustain.sub': 'المناخ والحوكمة البيئية',
  'contact.pillar.innovation.label': 'أوج للابتكار',
  'contact.pillar.innovation.sub': 'مشاريع وأبحاث',
  'contact.pillar.systems.label': 'أوج سيستمز',
  'contact.pillar.systems.sub': 'هندسة وبنية تحتية',
  'contact.summary.pillar': 'الركيزة',
  'contact.summary.area': 'المجال',
  'contact.summary.name': 'الاسم',
  'contact.summary.email': 'البريد',
  'contact.summary.org': 'المؤسسة',
  'contact.summary.dash': '-',
  'contact.back': 'السابق',
  'contact.continue': 'متابعة',
  'contact.send': 'إرسال الاستفسار',
  'contact.thanks': 'شكراً, سنتواصل قريباً.',

  // Footer
  'footer.brand.desc':
    'مجموعة قابضة متكاملة تعمل عبر الأكاديمية والاستدامة والابتكار والأنظمة, لبناء تقدّم راسخ في المناطق والقطاعات التي نخدمها.',
  'footer.newsletter.placeholder': 'بريدك@الإلكتروني',
  'footer.newsletter.subscribed': 'تم الاشتراك.',
  'footer.col.pillars': 'الركائز',
  'footer.col.group': 'المجموعة',
  'footer.col.group.companies': 'الشركات',
  'footer.col.group.capabilities': 'القدرات',
  'footer.col.group.work': 'الأعمال',
  'footer.col.group.news': 'الأخبار',
  'footer.col.connect': 'تواصل',
  'footer.col.connect.contact': 'اتصل بنا',
  'footer.col.connect.careers': 'الوظائف',
  'footer.col.connect.press': 'الصحافة',
  'footer.col.connect.ir': 'علاقات المستثمرين',
  'footer.copyright': '© 2026 أوج Corporate · جميع الحقوق محفوظة',
  'footer.cities': 'الرياض · دبي · لندن · سنغافورة',

  // Pillar pages
  'pillarPage.back': 'العودة إلى أوج',
  'pillarPage.meta': 'الركيزة',
  'pillarPage.about': 'من نحن',
  'pillarPage.whatWeDo': 'ماذا نفعل',
  'pillarPage.contact': 'تواصل معنا',
  'pillarPage.cta': 'زيارة',
  'pillarPage.contact.email': 'البريد الإلكتروني',
  'pillarPage.contact.phone': 'الهاتف',
  'pillarPage.contact.location': 'الموقع',
  'pillarPage.contact.social': 'وسائل التواصل',

  // News page chrome
  'newsPage.back': 'العودة إلى أوج',
  'newsPage.meta': 'النشرة',
  'newsPage.stories': 'قصة',
  'newsPage.title.first': 'الأخبار',
  'newsPage.title.second': 'والإعلانات',
  'newsPage.lede':
    'تكليفات وشراكات ومحطات بارزة من مختلف مجموعة أوج, للابتكار والأكاديمية والاستدامة والأنظمة.',
  'newsPage.featured': 'قصص مميّزة',
  'newsPage.featuredTitle': 'صدارة المكتب.',
  'newsPage.allEyebrow': 'كل القصص',
  'newsPage.allTitle': 'الأرشيف الكامل.',
  'newsPage.filterTopic': 'الموضوع',
  'newsPage.filterPillar': 'الركيزة',
  'newsPage.filterAll': 'الكل',
  'newsPage.empty': 'لا توجد قصص تطابق الفلاتر المختارة.',
  'newsPage.read': 'اقرأ',
  'newsPage.featuredBadge': 'مميّز',
  'newsPage.countOf': 'من',
};

export const DICT: Record<Lang, Record<TranslationKey, string>> = { en, ar };
