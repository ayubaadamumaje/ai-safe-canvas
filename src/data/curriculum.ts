export interface Subject {
  id: string;
  name: string;
  level: 'JSS' | 'SSS';
  category?: 'Core' | 'Science' | 'Commercial' | 'Arts' | 'Basic';
  description: string;
}

export const curriculum: Subject[] = [
  // JSS Subjects
  { id: 'jss-math', name: 'Mathematics', level: 'JSS', category: 'Basic', description: 'Fundamental mathematical concepts including Algebra, Geometry, and Statistics.' },
  { id: 'jss-eng', name: 'English Language', level: 'JSS', category: 'Basic', description: 'Developing core literacy, grammar, and communication skills.' },
  { id: 'jss-sci', name: 'Basic Science', level: 'JSS', category: 'Basic', description: 'Introduction to Biology, Chemistry, and Physics concepts.' },
  { id: 'jss-tech', name: 'Basic Technology', level: 'JSS', category: 'Basic', description: 'Practical skills in engineering, construction, and technology.' },
  { id: 'jss-soc', name: 'Social Studies', level: 'JSS', category: 'Basic', description: 'Understanding society, culture, and civic responsibilities.' },
  { id: 'jss-civic', name: 'Civic Education', level: 'JSS', category: 'Basic', description: 'Citizenship, governance, and national values.' },
  { id: 'jss-ict', name: 'Computer Studies / ICT', level: 'JSS', category: 'Basic', description: 'Digital literacy and computer applications.' },
  { id: 'jss-agric', name: 'Agricultural Science', level: 'JSS', category: 'Basic', description: 'Principles of farming and food production.' },
  { id: 'jss-biz', name: 'Business Studies', level: 'JSS', category: 'Basic', description: 'Introduction to accounting, commerce, and office practice.' },
  { id: 'jss-home', name: 'Home Economics', level: 'JSS', category: 'Basic', description: 'Food, nutrition, and household management.' },
  { id: 'jss-arts', name: 'Cultural and Creative Arts', level: 'JSS', category: 'Basic', description: 'Visual arts, music, and performing arts.' },
  { id: 'jss-phe', name: 'Physical and Health Education', level: 'JSS', category: 'Basic', description: 'Health, wellness, and sports.' },
  { id: 'jss-security', name: 'Security Education', level: 'JSS', category: 'Basic', description: 'Understanding personal and national security.' },
  { id: 'jss-hausa', name: 'Hausa Language', level: 'JSS', category: 'Basic', description: 'Native language studies for Northern Nigeria.' },
  { id: 'jss-igbo', name: 'Igbo Language', level: 'JSS', category: 'Basic', description: 'Native language studies.' },
  { id: 'jss-yoruba', name: 'Yoruba Language', level: 'JSS', category: 'Basic', description: 'Native language studies.' },
  { id: 'jss-crs', name: 'CRS / IRS', level: 'JSS', category: 'Basic', description: 'Christian or Islamic religious studies.' },
  { id: 'jss-french', name: 'French Language', level: 'JSS', category: 'Basic', description: 'Basic French communication.' },
  { id: 'jss-arabic', name: 'Arabic Language', level: 'JSS', category: 'Basic', description: 'Basic Arabic studies.' },

  // SSS Core
  { id: 'sss-math', name: 'Mathematics', level: 'SSS', category: 'Core', description: 'Advanced algebra, calculus, and trigonometry for WASSCE/NECO.' },
  { id: 'sss-eng', name: 'English Language', level: 'SSS', category: 'Core', description: 'Advanced literature, essay writing, and oral English.' },
  { id: 'sss-civic', name: 'Civic Education', level: 'SSS', category: 'Core', description: 'National values and constitutional rights.' },
  { id: 'sss-ict', name: 'Computer Studies', level: 'SSS', category: 'Core', description: 'Data processing, programming, and system analysis.' },

  // SSS Science
  { id: 'sss-phys', name: 'Physics', level: 'SSS', category: 'Science', description: 'Mechanics, heat, light, and electricity.' },
  { id: 'sss-chem', name: 'Chemistry', level: 'SSS', category: 'Science', description: 'Organic, inorganic, and physical chemistry.' },
  { id: 'sss-bio', name: 'Biology', level: 'SSS', category: 'Science', description: 'Study of living organisms and ecosystems.' },
  { id: 'sss-fur-math', name: 'Further Mathematics', level: 'SSS', category: 'Science', description: 'Advanced mathematical theories and applications.' },
  { id: 'sss-agric', name: 'Agricultural Science', level: 'SSS', category: 'Science', description: 'Advanced agronomy and animal husbandry.' },
  { id: 'sss-geog', name: 'Geography', level: 'SSS', category: 'Science', description: 'Physical and human geography.' },
  { id: 'sss-health', name: 'Health Education', level: 'SSS', category: 'Science', description: 'Human health and hygiene.' },

  // SSS Commercial
  { id: 'sss-econ', name: 'Economics', level: 'SSS', category: 'Commercial', description: 'Macro and microeconomics principles.' },
  { id: 'sss-acc', name: 'Financial Accounting', level: 'SSS', category: 'Commercial', description: 'Bookkeeping and financial statement analysis.' },
  { id: 'sss-comm', name: 'Commerce', level: 'SSS', category: 'Commercial', description: 'Trade, distribution, and commercial law.' },
  { id: 'sss-mark', name: 'Marketing', level: 'SSS', category: 'Commercial', description: 'Consumer behavior and advertising strategies.' },
  { id: 'sss-office', name: 'Office Practice', level: 'SSS', category: 'Commercial', description: 'Modern office management.' },
  { id: 'sss-insurance', name: 'Insurance', level: 'SSS', category: 'Commercial', description: 'Risk management and insurance principles.' },

  // SSS Arts
  { id: 'sss-lit', name: 'Literature in English', level: 'SSS', category: 'Arts', description: 'Prose, drama, and poetry analysis.' },
  { id: 'sss-govt', name: 'Government', level: 'SSS', category: 'Arts', description: 'Political systems and public administration.' },
  { id: 'sss-hist', name: 'History', level: 'SSS', category: 'Arts', description: 'Nigerian and World history.' },
  { id: 'sss-hausa-adv', name: 'Hausa Language', level: 'SSS', category: 'Arts', description: 'Advanced Hausa literature and linguistics.' },
  { id: 'sss-igbo-adv', name: 'Igbo Language', level: 'SSS', category: 'Arts', description: 'Advanced Igbo literature.' },
  { id: 'sss-yoruba-adv', name: 'Yoruba Language', level: 'SSS', category: 'Arts', description: 'Advanced Yoruba literature.' },
  { id: 'sss-crs-irs', name: 'CRS / IRS', level: 'SSS', category: 'Arts', description: 'Advanced religious studies.' },
  { id: 'sss-visual', name: 'Visual Arts', level: 'SSS', category: 'Arts', description: 'Fine arts and design.' },
  { id: 'sss-music', name: 'Music', level: 'SSS', category: 'Arts', description: 'Musical theory and practice.' }
];
