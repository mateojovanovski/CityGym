export const IMG = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
  dark: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80",
  weights: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  woman: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
  man: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
  womangym: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  kettle: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
  trainer: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
  yoga: "https://images.unsplash.com/photo-1599901860904-17e6ed708b0a?w=800&q=80",
  crossfit: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  barbell: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
  boxing: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
  muscle: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80",
  treadmill: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
  gym2: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80",
  spin: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80",
};

export const fallbackPrograms = [
  {
    id: 1, slug: "fitness", titleMk: "Фитнес и бодибилдинг", titleEn: "Fitness & Bodybuilding",
    descMk: "Модерна теретана со 80+ справи, слободни тегови до 60kg и зона за функционален тренинг.",
    descEn: "Modern gym with 80+ machines, free weights up to 60kg and a functional training zone.",
    longMk: "", longEn: "", imageUrl: IMG.weights, icon: "dumbbell",
    durationMin: 90, intensity: 4, priceMonthly: 1500, category: "fitness",
  },
  {
    id: 2, slug: "crossfit", titleMk: "CrossFit", titleEn: "CrossFit",
    descMk: "Високо-интензивни WOD тренинзи во група до 14 луѓе со сертифициран CrossFit тренер.",
    descEn: "High-intensity WOD workouts in groups up to 14 with a certified CrossFit coach.",
    longMk: "", longEn: "", imageUrl: IMG.crossfit, icon: "fire",
    durationMin: 60, intensity: 5, priceMonthly: 2200, category: "crossfit",
  },
  {
    id: 3, slug: "yoga", titleMk: "Јога и пилатес", titleEn: "Yoga & Pilates",
    descMk: "Хата, вињаса и јин јога + пилатес за флексибилност, баланс и ментален мир.",
    descEn: "Hatha, vinyasa and yin yoga + pilates for flexibility, balance and peace of mind.",
    longMk: "", longEn: "", imageUrl: IMG.yoga, icon: "lotus",
    durationMin: 60, intensity: 2, priceMonthly: 1600, category: "mind",
  },
  {
    id: 4, slug: "boxing", titleMk: "Бокс и кикбокс", titleEn: "Boxing & Kickbox",
    descMk: "Бокс сала со ринг, 10 вреќи и програма за почетници, рекреативци и натпреварувачи.",
    descEn: "Boxing hall with a ring, 10 bags and programs for beginners, amateurs and competitors.",
    longMk: "", longEn: "", imageUrl: IMG.boxing, icon: "glove",
    durationMin: 75, intensity: 5, priceMonthly: 2000, category: "combat",
  },
  {
    id: 5, slug: "personal", titleMk: "Персонален тренинг", titleEn: "Personal Training",
    descMk: "1-на-1 работа со тренер: план за тренинг, исхрана и мерење на прогрес секој месец.",
    descEn: "1-on-1 coaching: training plan, nutrition and progress tracking every month.",
    longMk: "", longEn: "", imageUrl: IMG.trainer, icon: "star",
    durationMin: 60, intensity: 3, priceMonthly: 6000, category: "personal",
  },
  {
    id: 6, slug: "nutrition", titleMk: "Нутриционизам", titleEn: "Nutrition",
    descMk: "Индивидуален план за исхрана, анализа на состав на тело и месечни консултации.",
    descEn: "Individual meal plans, body composition analysis and monthly consultations.",
    longMk: "", longEn: "", imageUrl: IMG.woman, icon: "salad",
    durationMin: 45, intensity: 1, priceMonthly: 2500, category: "nutrition",
  },
];

export const fallbackTrainers = [
  {
    id: 1, name: "Марко Јовановски", roleMk: "Head Coach / Фитнес", roleEn: "Head Coach / Fitness",
    bioMk: "10 години искуство, NASM сертифициран. Специјалист за мускулна маса и сила.",
    bioEn: "10 years of experience, NASM certified. Specialist in muscle mass and strength.",
    specialties: "Бодибилдинг, Powerlifting, Кондиција", imageUrl: IMG.muscle,
    instagram: "@marko.citygym", experienceYears: 10, rating: 4.9,
  },
  {
    id: 2, name: "Ана Петровска", roleMk: "Јога и пилатес", roleEn: "Yoga & Pilates",
    bioMk: "RYT-500 инструкторка. Води јога, пилатес и mobility часови за сите нивоа.",
    bioEn: "RYT-500 instructor. Leads yoga, pilates and mobility classes for all levels.",
    specialties: "Вињаса јога, Пилатес, Mobility", imageUrl: IMG.womangym,
    instagram: "@ana.citygym", experienceYears: 7, rating: 5.0,
  },
  {
    id: 3, name: "Стефан Димитров", roleMk: "CrossFit тренер", roleEn: "CrossFit Coach",
    bioMk: "CrossFit Level 2 тренер и поранешен репрезентативец во кревање тегови.",
    bioEn: "CrossFit Level 2 coach and former national weightlifting team member.",
    specialties: "CrossFit, Олимписко кревање, HIIT", imageUrl: IMG.man,
    instagram: "@stefan.citygym", experienceYears: 8, rating: 4.8,
  },
  {
    id: 4, name: "Елена Стојанова", roleMk: "Нутриционист", roleEn: "Nutritionist",
    bioMk: "Дипломиран нутриционист со фокус на спортска исхрана и слабеење.",
    bioEn: "Graduated nutritionist focused on sports nutrition and weight loss.",
    specialties: "Спортска исхрана, Слабеење, Суплементи", imageUrl: IMG.woman,
    instagram: "@elena.citygym", experienceYears: 6, rating: 4.9,
  },
];

export const fallbackPricing = [
  {
    id: 1, nameMk: "СТАРТ", nameEn: "START", priceMkd: 1200,
    periodMk: "/ месечно", periodEn: "/ monthly",
    featuresMk: "Теретана (06–23ч)|1 групен тренинг неделно|Соблекувална и сауна|Фитнес проценка",
    featuresEn: "Gym (06–23h)|1 group class weekly|Locker room & sauna|Fitness assessment",
    popular: false, color: "zinc",
  },
  {
    id: 2, nameMk: "ПРО", nameEn: "PRO", priceMkd: 1800,
    periodMk: "/ месечно", periodEn: "/ monthly",
    featuresMk: "Се од СТАРТ|Неограничени групни тренинзи|Сауна и масажа 1x месечно|План за исхрана|Мобилна апликација",
    featuresEn: "Everything in START|Unlimited group classes|Sauna & massage 1x monthly|Meal plan|Mobile app",
    popular: true, color: "orange",
  },
  {
    id: 3, nameMk: "ЕЛИТА", nameEn: "ELITE", priceMkd: 3500,
    periodMk: "/ месечно", periodEn: "/ monthly",
    featuresMk: "Се од ПРО|4 персонални тренинзи|Индивидуален нутриционист|Гостински влез 2x месечно|Приоритетни резервации",
    featuresEn: "Everything in PRO|4 personal trainings|Individual nutritionist|Guest pass 2x monthly|Priority bookings",
    popular: false, color: "amber",
  },
];

export const fallbackTestimonials = [
  {
    id: 1, name: "Никола Т.", textMk: "За 6 месеци изгубив 18kg со помош на тимот на City Gym. Најдобра одлука во мојот живот!",
    textEn: "In 6 months I lost 18kg with the help of the City Gym team. Best decision of my life!",
    rating: 5, program: "CrossFit", imageUrl: "",
  },
  {
    id: 2, name: "Марија К.", textMk: "Јога часовите кај Ана се нешто посебно. Атмосферата е одлична, а персоналот секогаш насмеан.",
    textEn: "Ana's yoga classes are something special. Great atmosphere and always smiling staff.",
    rating: 5, program: "Јога", imageUrl: "",
  },
  {
    id: 3, name: "Александар В.", textMk: "Опремата е врвна, никогаш нема гужва наутро. Персоналниот тренинг вреди секој денар.",
    textEn: "Top-notch equipment, never crowded in the morning. Personal training is worth every denar.",
    rating: 5, program: "Персонален", imageUrl: "",
  },
];
