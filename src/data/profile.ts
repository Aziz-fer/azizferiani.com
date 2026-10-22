import type { L10n } from '../i18n/ui';

export const profile = {
  name: { en: 'Aziz Feriani', de: 'Aziz Feriani', ar: 'محمد عزيز الفرياني' } satisfies L10n,
  fullNameLatin: 'Mohamed Aziz Feriani',
  role: {
    en: 'Software Engineer – AI & Data',
    de: 'Software Engineer – KI & Daten',
    ar: 'مهندس برمجيات – الذكاء الاصطناعي والبيانات',
  } satisfies L10n,
  focus: {
    en: ['Machine Learning', 'Artificial Intelligence', 'Databases', 'Data Engineering'],
    de: ['Machine Learning', 'Künstliche Intelligenz', 'Datenbanken', 'Data Engineering'],
    ar: ['تعلّم الآلة', 'الذكاء الاصطناعي', 'قواعد البيانات', 'هندسة البيانات'],
  },
  intro: {
    en: 'I build machine-learning, AI and database solutions at RGU GmbH in Dortmund. Before that, I spent almost three years making software more reliable as a tester at WILO. And when the laptop closes, I write: my first novel is set in ancient Carthage.',
    de: 'Bei der RGU GmbH in Dortmund entwickle ich Lösungen rund um Machine Learning, KI und Datenbanken. Davor habe ich fast drei Jahre lang als Software-Tester bei WILO Software zuverlässiger gemacht. Und wenn der Laptop zugeklappt ist, schreibe ich: Mein erster Roman spielt im antiken Karthago.',
    ar: 'أطوّر حلولًا في تعلّم الآلة والذكاء الاصطناعي وقواعد البيانات لدى شركة RGU في دورتموند. وقبل ذلك قضيتُ قرابة ثلاث سنوات أختبر البرمجيات في شركة WILO لأجعلها أكثر موثوقية. وحين أُغلق الحاسوب، أكتب: روايتي الأولى تدور أحداثها في قرطاج القديمة.',
  } satisfies L10n,
  about: {
    en: [
      'I grew up in Tunisia and came to Dortmund to study Computer Science at TU Dortmund University, where I graduated with honors and a minor in Data Science & Economics. Along the way I tutored 25–30 students in Probability and Statistics, which taught me that explaining a model is half of building it.',
      'Today I work as a Software Engineer for AI & Data at RGU GmbH, developing machine-learning and AI solutions and the databases behind them. My path into engineering went through quality: as a working student at WILO I built Python test tools, Jenkins CI/CD pipelines and dashboards that turned test data into decisions.',
      'I like problems where data, code and people meet, and I like stories. My first novel, “A Letter from the Sea of Carthage”, is a historical novel in Arabic set in Carthage in the 4th century BC.',
    ],
    de: [
      'Aufgewachsen bin ich in Tunesien. Nach Dortmund kam ich für das Informatikstudium an der TU Dortmund, das ich mit Auszeichnung und dem Nebenfach Data Science & Wirtschaftswissenschaften abgeschlossen habe. Nebenbei habe ich als Tutor 25–30 Studierende in Wahrscheinlichkeitsrechnung und Statistik betreut und dabei gelernt: Ein Modell zu erklären ist die halbe Arbeit, es zu bauen.',
      'Heute arbeite ich als Software Engineer für KI & Daten bei der RGU GmbH und entwickle Machine-Learning- und KI-Lösungen sowie die Datenbanken dahinter. Mein Weg in die Entwicklung führte über die Qualität: Als Werkstudent bei WILO habe ich Python-Testwerkzeuge, Jenkins-CI/CD-Pipelines und Dashboards gebaut, die aus Testdaten Entscheidungen gemacht haben.',
      'Ich mag Probleme, bei denen Daten, Code und Menschen zusammenkommen, und ich mag Geschichten. Mein erster Roman, „Ein Brief aus dem Meer von Karthago“, ist ein historischer Roman auf Arabisch, der im Karthago des 4. Jahrhunderts v. Chr. spielt.',
    ],
    ar: [
      'نشأتُ في تونس، ثم جئتُ إلى دورتموند لدراسة علوم الحاسوب في جامعة دورتموند التقنية، وتخرّجتُ بامتياز مع تخصّصٍ فرعيّ في علم البيانات والاقتصاد. وخلال دراستي درّستُ ما بين 25 و30 طالبًا في الاحتمالات والإحصاء، فتعلّمتُ أنّ شرح النموذج نصفُ بنائه.',
      'أعمل اليوم مهندسَ برمجيات في الذكاء الاصطناعي والبيانات لدى شركة RGU، أطوّر حلول تعلّم الآلة والذكاء الاصطناعي وقواعد البيانات التي تقوم عليها. وقد مرّ طريقي إلى الهندسة عبر الجودة: فحين كنتُ طالبًا عاملًا في WILO بنيتُ أدوات اختبارٍ بلغة Python، وخطوط CI/CD على Jenkins، ولوحات بياناتٍ تحوّل نتائج الاختبار إلى قرارات.',
      'أحبّ المسائل التي تلتقي فيها البيانات والشيفرة والناس، وأحبّ الحكايات. روايتي الأولى «رسالة من بحر قرطاج» روايةٌ تاريخية بالعربية تجري أحداثها في قرطاج في القرن الرابع قبل الميلاد.',
    ],
  },
  facts: {
    based: { en: 'Dortmund, Germany', de: 'Dortmund, Deutschland', ar: 'دورتموند، ألمانيا' } satisfies L10n,
    languages: {
      en: 'Arabic · German · English · French',
      de: 'Arabisch · Deutsch · Englisch · Französisch',
      ar: 'العربية · الألمانية · الإنجليزية · الفرنسية',
    } satisfies L10n,
    studied: {
      en: 'BSc Computer Science, TU Dortmund',
      de: 'B.Sc. Informatik, TU Dortmund',
      ar: 'بكالوريوس علوم الحاسوب، جامعة دورتموند التقنية',
    } satisfies L10n,
    offClock: {
      en: 'Training · Travel · Writing · Gaming',
      de: 'Training · Reisen · Schreiben · Gaming',
      ar: 'الرياضة · السفر · الكتابة · الألعاب',
    } satisfies L10n,
  },
  /** First day in the software industry (WILO), used for the "years" counter. */
  careerStart: '2022-06',
  repoCount: 28,
  email: 'ferianiaziz@gmail.com',
  links: {
    github: 'https://github.com/Aziz-fer',
    linkedin: 'https://www.linkedin.com/in/aziz-feriani-761812226/',
    instagram: 'https://www.instagram.com/aziz.feriani/',
  },
};

export type JourneyItem = {
  type: 'work' | 'education';
  org: string;
  orgUrl?: string;
  role: L10n;
  /** "YYYY-MM"; `end` missing means ongoing. */
  start: string;
  end?: string;
  /** Show years only (used for school and university). */
  yearsOnly?: boolean;
  location: L10n;
  points: Record<keyof L10n, string[]>;
  tags?: string[];
};

export const journey: JourneyItem[] = [
  {
    type: 'work',
    org: 'RGU GmbH',
    role: {
      en: 'Software Engineer – AI & Data',
      de: 'Software Engineer – KI & Daten',
      ar: 'مهندس برمجيات – الذكاء الاصطناعي والبيانات',
    },
    start: '2025-05',
    location: { en: 'Dortmund, Germany', de: 'Dortmund', ar: 'دورتموند، ألمانيا' },
    points: {
      en: [
        'Develop machine-learning and AI solutions, from data preparation to integration into production software.',
        'Design, build and optimise databases and the data flows that feed them.',
        'Bring a tester’s mindset to engineering: automated checks, clean data and reproducible results.',
      ],
      de: [
        'Entwicklung von Machine-Learning- und KI-Lösungen, von der Datenaufbereitung bis zur Integration in produktive Software.',
        'Konzeption, Aufbau und Optimierung von Datenbanken und den Datenflüssen dahinter.',
        'Tester-Denkweise in der Entwicklung: automatisierte Prüfungen, saubere Daten, reproduzierbare Ergebnisse.',
      ],
      ar: [
        'تطوير حلول تعلّم الآلة والذكاء الاصطناعي، من تجهيز البيانات حتى دمجها في البرمجيات المستخدمة فعليًا.',
        'تصميم قواعد البيانات وبناؤها وتحسينها، مع مسارات البيانات التي تغذّيها.',
        'حمل عقلية المختبِر إلى الهندسة: فحوصٌ آلية، وبياناتٌ نظيفة، ونتائج قابلة للتكرار.',
      ],
    },
    tags: ['Python', 'Machine Learning', 'AI', 'SQL', 'Databases'],
  },
  {
    type: 'work',
    org: 'WILO SE',
    orgUrl: 'https://wilo.com',
    role: {
      en: 'Working Student · Software Tester',
      de: 'Werkstudent · Software-Tester',
      ar: 'طالب عامل · مختبِر برمجيات',
    },
    start: '2022-06',
    end: '2025-03',
    location: { en: 'Dortmund, Germany', de: 'Dortmund', ar: 'دورتموند، ألمانيا' },
    points: {
      en: [
        'Co-developed Witest-App, a Python testing tool for pump software, in a five-person team with partners in Turkey.',
        'Collected test data through the Polarion REST API, structured it in SQL and designed a DSL for test cases, with a Tkinter GUI.',
        'Set up Jenkins CI/CD jobs for automated test runs with generated HTML reports, and presented results in Tableau.',
        'Built a MATLAB dashboard analysing pump-motor performance from Polarion and Excel data.',
      ],
      de: [
        'Mitentwicklung der Witest-App, eines Python-Testwerkzeugs für Pumpensoftware, in einem fünfköpfigen Team mit Partnern in der Türkei.',
        'Erfassung von Testdaten über die Polarion-REST-API, Strukturierung in SQL und Entwurf einer DSL für Testfälle mit Tkinter-Oberfläche.',
        'Aufbau von Jenkins-CI/CD-Jobs für automatisierte Testläufe mit generierten HTML-Reports; Präsentation der Ergebnisse in Tableau.',
        'Entwicklung eines MATLAB-Dashboards zur Analyse der Leistung von Pumpenmotoren aus Polarion- und Excel-Daten.',
      ],
      ar: [
        'شاركتُ في تطوير Witest-App، أداة اختبارٍ بلغة Python لبرمجيات المضخّات، ضمن فريقٍ من خمسة أشخاص مع شركاء في تركيا.',
        'جمعتُ بيانات الاختبار عبر واجهة Polarion REST API، ونظّمتُها في SQL، وصمّمتُ لغةً خاصّة (DSL) لكتابة حالات الاختبار مع واجهة Tkinter.',
        'أعددتُ مهامّ CI/CD على Jenkins لتشغيل الاختبارات آليًا مع تقارير HTML، وعرضتُ النتائج في Tableau.',
        'بنيتُ لوحة بيانات في MATLAB لتحليل أداء محرّكات المضخّات من بيانات Polarion وExcel.',
      ],
    },
    tags: ['Python', 'Jenkins', 'SQL', 'Polarion', 'Tkinter', 'MATLAB', 'Tableau'],
  },
  {
    type: 'education',
    org: 'TU Dortmund University',
    orgUrl: 'https://www.tu-dortmund.de',
    role: {
      en: 'BSc Computer Science · with honors',
      de: 'B.Sc. Informatik · mit Auszeichnung',
      ar: 'بكالوريوس علوم الحاسوب · بامتياز',
    },
    start: '2020-10',
    end: '2024-06',
    yearsOnly: true,
    location: { en: 'Dortmund, Germany', de: 'Dortmund', ar: 'دورتموند، ألمانيا' },
    points: {
      en: [
        'Minor in Data Science & Economics.',
        'Tutor for Probability & Statistics: taught and mentored 25–30 students, organised the class independently and helped correct final exams.',
        'Coursework: Statistics, Databases, Big Data, Data Analysis, Software Engineering, Operating Systems, Algorithms.',
      ],
      de: [
        'Nebenfach Data Science & Wirtschaftswissenschaften.',
        'Tutor für Wahrscheinlichkeitsrechnung & Statistik: 25–30 Studierende betreut, die Übung selbstständig organisiert und bei der Korrektur von Klausuren geholfen.',
        'Schwerpunkte: Statistik, Datenbanken, Big Data, Datenanalyse, Softwaretechnik, Betriebssysteme, Algorithmen.',
      ],
      ar: [
        'تخصّص فرعيّ في علم البيانات والاقتصاد.',
        'مدرّس مساعد في الاحتمالات والإحصاء: درّستُ ما بين 25 و30 طالبًا ورافقتُهم، ونظّمتُ الحصص باستقلالية، وساعدتُ في تصحيح الامتحانات النهائية.',
        'من المقرّرات: الإحصاء، قواعد البيانات، البيانات الضخمة، تحليل البيانات، هندسة البرمجيات، أنظمة التشغيل، الخوارزميات.',
      ],
    },
  },
  {
    type: 'education',
    org: 'Elite High School of Sousse',
    role: {
      en: 'Scientific Baccalaureate',
      de: 'Abitur (naturwissenschaftlich)',
      ar: 'باكالوريا علوم',
    },
    start: '2015-09',
    end: '2018-06',
    yearsOnly: true,
    location: { en: 'Sousse, Tunisia', de: 'Sousse, Tunesien', ar: 'سوسة، تونس' },
    points: {
      en: ['Graduated with 17.01/20 (German grade 1.3), focusing on Computer Science, Mathematics and Engineering.'],
      de: ['Abschluss mit 17,01/20 (Note 1,3), Schwerpunkte Informatik, Mathematik sowie Elektro- und Maschinenbau.'],
      ar: ['تخرّجتُ بمعدّل 17.01 من 20، مع تركيزٍ على الإعلامية والرياضيات والهندسة.'],
    },
  },
];

export type SkillGroup = { title: L10n; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'AI & Data Science', de: 'KI & Data Science', ar: 'الذكاء الاصطناعي وعلم البيانات' },
    items: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Jupyter', 'R', 'MATLAB'],
  },
  {
    title: { en: 'Data & Databases', de: 'Daten & Datenbanken', ar: 'البيانات وقواعد البيانات' },
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite', 'NoSQL', 'ETL', 'Apache Kafka', 'Apache Spark', 'Power BI', 'Tableau'],
  },
  {
    title: { en: 'Cloud & DevOps', de: 'Cloud & DevOps', ar: 'السحابة وDevOps' },
    items: ['AWS (Glue, Athena, Redshift)', 'Docker', 'Ansible', 'Jenkins', 'CI/CD', 'Git', 'Bash'],
  },
  {
    title: { en: 'Testing & Engineering', de: 'Testing & Entwicklung', ar: 'الاختبار والهندسة' },
    items: ['Test Automation', 'Selenium WebDriver', 'Polarion', 'Java', 'Kotlin', 'TypeScript', 'Tkinter', 'Agile / Scrum'],
  },
];

/** Shown in the scrolling ribbon. */
export const marquee = [
  'Python', 'Machine Learning', 'SQL', 'PostgreSQL', 'Apache Kafka', 'Apache Spark', 'AWS', 'Docker', 'Ansible',
  'Jenkins', 'Power BI', 'Pandas', 'NumPy', 'Selenium', 'Java', 'Kotlin', 'Git', 'MySQL', 'Tableau', 'MATLAB',
];

export const spokenLanguages: { name: L10n; level: L10n }[] = [
  { name: { en: 'Arabic', de: 'Arabisch', ar: 'العربية' }, level: { en: 'Native', de: 'Muttersprache', ar: 'اللغة الأم' } },
  {
    name: { en: 'German', de: 'Deutsch', ar: 'الألمانية' },
    level: { en: 'Business fluent', de: 'Verhandlungssicher', ar: 'إتقان مهني' },
  },
  {
    name: { en: 'English', de: 'Englisch', ar: 'الإنجليزية' },
    level: { en: 'Business fluent', de: 'Verhandlungssicher', ar: 'إتقان مهني' },
  },
  { name: { en: 'French', de: 'Französisch', ar: 'الفرنسية' }, level: { en: 'Very good', de: 'Sehr gut', ar: 'جيد جدًا' } },
];

export type Cert = { name: string; issuer: string; date: string; honors?: boolean };

export const certifications: Cert[] = [
  { name: 'AWS Cloud Solutions Architect', issuer: 'Amazon Web Services', date: '2024-04' },
  { name: 'AWS Fundamentals Specialization', issuer: 'Amazon Web Services', date: '2024-04' },
  { name: 'IBM Data Science Professional Certificate', issuer: 'IBM', date: '2024-04' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: '2024-04' },
  { name: 'Docker', issuer: 'TestDome', date: '2024-04' },
  { name: 'Databases and SQL for Data Science with Python', issuer: 'IBM', date: '2024-02', honors: true },
  { name: 'Agile Development and Scrum', issuer: 'IBM', date: '2024-01' },
  { name: 'SAP Professional Fundamentals', issuer: 'SAP', date: '2023-05' },
  { name: 'Data Visualization and Dashboards with Excel and Cognos', issuer: 'IBM', date: '2022-09' },
  { name: 'Git', issuer: 'TestDome', date: '2021-03' },
];
