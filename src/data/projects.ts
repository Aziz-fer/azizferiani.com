import type { L10n } from '../i18n/ui';

export const categories = {
  ai: { en: 'AI & Data Science', de: 'KI & Data Science', ar: 'الذكاء الاصطناعي وعلم البيانات' },
  data: { en: 'Data Engineering & BI', de: 'Data Engineering & BI', ar: 'هندسة البيانات وذكاء الأعمال' },
  qa: { en: 'Testing & DevOps', de: 'Testing & DevOps', ar: 'الاختبار وDevOps' },
  fun: { en: 'Research & Games', de: 'Forschung & Spiele', ar: 'أبحاث وألعاب' },
} satisfies Record<string, L10n>;

export type Category = keyof typeof categories;

export type Project = {
  id: string;
  category: Category;
  title: L10n;
  description: L10n;
  tags: string[];
  repo?: string;
  /** Shown on the CV. */
  cv?: boolean;
};

const gh = (name: string) => `https://github.com/Aziz-fer/${name}`;

export const projects: Project[] = [
  {
    id: 'smart-city',
    category: 'data',
    title: { en: 'Smart City Data Engineering', de: 'Smart City Data Engineering', ar: 'هندسة بيانات المدينة الذكية' },
    description: {
      en: 'An end-to-end, real-time streaming pipeline for smart-city IoT data: ingested with Kafka and Zookeeper, processed with Spark, stored and queried on AWS (Glue, Athena, Redshift) and visualised in Power BI, all containerised with Docker.',
      de: 'Eine durchgängige Echtzeit-Streaming-Pipeline für IoT-Daten einer Smart City: Aufnahme mit Kafka und Zookeeper, Verarbeitung mit Spark, Speicherung und Abfrage in AWS (Glue, Athena, Redshift) und Visualisierung in Power BI, komplett in Docker.',
      ar: 'خطّ بثٍّ آنيّ متكامل لبيانات إنترنت الأشياء في مدينةٍ ذكية: استقبالٌ عبر Kafka وZookeeper، ومعالجةٌ بـSpark، وتخزينٌ واستعلام على AWS (Glue وAthena وRedshift)، وعرضٌ في Power BI، وكلّ ذلك داخل حاويات Docker.',
    },
    tags: ['Kafka', 'Spark', 'AWS', 'Docker', 'Power BI', 'Python'],
    repo: gh('Data-engineering---Smart-City-Project'),
    cv: true,
  },
  {
    id: 'spacex',
    category: 'ai',
    title: { en: 'SpaceX Falcon 9 Landing Prediction', de: 'SpaceX Falcon 9: Landevorhersage', ar: 'التنبّؤ بهبوط صاروخ SpaceX Falcon 9' },
    description: {
      en: 'Predicts whether a Falcon 9 first stage will land, and with it the cost of a launch, using scraped launch data, exploratory analysis and machine-learning classifiers. Capstone of the IBM Data Science Professional Certificate.',
      de: 'Sagt voraus, ob die erste Stufe einer Falcon 9 landet, und damit die Kosten eines Starts: mit gescrapten Startdaten, explorativer Analyse und Machine-Learning-Klassifikatoren. Abschlussprojekt des IBM Data Science Professional Certificate.',
      ar: 'يتنبّأ بنجاح هبوط المرحلة الأولى من صاروخ Falcon 9، ومن ثَمّ بكلفة الإطلاق، اعتمادًا على بيانات إطلاقٍ مجمّعة من الويب وتحليلٍ استكشافيّ ونماذج تصنيفٍ بتعلّم الآلة. المشروع الختامي لشهادة IBM في علم البيانات.',
    },
    tags: ['Python', 'Pandas', 'Machine Learning', 'Jupyter'],
    repo: gh('IBM-DataScience-SpaceX-Aziz-Project'),
    cv: true,
  },
  {
    id: 'tunisair',
    category: 'data',
    title: { en: 'Tunisair Flight Performance', de: 'Tunisair: Flugpünktlichkeit', ar: 'أداء رحلات الخطوط التونسية' },
    description: {
      en: 'A daily pipeline that pulls flight data from APIs, stores it in SQLite and computes delay KPIs for Tunisair, then publishes the daily report automatically to a Twitter account.',
      de: 'Eine tägliche Pipeline, die Flugdaten über APIs abruft, in SQLite speichert, Verspätungs-KPIs für Tunisair berechnet und den Tagesbericht automatisch auf einem Twitter-Konto veröffentlicht.',
      ar: 'خطّ بياناتٍ يوميّ يجلب معلومات الرحلات عبر واجهات API، ويخزّنها في SQLite، ويحسب مؤشّرات التأخير للخطوط التونسية، ثم ينشر التقرير اليوميّ آليًا على حسابٍ في تويتر.',
    },
    tags: ['Python', 'Pandas', 'SQLite', 'APIs'],
    repo: gh('Tunisair-airlines-flight-performance'),
    cv: true,
  },
  {
    id: 'skills-trends',
    category: 'ai',
    title: { en: 'Emerging Tech Skills & Trends', de: 'Trends bei Tech-Skills', ar: 'اتجاهات المهارات التقنية الصاعدة' },
    description: {
      en: 'A data-analysis study of emerging technology skills: collecting, cleaning and visualising data to show which languages, databases and tools are on the rise.',
      de: 'Eine Datenanalyse zu aufstrebenden Tech-Skills: Daten sammeln, bereinigen und visualisieren, um zu zeigen, welche Sprachen, Datenbanken und Tools im Kommen sind.',
      ar: 'دراسة تحليلية للمهارات التقنية الصاعدة: جمع البيانات وتنظيفها وتصويرها لإظهار اللغات وقواعد البيانات والأدوات الآخذة في الانتشار.',
    },
    tags: ['Python', 'Pandas', 'Data Visualisation', 'Jupyter'],
    repo: gh('Analysis-on-Emerging-Technology-Skills-and-Trends'),
  },
  {
    id: 'hr-dashboard',
    category: 'data',
    title: { en: 'HR Dashboard · MySQL & Power BI', de: 'HR-Dashboard · MySQL & Power BI', ar: 'لوحة بيانات الموارد البشرية' },
    description: {
      en: 'A KPI dashboard that gives HR a real-time overview of its key metrics for data-driven decisions, with the data modelled in MySQL and the report built in Power BI.',
      de: 'Ein KPI-Dashboard, das der Personalabteilung einen Echtzeit-Überblick über ihre wichtigsten Kennzahlen gibt, mit Datenmodell in MySQL und Bericht in Power BI.',
      ar: 'لوحة مؤشّرات تمنح قسم الموارد البشرية نظرةً آنيّة على أهمّ مقاييسه لاتخاذ قراراتٍ مبنيّة على البيانات، بنموذج بياناتٍ في MySQL وتقريرٍ في Power BI.',
    },
    tags: ['MySQL', 'Power BI', 'SQL'],
    repo: gh('An-HR-Dashboard-using-MySQL-and-PowerBI'),
  },
  {
    id: 'sales-kpi',
    category: 'data',
    title: { en: 'Sales KPI Analysis · SQL & Power BI', de: 'Vertriebs-KPIs · SQL & Power BI', ar: 'تحليل مؤشّرات المبيعات' },
    description: {
      en: 'Sales performance analysis with T-SQL queries and an interactive Power BI report of the key sales KPIs.',
      de: 'Analyse der Vertriebsleistung mit T-SQL-Abfragen und einem interaktiven Power-BI-Bericht der wichtigsten Kennzahlen.',
      ar: 'تحليل أداء المبيعات باستعلامات T-SQL وتقريرٍ تفاعليّ في Power BI لأهمّ مؤشّراتها.',
    },
    tags: ['T-SQL', 'Power BI'],
    repo: gh('Sales-Analysis-KPI-with-SQL-and-PowerBI-main'),
  },
  {
    id: 'java-ui',
    category: 'qa',
    title: { en: 'Java UI Automation Framework', de: 'Java-UI-Testautomatisierung', ar: 'إطار أتمتة اختبار الواجهات بـJava' },
    description: {
      en: 'A Selenium WebDriver test-automation framework in Java for reliable, maintainable UI tests.',
      de: 'Ein Testautomatisierungs-Framework mit Selenium WebDriver in Java für zuverlässige, wartbare UI-Tests.',
      ar: 'إطار لأتمتة الاختبارات بـSelenium WebDriver ولغة Java، لاختبارات واجهاتٍ موثوقة وسهلة الصيانة.',
    },
    tags: ['Java', 'Selenium', 'Test Automation'],
    repo: gh('Java_UI-Automation-Framework'),
    cv: true,
  },
  {
    id: 'ansible-docker',
    category: 'qa',
    title: { en: 'Ansible Web Service Automation', de: 'Ansible-Webservice-Automatisierung', ar: 'أتمتة خدمات الويب بـAnsible' },
    description: {
      en: 'Automates a Docker-based development environment for testing Ansible playbooks, so infrastructure changes can be tried safely before they reach real servers.',
      de: 'Automatisiert eine Docker-basierte Entwicklungsumgebung zum Testen von Ansible-Playbooks, damit Infrastrukturänderungen gefahrlos ausprobiert werden können, bevor sie echte Server erreichen.',
      ar: 'يؤتمت بيئة تطويرٍ مبنيّة على Docker لاختبار سيناريوهات Ansible، فتُجرَّب تغييرات البنية التحتية بأمان قبل أن تصل إلى الخوادم الحقيقية.',
    },
    tags: ['Ansible', 'Docker', 'Shell'],
    repo: gh('Ansible-Web-Service-Automation-with-Docker'),
    cv: true,
  },
  {
    id: 'eth-pos',
    category: 'fun',
    title: { en: 'Pivoting Attack on Ethereum 2.0 PoS', de: 'Pivoting-Angriff auf Ethereum 2.0 PoS', ar: 'هجوم المحور على إجماع Ethereum 2.0' },
    description: {
      en: 'A Python simulation of a pivoting fork-choice attack on Ethereum 2.0’s proof-of-stake consensus, with a Tkinter GUI to watch the attack unfold.',
      de: 'Eine Python-Simulation eines Pivoting-Angriffs auf die Fork-Choice-Regel des Proof-of-Stake-Konsenses von Ethereum 2.0, mit Tkinter-Oberfläche zum Mitverfolgen.',
      ar: 'محاكاة بلغة Python لهجومٍ على قاعدة اختيار السلسلة في إجماع إثبات الحصّة لـEthereum 2.0، مع واجهة Tkinter لمتابعة الهجوم خطوةً بخطوة.',
    },
    tags: ['Python', 'Blockchain', 'Tkinter', 'Simulation'],
  },
  {
    id: 'crimes',
    category: 'data',
    title: { en: 'Crimes Dashboard · Power BI & Excel', de: 'Kriminalitäts-Dashboard · Power BI & Excel', ar: 'لوحة بيانات الجرائم' },
    description: {
      en: 'An interactive dashboard exploring crime data, built with Power BI and Excel.',
      de: 'Ein interaktives Dashboard zur Analyse von Kriminalitätsdaten, gebaut mit Power BI und Excel.',
      ar: 'لوحة بياناتٍ تفاعلية لاستكشاف بيانات الجرائم، مبنيّة بـPower BI وExcel.',
    },
    tags: ['Power BI', 'Excel'],
    repo: gh('Crimes-Data-analysis'),
  },
  {
    id: 'cable-car',
    category: 'fun',
    title: { en: 'Cable Car Board Game', de: 'Brettspiel „Cable Car“', ar: 'لعبة «Cable Car» اللوحية' },
    description: {
      en: 'A digital board game for 2–6 players in Kotlin, with computer opponents powered by a Monte Carlo search algorithm.',
      de: 'Ein digitales Brettspiel für 2–6 Personen in Kotlin, mit Computergegnern auf Basis eines Monte-Carlo-Suchverfahrens.',
      ar: 'لعبة لوحية رقمية بلغة Kotlin لـ2 إلى 6 لاعبين، بخصومٍ آليّين يعتمدون خوارزمية بحث مونت كارلو.',
    },
    tags: ['Kotlin', 'AI', 'Monte Carlo'],
    repo: gh('Cable_Car_Game'),
  },
  {
    id: 'flying-batman',
    category: 'fun',
    title: { en: 'Flying Batman', de: 'Flying Batman', ar: 'Flying Batman' },
    description: {
      en: 'A small arcade game built with the Godot engine and GDScript.',
      de: 'Ein kleines Arcade-Spiel mit der Godot-Engine und GDScript.',
      ar: 'لعبة أركيد صغيرة مبنيّة بمحرّك Godot ولغة GDScript.',
    },
    tags: ['Godot', 'GDScript'],
    repo: gh('Godot-Flying-Batman'),
  },
];
