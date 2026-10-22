export const locales = ['en', 'de', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A piece of text in every site language. */
export type L10n = Record<Locale, string>;

export const localeNames: Record<Locale, { short: string; native: string }> = {
  en: { short: 'EN', native: 'English' },
  de: { short: 'DE', native: 'Deutsch' },
  ar: { short: 'AR', native: 'العربية' },
};

/** BCP 47 tags used for dates and Open Graph. Arabic keeps Latin digits. */
export const intlLocale: Record<Locale, string> = { en: 'en-GB', de: 'de-DE', ar: 'ar-u-nu-latn' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', de: 'de_DE', ar: 'ar_AR' };

export const dir = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr');

export function asLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
}

/** `localePath('de', 'books/')` → `/de/books/`; `localePath('en', '')` → `/`. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return locale === defaultLocale ? `/${clean}` : `/${locale}/${clean}`;
}

/** Path without its locale prefix and leading slash: `/de/books/` → `books/`. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|ar)(\/|$)/);
  return (match ? pathname.slice(match[0].length) : pathname).replace(/^\/+/, '');
}

/** "2024-04" → "Apr 2024" / "Apr. 2024" / "أبريل 2024". */
export function formatMonth(ym: string, locale: Locale): string {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(y, m - 1, 1)),
  );
}

const en = {
  meta: {
    homeTitle: 'Aziz Feriani · Software Engineer – AI & Data',
    homeDescription:
      'Aziz Feriani is a Software Engineer for AI & Data in Dortmund, building machine-learning, AI and database solutions, and the author of the Arabic novel “A Letter from the Sea of Carthage”.',
    booksTitle: 'Books · Aziz Feriani',
    booksDescription: 'Novels by Aziz Feriani, free to read and download.',
    cvTitle: 'CV · Aziz Feriani',
    cvDescription: 'Curriculum vitae of Aziz Feriani, Software Engineer – AI & Data.',
    notFoundTitle: 'Lost at sea · Aziz Feriani',
  },
  nav: {
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    books: 'Books',
    contact: 'Contact',
    cv: 'CV',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    skip: 'Skip to content',
    themeToNight: 'Switch to night theme',
    themeToDawn: 'Switch to dawn theme',
    backToTop: 'Back to top',
  },
  hero: {
    greeting: 'Hello, I’m',
    viewWork: 'View my work',
    readNovel: 'Read my novel',
    scroll: 'Scroll',
    focusLabel: 'Focus',
  },
  about: {
    kicker: 'About',
    title: 'Code, data, and a little bit of sea salt',
    facts: { based: 'Based in', languages: 'Languages', studied: 'Studied', offClock: 'Off the clock' },
    stats: { years: 'Years in software', repos: 'Public repositories', certs: 'Certifications', novel: 'Novel written' },
  },
  journey: { kicker: 'Journey', title: 'Experience & education', present: 'Present', work: 'Work', education: 'Education' },
  projects: {
    kicker: 'Projects',
    title: 'Things I’ve built',
    intro: 'A selection from 28 public repositories, from real-time data pipelines to test automation and games.',
    all: 'All',
    code: 'Code',
    noCode: 'Private code',
    seeAll: 'See all repositories on GitHub',
  },
  skills: { kicker: 'Toolbox', title: 'Skills & technologies', spoken: 'Spoken languages' },
  certs: { kicker: 'Certifications', title: 'Always learning' },
  book: {
    kicker: 'Also an author',
    discover: 'Discover the novel',
    download: 'Download free PDF',
    downloadShort: 'Free PDF',
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s build something together',
    text: 'Open to conversations about AI, data and software projects, or about books. The fastest way to reach me is email.',
    copy: 'Copy email',
    copied: 'Copied!',
    location: 'Dortmund, Germany',
  },
  books: {
    kicker: 'Books',
    title: 'Stories I’ve written',
    intro: 'Every book here is free to read. Download it, share it, and tell me what you think.',
    next: 'The next story is still being written…',
    read: 'Read more',
  },
  bookPage: {
    back: 'All books',
    by: 'by',
    pages: 'pages',
    chapters: 'chapters',
    illustrations: 'illustrations',
    language: 'Language',
    arabic: 'Arabic',
    free: 'Free download · PDF',
    about: 'About the novel',
    opening: 'Read the opening',
    gallery: 'Illustrations',
    chapter: 'Chapter',
    prev: 'Previous',
    next: 'Next',
    close: 'Close',
    originalBlurb: 'In Arabic',
    translationNote: 'Available in Arabic for now. Translations are coming in a future update.',
  },
  cv: {
    save: 'Save as PDF',
    back: 'Back to website',
    summary: 'Profile',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    projects: 'Selected projects',
    languages: 'Languages',
  },
  notFound: {
    title: 'Lost at sea',
    text: 'This page drifted off the map. Let’s steer you back to the harbour.',
    home: 'Back to the harbour',
  },
  footer: { made: 'Built in Dortmund, under a Carthage sky.' },
};

export type UI = typeof en;

const de: UI = {
  meta: {
    homeTitle: 'Aziz Feriani · Software Engineer – KI & Daten',
    homeDescription:
      'Aziz Feriani ist Software Engineer für KI & Daten in Dortmund. Er entwickelt Lösungen rund um Machine Learning, KI und Datenbanken und ist Autor des arabischen Romans „Ein Brief aus dem Meer von Karthago“.',
    booksTitle: 'Bücher · Aziz Feriani',
    booksDescription: 'Romane von Aziz Feriani, kostenlos zum Lesen und Herunterladen.',
    cvTitle: 'Lebenslauf · Aziz Feriani',
    cvDescription: 'Lebenslauf von Aziz Feriani, Software Engineer – KI & Daten.',
    notFoundTitle: 'Auf See verschollen · Aziz Feriani',
  },
  nav: {
    about: 'Über mich',
    journey: 'Werdegang',
    projects: 'Projekte',
    books: 'Bücher',
    contact: 'Kontakt',
    cv: 'Lebenslauf',
    menu: 'Menü',
    close: 'Schließen',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
    themeToNight: 'Zum Nacht-Design wechseln',
    themeToDawn: 'Zum Morgen-Design wechseln',
    backToTop: 'Nach oben',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    viewWork: 'Meine Projekte',
    readNovel: 'Mein Roman',
    scroll: 'Scrollen',
    focusLabel: 'Fokus',
  },
  about: {
    kicker: 'Über mich',
    title: 'Code, Daten und ein bisschen Meersalz',
    facts: { based: 'Wohnort', languages: 'Sprachen', studied: 'Studium', offClock: 'Freizeit' },
    stats: { years: 'Jahre in der Softwarebranche', repos: 'Öffentliche Repositories', certs: 'Zertifikate', novel: 'Geschriebener Roman' },
  },
  journey: { kicker: 'Werdegang', title: 'Erfahrung & Ausbildung', present: 'Heute', work: 'Beruf', education: 'Ausbildung' },
  projects: {
    kicker: 'Projekte',
    title: 'Was ich gebaut habe',
    intro: 'Eine Auswahl aus 28 öffentlichen Repositories, von Echtzeit-Datenpipelines über Testautomatisierung bis zu Spielen.',
    all: 'Alle',
    code: 'Code',
    noCode: 'Privater Code',
    seeAll: 'Alle Repositories auf GitHub',
  },
  skills: { kicker: 'Werkzeugkasten', title: 'Fähigkeiten & Technologien', spoken: 'Sprachen' },
  certs: { kicker: 'Zertifikate', title: 'Immer am Lernen' },
  book: {
    kicker: 'Auch Autor',
    discover: 'Zum Roman',
    download: 'Kostenloses PDF',
    downloadShort: 'Gratis-PDF',
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Lass uns gemeinsam etwas bauen',
    text: 'Ich freue mich über Gespräche zu KI-, Daten- und Softwareprojekten, oder über Bücher. Am schnellsten erreichst du mich per E-Mail.',
    copy: 'E-Mail kopieren',
    copied: 'Kopiert!',
    location: 'Dortmund, Deutschland',
  },
  books: {
    kicker: 'Bücher',
    title: 'Geschichten, die ich geschrieben habe',
    intro: 'Jedes Buch hier ist kostenlos. Lade es herunter, teile es und sag mir, wie es dir gefallen hat.',
    next: 'Die nächste Geschichte wird gerade geschrieben…',
    read: 'Mehr erfahren',
  },
  bookPage: {
    back: 'Alle Bücher',
    by: 'von',
    pages: 'Seiten',
    chapters: 'Kapitel',
    illustrations: 'Illustrationen',
    language: 'Sprache',
    arabic: 'Arabisch',
    free: 'Kostenloser Download · PDF',
    about: 'Über den Roman',
    opening: 'Leseprobe',
    gallery: 'Illustrationen',
    chapter: 'Kapitel',
    prev: 'Zurück',
    next: 'Weiter',
    close: 'Schließen',
    originalBlurb: 'Auf Arabisch',
    translationNote: 'Derzeit nur auf Arabisch erhältlich. Übersetzungen folgen in einem späteren Update.',
  },
  cv: {
    save: 'Als PDF speichern',
    back: 'Zurück zur Website',
    summary: 'Profil',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    skills: 'Kenntnisse',
    certifications: 'Zertifikate',
    projects: 'Ausgewählte Projekte',
    languages: 'Sprachen',
  },
  notFound: {
    title: 'Auf See verschollen',
    text: 'Diese Seite ist von der Karte getrieben. Ich bringe dich zurück in den Hafen.',
    home: 'Zurück in den Hafen',
  },
  footer: { made: 'Gebaut in Dortmund, unter dem Himmel von Karthago.' },
};

const ar: UI = {
  meta: {
    homeTitle: 'محمد عزيز الفرياني · مهندس برمجيات – الذكاء الاصطناعي والبيانات',
    homeDescription:
      'محمد عزيز الفرياني مهندس برمجيات في الذكاء الاصطناعي والبيانات في دورتموند، يطوّر حلول تعلّم الآلة والذكاء الاصطناعي وقواعد البيانات، وهو مؤلّف رواية «رسالة من بحر قرطاج».',
    booksTitle: 'الكتب · محمد عزيز الفرياني',
    booksDescription: 'روايات محمد عزيز الفرياني، مجانًا للقراءة والتحميل.',
    cvTitle: 'السيرة الذاتية · محمد عزيز الفرياني',
    cvDescription: 'السيرة الذاتية لمحمد عزيز الفرياني، مهندس برمجيات في الذكاء الاصطناعي والبيانات.',
    notFoundTitle: 'تائه في البحر · محمد عزيز الفرياني',
  },
  nav: {
    about: 'نبذة',
    journey: 'المسيرة',
    projects: 'المشاريع',
    books: 'الكتب',
    contact: 'تواصل',
    cv: 'السيرة الذاتية',
    menu: 'القائمة',
    close: 'إغلاق',
    language: 'اللغة',
    skip: 'انتقل إلى المحتوى',
    themeToNight: 'الوضع الليلي',
    themeToDawn: 'وضع الفجر',
    backToTop: 'إلى الأعلى',
  },
  hero: {
    greeting: 'مرحبًا، أنا',
    viewWork: 'شاهد أعمالي',
    readNovel: 'اقرأ روايتي',
    scroll: 'مرّر',
    focusLabel: 'مجالي',
  },
  about: {
    kicker: 'نبذة',
    title: 'برمجة، وبيانات، وقليلٌ من ملح البحر',
    facts: { based: 'أقيم في', languages: 'اللغات', studied: 'الدراسة', offClock: 'بعد العمل' },
    stats: { years: 'سنوات في البرمجيات', repos: 'مستودعًا مفتوحًا', certs: 'شهادات', novel: 'رواية مكتوبة' },
  },
  journey: { kicker: 'المسيرة', title: 'الخبرة والتعليم', present: 'حتى الآن', work: 'عمل', education: 'تعليم' },
  projects: {
    kicker: 'المشاريع',
    title: 'أشياء صنعتُها',
    intro: 'مختارات من 28 مستودعًا مفتوحًا: من خطوط البيانات الآنيّة إلى أتمتة الاختبارات والألعاب.',
    all: 'الكل',
    code: 'الشيفرة',
    noCode: 'شيفرة خاصّة',
    seeAll: 'كلّ المستودعات على GitHub',
  },
  skills: { kicker: 'الأدوات', title: 'المهارات والتقنيات', spoken: 'اللغات' },
  certs: { kicker: 'الشهادات', title: 'تعلّمٌ لا يتوقّف' },
  book: {
    kicker: 'وكاتبٌ أيضًا',
    discover: 'اكتشف الرواية',
    download: 'حمّل الرواية مجانًا',
    downloadShort: 'PDF مجاني',
  },
  contact: {
    kicker: 'تواصل',
    title: 'لنبنِ شيئًا معًا',
    text: 'يسعدني الحديث عن مشاريع الذكاء الاصطناعي والبيانات والبرمجيات، أو عن الكتب. أسرع طريقة للتواصل معي هي البريد الإلكتروني.',
    copy: 'انسخ البريد',
    copied: 'تمّ النسخ!',
    location: 'دورتموند، ألمانيا',
  },
  books: {
    kicker: 'الكتب',
    title: 'حكاياتٌ كتبتُها',
    intro: 'كلّ كتابٍ هنا مجانيّ. حمّله، وشاركه، وأخبرني برأيك.',
    next: 'الحكاية القادمة ما زالت تُكتب…',
    read: 'اقرأ المزيد',
  },
  bookPage: {
    back: 'كلّ الكتب',
    by: 'تأليف',
    pages: 'صفحة',
    chapters: 'فصلًا',
    illustrations: 'لوحة',
    language: 'اللغة',
    arabic: 'العربية',
    free: 'تحميل مجاني · PDF',
    about: 'عن الرواية',
    opening: 'اقرأ البداية',
    gallery: 'لوحات الرواية',
    chapter: 'الفصل',
    prev: 'السابق',
    next: 'التالي',
    close: 'إغلاق',
    originalBlurb: 'بالعربية',
    translationNote: 'متوفّرة حاليًا بالعربية فقط، والترجمات قادمة في تحديثٍ لاحق.',
  },
  cv: {
    save: 'احفظ بصيغة PDF',
    back: 'العودة إلى الموقع',
    summary: 'الملف الشخصي',
    experience: 'الخبرة المهنية',
    education: 'التعليم',
    skills: 'المهارات',
    certifications: 'الشهادات',
    projects: 'مشاريع مختارة',
    languages: 'اللغات',
  },
  notFound: {
    title: 'تائه في البحر',
    text: 'انجرفت هذه الصفحة خارج الخريطة. دعني أُعِدك إلى الميناء.',
    home: 'العودة إلى الميناء',
  },
  footer: { made: 'صُنع في دورتموند، تحت سماء قرطاج.' },
};

export const ui: Record<Locale, UI> = { en, de, ar };
export const t = (locale: Locale) => ui[locale];
