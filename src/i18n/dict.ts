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
  'hero.eyebrow': 'Sustainable Innovation and Technologies Development Company (AWJ)',
  'hero.title.line1': 'Creating',
  'hero.title.line2': 'a Sustainable',
  'hero.title.line3': 'Future',
  'hero.lede':
    'The greatest challenges of our world are not solved by resources alone. They are solved by the capacity to innovate. When knowledge meets technology and people, ideas become reality and opportunities become lasting impact.',
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
    'AWJ Corporate operates through four pillars: AWJ Academy develops people and institutions, AWJ Sustain drives sustainability transformation, AWJ Innovation enables talent, capability, and digital transformation, and AWJ Systems integrates infrastructure, digital backbone, and operational technology.',
  'pillars.prev': 'Previous',
  'pillars.next': 'Next',
  'pillars.label': 'PILLAR',
  'pillars.eyebrowPlaceholder': 'eyebrow placeholder',
  // Pillar display names (used in CTAs + carousel cards)
  'pillar.academy.fullName': 'AWJ Academy',
  'pillar.sustain.fullName': 'AWJ Sustain',
  'pillar.innovation.fullName': 'AWJ Innovation',
  'pillar.systems.fullName': 'AWJ Systems',
  // Per-pillar descriptions used in the carousel
  'pillar.academy.desc':
    'The human capital and professional development arm, specializing in designing and implementing learning and professional development programs that empower individuals and institutions to lead innovation, enhance competitiveness, and meet future demands.',
  'pillar.sustain.desc':
    'Strategic partner in sustainability and institutional excellence specialising in environmental, social and governance (ESG) strategies and impact management to enable organizations to achieve responsible growth and lasting value for business and society.',
  'pillar.innovation.desc':
    'A specialized arm for designing and managing innovation ecosystems, research & development, and technology transfer, converting ideas and emerging opportunities into solutions, products, and services with lasting impact and sustainable value.',
  'pillar.systems.desc':
    'A center of excellence in future technologies, specializing in data, artificial intelligence, quantum computing, and emerging technologies, developing intelligent solutions and systems that support innovation, institutional transformation, and decision-making.',
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
  'services.title': 'Our Key Services',
  'services.more': 'More services',
  'services.b1.title.line1': 'Strategic',
  'services.b1.title.line2': 'Advisory',
  'services.b1.body':
    'Operating-model design, capital strategy, and group-level transformation programs delivered with cross-pillar discipline.',
  'services.b2.title': 'Capability Building',
  'services.b2.body': 'Designing and implementing learning and professional development programs that enable individuals and institutions to lead innovation and enhance competitiveness.',
  'services.b3.title': 'Sustainability & Governance',
  'services.b3.body':
    'End-to-end sustainability strategy, ESG advisory, impact measurement, and governance frameworks enabling responsible growth and sustainable value.',
  'services.b4.title': 'Innovation Ecosystems',
  'services.b4.body': 'Designing and managing innovation, R&D, and technology transfer ecosystems that transform ideas into solutions with sustainable impact.',
  'services.b5.title': 'Future Technologies & AI',
  'services.b5.body': 'Specializing in data, artificial intelligence, quantum computing, and emerging technologies to develop smart solutions supporting institutional transformation.',

  // Projects (case-studies grid)
  'projects.eyebrow': 'Selected projects',
  'projects.title.first': 'Success',
  'projects.title.second': 'stories',
  'projects.modal.achievements': 'Key achievements',
  'projects.modal.close': 'Close',

  // News landing block
  'news.title.first': 'News &',
  'news.title.second': 'articles',
  'news.viewAll': 'View all news',
  'news.latest': 'Latest',
  'news.allStories': 'All stories',
  'news.readStory': 'Read story',

  // Partners
  'partners.eyebrow': 'Partners & clients',
  'partners.title.before': 'Working alongside',
  'partners.title.highlight': 'institutions',
  'partners.title.after': ', governments, and industry leaders',

  // Contact
  'contact.title': 'Contact us',
  'contact.lede':
    'A short, structured intake helps us route your enquiry to the right pillar and partner. Most replies within two business days.',
  'contact.callUs': 'Or call us directly',
  'contact.step1': 'Which pillar are you interested in?',
  'contact.step2': "What's the area of engagement?",
  'contact.step3': 'Tell us about you',
  'contact.step4': 'Ready to send',
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
  'contact.sending': 'Sending...',
  'contact.error': 'Something went wrong. Please try again, or email info@awj.om directly.',
  'contact.sent.body': "Your enquiry has been sent. We'll be in touch shortly.",

  // Footer
  'footer.brand.desc':
    'An integrated holding group operating across\nAcademy, Sustain, Innovation, and Systems, building durable progress for the regions and sectors we serve.',
  'footer.col.pillars': 'Pillars',
  'footer.col.location': 'Location',
  'footer.col.address': 'We operate from Mazoon Square, 5th Floor, Al Khoudh, Muscat, Sultanate of Oman, aligned with standard Muscat working hours (Sunday to Thursday).',
  'footer.col.hours': '',
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
  'pillarPage.numbers': 'Numbers & Impact',
  'pillarPage.coreServices': 'Core Services',
  'pillarPage.value': 'Value Proposition',
  'pillarPage.projects': 'Reference Works',
  'pillarPage.clients': 'Clients & Partners',
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
  'newsPage.title.second': 'articles',
  'newsPage.lede':
    'Mandates, partnerships, and program milestones from across the AWJ group, Innovation, Academy, Sustain, and Systems.',
  'newsPage.featured': 'Featured stories',
  'newsPage.allEyebrow': 'All stories',
  'newsPage.filterTopic': 'Topic',
  'newsPage.filterPillar': 'Pillar',
  'newsPage.filterAll': 'All',
  'newsPage.empty': 'No stories match your filters.',
  'newsPage.read': 'Read',
  'newsPage.featuredBadge': 'Featured',
  'newsPage.countOf': 'of',
} as const;

export type TranslationKey = keyof typeof en;

// Arabic uses APPROVED copy only (see content/approved-content-ar.md). Any key
// without approved Arabic is intentionally omitted so t() falls back to English
// — never machine-translate. Partial<> allows those omissions.
const ar: Partial<Record<TranslationKey, string>> = {
  // Nav
  'nav.about': 'من نحن',
  'nav.pillars': 'القطاعات',
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
  'nav.pillarsEyebrow': 'أربعة قطاعات · مجموعة واحدة',

  // Hero
  // Approved company name (content/approved-content-ar.md → شريحة الغلاف).
  'hero.eyebrow': 'شركة تنمية الابتكار والتقنيات المستدامة (أوج)',
  // Arabic hero title (user-provided): "نبتكر مستقبلاً مستداماً" — split across
  // the three headline lines so none fall back to English.
  'hero.title.line1': 'نبتكر',
  'hero.title.line2': 'مستقبلاً',
  'hero.title.line3': 'مستداماً',
  'hero.lede':
    'نعمل مع المؤسسات الحكومية والأكاديمية والصناعية لبناء منظومات الابتكار، وتطوير القدرات، وتسريع التحول المؤسسي، وتمكين الاستدامة. ومن خلال ربط العلوم والتكنولوجيا والابتكار بالتطبيق العملي، نساعد شركاءنا على تحقيق نمو مستدام وخلق قيمة طويلة الأمد.',
  'hero.cta.primary': 'تواصل معنا',
  'hero.cta.secondary': 'استكشف المجموعة',
  'hero.chips.label': 'القطاعات',

  // Stats (labels kept; descriptions need approved Arabic → English fallback)
  'stats.projects.label': 'مشروع منجز',
  'stats.professionals.label': 'مهني تم تدريبه',
  'stats.partners.label': 'شريك استراتيجي',
  'stats.experience.label': 'سنة خبرة مجتمعة',

  // Pillars stack
  'pillars.title.first': 'قطاعات',
  'pillars.title.second': 'أوج',
  'pillars.intro':
    'أربعة قطاعات متخصصة\nتعمل معاً لتقديم حلول متكاملة\nتحقق نمواً مستداماً.',
  'pillars.prev': 'السابق',
  'pillars.next': 'التالي',
  'pillars.label': 'قطاع',
  'pillars.eyebrowPlaceholder': 'نص بديل',
  'pillar.academy.fullName': 'أكاديمية أوج',
  'pillar.sustain.fullName': 'أوج الاستدامة',
  'pillar.innovation.fullName': 'أوج الابتكار',
  'pillar.systems.fullName': 'أوج الأنظمة',
  // Pillar definitions — approved «تعريف القطاع» (content/approved-content-ar.md).
  'pillar.academy.desc':
    'أكاديمية أوج منصة متكاملة للمعرفة والتدريب والحوار العلمي، تقدّم برامج تعليمية وتدريبية متقدمة وشاملة تلبّي الاحتياجات الفعلية لسوق العمل والمجتمع، مع التركيز على التمكين بالمعارف والمهارات في بيئة تفاعلية تجمع بين الخبرات العالمية والسياق المحلي.',
  'pillar.sustain.desc':
    'أوج للاستدامة هي الذراع المتخصص في الاستدامة والتميز المؤسسي ضمن مجموعة أوج، تقدّم حلولاً متكاملة في حوكمة (ESG) والمسؤولية الاجتماعية والتحول المؤسسي المستدام.',
  'pillar.innovation.desc':
    'قطاع متخصص في تصميم وتطوير وتشغيل منظومات الابتكار وريادة الأعمال، وتحويل الأفكار والأبحاث إلى مشاريع وشركات ذات أثر اقتصادي وتنموي مستدام.',
  'pillar.systems.desc':
    'نصمم ونطوّر ونُكامل الأنظمة البرمجية وحلول الذكاء الاصطناعي الجاهزة للإنتاج لصالح الجهات الحكومية والمؤسسات الكبرى في عُمان ودول الخليج، ونعمل عبر ثلاثة محاور: المشاريع، والمنتجات، والبحث والتطوير.',
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

  // Services bento (title/more kept; card copy needs approved Arabic → English fallback)
  'services.title': 'خدماتنا الرئيسية',
  'services.more': 'المزيد من الخدمات',

  // Projects
  'projects.eyebrow': 'مشاريع مختارة',
  'projects.title.first': 'قصص',
  'projects.title.second': 'نجاح',
  'projects.modal.achievements': 'أبرز الإنجازات',
  'projects.modal.close': 'إغلاق',

  // News landing block
  'news.title.first': 'الأخبار',
  'news.title.second': 'والإعلانات',
  'news.viewAll': 'عرض كل الأخبار',
  'news.latest': 'الأحدث',
  'news.allStories': 'كل القصص',
  'news.readStory': 'اقرأ القصة',

  // Partners
  'partners.eyebrow': 'الشركاء والعملاء',
  'partners.title.before': 'نعمل إلى جانب',
  'partners.title.highlight': 'المؤسسات',
  'partners.title.after': ' والحكومات وقادة الصناعة',

  // Contact
  'contact.title': 'تواصل معنا',
  // contact.lede: needs approved Arabic → English fallback.
  'contact.callUs': 'أو اتصل بنا مباشرة',
  'contact.step1': 'بأي قطاع أنت مهتم؟',
  'contact.step2': 'ما مجال التعاون؟',
  'contact.step3': 'عرّفنا بنفسك',
  'contact.step4': 'جاهز للإرسال',
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
  'contact.pillar.sustain.label': 'أوج الاستدامة',
  'contact.pillar.sustain.sub': 'المناخ والحوكمة البيئية',
  'contact.pillar.innovation.label': 'أوج الابتكار',
  'contact.pillar.innovation.sub': 'مشاريع وأبحاث',
  'contact.pillar.systems.label': 'أوج الأنظمة',
  'contact.pillar.systems.sub': 'هندسة وبنية تحتية',
  'contact.summary.pillar': 'القطاع',
  'contact.summary.area': 'المجال',
  'contact.summary.name': 'الاسم',
  'contact.summary.email': 'البريد',
  'contact.summary.org': 'المؤسسة',
  'contact.summary.dash': '-',
  'contact.back': 'السابق',
  'contact.continue': 'متابعة',
  'contact.send': 'إرسال الاستفسار',
  'contact.thanks': 'شكراً, سنتواصل قريباً.',

  // Footer (brand.desc needs approved Arabic → English fallback)
  'footer.col.pillars': 'القطاعات',
  'footer.col.location': 'الموقع',
  'footer.col.address': 'نعمل من ساحة المزون، الطابق الخامس، الخوض، مسقط، سلطنة عمان، متوافقين مع ساعات العمل القياسية في مسقط (من الأحد إلى الخميس).',
  'footer.col.hours': '',
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
  'pillarPage.meta': 'القطاع',
  'pillarPage.about': 'من نحن',
  'pillarPage.whatWeDo': 'ماذا نفعل',
  'pillarPage.numbers': 'الأرقام والأثر',
  'pillarPage.coreServices': 'الخدمات الأساسية',
  'pillarPage.value': 'القيمة المضافة',
  'pillarPage.projects': 'الأعمال المرجعية',
  'pillarPage.clients': 'العملاء والشركاء',
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
  // newsPage.lede: needs approved Arabic → English fallback.
  'newsPage.featured': 'قصص مميّزة',
  'newsPage.allEyebrow': 'كل القصص',
  'newsPage.filterTopic': 'الموضوع',
  'newsPage.filterPillar': 'القطاع',
  'newsPage.filterAll': 'الكل',
  'newsPage.empty': 'لا توجد قصص تطابق الفلاتر المختارة.',
  'newsPage.read': 'اقرأ',
  'newsPage.featuredBadge': 'مميّز',
  'newsPage.countOf': 'من',
};

export const DICT: Record<Lang, Partial<Record<TranslationKey, string>>> = { en, ar };
