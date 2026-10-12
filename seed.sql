-- City Gym seed data
DELETE FROM testimonials;
DELETE FROM blog_posts;
DELETE FROM bookings;
DELETE FROM classes;
DELETE FROM pricing_plans;
DELETE FROM programs;
DELETE FROM trainers;

INSERT INTO trainers (name, role_mk, role_en, bio_mk, bio_en, specialties, image_url, instagram, experience_years, rating) VALUES
('Марко Јовановски', 'Head Coach / Фитнес', 'Head Coach / Fitness',
 'Шампион на Македонија во бодибилдинг 2019. NASM сертифициран тренер со 10 години искуство. Специјалист за мускулна маса, сила и трансформација на тело.',
 'Macedonian bodybuilding champion 2019. NASM certified coach with 10 years of experience. Specialist in muscle mass, strength and body transformation.',
 'Бодибилдинг, Powerlifting, Кондиција',
 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&q=80', '@marko.citygym', 10, 4.9),
('Ана Петровска', 'Јога и пилатес', 'Yoga & Pilates',
 'RYT-500 сертифицирана инструкторка со 7 години искуство. Води вињаса, хата и јин јога, пилатес и mobility часови за сите нивоа.',
 'RYT-500 certified instructor with 7 years of experience. Leads vinyasa, hatha and yin yoga, pilates and mobility classes for all levels.',
 'Вињаса јога, Пилатес, Mobility',
 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', '@ana.citygym', 7, 5.0),
('Стефан Димитров', 'CrossFit тренер', 'CrossFit Coach',
 'CrossFit Level 2 тренер и поранешен репрезентативец во олимписко кревање тегови. Води WOD тренинзи, HIIT и програми за кондиција.',
 'CrossFit Level 2 coach and former national Olympic weightlifting team member. Leads WOD workouts, HIIT and conditioning programs.',
 'CrossFit, Олимписко кревање, HIIT',
 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80', '@stefan.citygym', 8, 4.8),
('Елена Стојанова', 'Нутриционист', 'Nutritionist',
 'Дипломиран нутриционист со фокус на спортска исхрана, слабеење и компетициски подготовки. Автор на 200+ индивидуални планови за исхрана.',
 'Graduated nutritionist focused on sports nutrition, weight loss and competition prep. Author of 200+ individual meal plans.',
 'Спортска исхрана, Слабеење, Суплементи',
 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', '@elena.citygym', 6, 4.9),
('Бојан Крстевски', 'Бокс тренер', 'Boxing Coach',
 'Поранешен професионален боксер со скор 18-2. Тренира почетници, рекреативци и натпреварувачи. Главен тренер на бокс клубот City Gym.',
 'Former professional boxer with an 18-2 record. Trains beginners, amateurs and competitors. Head coach of the City Gym boxing club.',
 'Бокс, Кикбокс, Самоодбрана',
 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80', '@bojan.citygym', 12, 4.9),
('Сара Милевска', 'Персонален тренер', 'Personal Trainer',
 'ACE сертифициран персонален тренер специјализиран за женски фитнес, постнатален тренинг и функционални тренинзи.',
 'ACE certified personal trainer specialized in women fitness, postnatal training and functional workouts.',
 'Женски фитнес, Функционален тренинг, TRX',
 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80', '@sara.citygym', 5, 4.8);

INSERT INTO programs (slug, title_mk, title_en, desc_mk, desc_en, long_mk, long_en, image_url, icon, duration_min, intensity, price_monthly, category) VALUES
('fitness', 'Фитнес и бодибилдинг', 'Fitness & Bodybuilding',
 'Модерна теретана со 80+ справи, слободни тегови до 60kg и зона за функционален тренинг.',
 'Modern gym with 80+ machines, free weights up to 60kg and a functional training zone.',
 'Нашата фитнес зона од 600м² е опремена со Technogym и Hammer Strength справи (реновирани 2024). Вклучува: зона за слободни тегови, 12 бенч станици, кабелски машини, Смит машини и посебен простор за жени. Секој член добива воведен план и проценка на состав на тело. Тренери на сала се достапни секој ден 08-22ч.',
 'Our 600m² fitness zone features Technogym and Hammer Strength machines (renovated 2024). Includes: free weights area, 12 bench stations, cable machines, Smith machines and a dedicated women area. Every member gets an intro plan and body composition assessment. Floor coaches available daily 08-22h.',
 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', 'dumbbell', 90, 4, 1500, 'fitness'),
('crossfit', 'CrossFit', 'CrossFit',
 'Високо-интензивни WOD тренинзи во група до 14 луѓе со сертифициран CrossFit тренер.',
 'High-intensity WOD workouts in groups up to 14 with a certified CrossFit coach.',
 'CrossFit боксот од 250м² има rig за 10 места, 500kg bumper плочи, санки, јажиња, assault bikes и rower машини. Тренинзите траат 60 минути: загревање, skill/strength дел и WOD. Програмата е скалабилна — иста тренинг за почетници и напредни, со прилагодени тежини. Основен курс (On-Ramp) од 4 часа е задолжителен за нови членови.',
 'The 250m² CrossFit box has a 10-station rig, 500kg of bumper plates, sleds, ropes, assault bikes and rowers. Sessions last 60 minutes: warm-up, skill/strength part and WOD. The program is scalable — same workout for beginners and advanced, with adjusted weights. A 4-hour On-Ramp basics course is required for new members.',
 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', 'fire', 60, 5, 2200, 'crossfit'),
('yoga', 'Јога и пилатес', 'Yoga & Pilates',
 'Хата, вињаса и јин јога + пилатес за флексибилност, баланс и ментален мир.',
 'Hatha, vinyasa and yin yoga + pilates for flexibility, balance and peace of mind.',
 'Мирното студио од 120м² е твоја оаза во центарот на градот. Неделен распоред: утринска вињаса, пладневна хата, вечерен јин, пилатес за јадро и саботен mobility flow. Сите реквизити (простирки, блокови, ремени, болстери) се обезбедени. Идеално за почетници, бремени жени (пренатална јога) и спортисти кои сакаат подобра подвижност.',
 'The peaceful 120m² studio is your oasis downtown. Weekly schedule: morning vinyasa, midday hatha, evening yin, core pilates and Saturday mobility flow. All props (mats, blocks, straps, bolsters) are provided. Ideal for beginners, pregnant women (prenatal yoga) and athletes seeking better mobility.',
 'https://images.unsplash.com/photo-1599901860904-17e6ed708b0a?w=800&q=80', 'lotus', 60, 2, 1600, 'mind'),
('boxing', 'Бокс и кикбокс', 'Boxing & Kickbox',
 'Бокс сала со ринг, 10 вреќи и програма за почетници, рекреативци и натпреварувачи.',
 'Boxing hall with a ring, 10 bags and programs for beginners, amateurs and competitors.',
 'Бокс салата од 200м² располага со професионален ринг, 10 вреќи за удирање, speed ball платформа и татами зона за кикбокс. Групи: почетници (техника на удари, футворк), рекреативци (бокс фитнес, спаринг по желба) и натпреварувачи (подготовка за мечеви). Ркавици и штитници може да се изнајмат на рецепција.',
 'The 200m² boxing hall has a professional ring, 10 punching bags, a speed ball platform and a tatami zone for kickbox. Groups: beginners (punch technique, footwork), amateurs (box fitness, optional sparring) and competitors (fight preparation). Gloves and guards can be rented at reception.',
 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80', 'glove', 75, 5, 2000, 'combat'),
('personal', 'Персонален тренинг', 'Personal Training',
 '1-на-1 работа со тренер: план за тренинг, исхрана и мерење на прогрес секој месец.',
 '1-on-1 coaching: training plan, nutrition and progress tracking every month.',
 'Персоналниот тренинг е најбрзиот пат до резултати. Пакетот вклучува: иницијална проценка (InBody анализа, мерења, фотографии), индивидуален тренинг план, план за исхрана, 4-12 тренинзи месечно 1-на-1 и неделна комуникација преку апликација. Гаранција: ако не видиш мерлив прогрес за 90 дена со почитување на планот — добиваш 1 месец бесплатно.',
 'Personal training is the fastest path to results. The package includes: initial assessment (InBody analysis, measurements, photos), individual training plan, meal plan, 4-12 monthly 1-on-1 sessions and weekly in-app communication. Guarantee: if you see no measurable progress in 90 days while following the plan — you get 1 month free.',
 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', 'star', 60, 3, 6000, 'personal'),
('nutrition', 'Нутриционизам', 'Nutrition',
 'Индивидуален план за исхрана, анализа на состав на тело и месечни консултации.',
 'Individual meal plans, body composition analysis and monthly consultations.',
 'Исхраната е 70% од резултатот. Нашиот нутриционист изработува план според твоите цели, здравствена состојба, буџет и омилена храна — без гладни диети. Услугата вклучува: InBody анализа, план со рецепти и намирници од локални маркети, месечна контрола и корекција, едукација за суплементи. Популарно: програма Слабеење 90 дена со просечен резултат -9kg.',
 'Nutrition is 70% of the result. Our nutritionist builds a plan around your goals, health, budget and favorite food — no starvation diets. The service includes: InBody analysis, a plan with recipes from local markets, monthly check-ups and corrections, supplement education. Popular: 90-day Weight Loss program with an average result of -9kg.',
 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', 'salad', 45, 1, 2500, 'nutrition');

INSERT INTO pricing_plans (name_mk, name_en, price_mkd, period_mk, period_en, features_mk, features_en, popular, color) VALUES
('СТАРТ', 'START', 1200, '/ месечно', '/ monthly',
 'Теретана (06–23ч)|1 групен тренинг неделно|Соблекувална и сауна|Фитнес проценка|Апликација за следење',
 'Gym (06–23h)|1 group class weekly|Locker room & sauna|Fitness assessment|Tracking app',
 false, 'zinc'),
('ПРО', 'PRO', 1800, '/ месечно', '/ monthly',
 'Се од СТАРТ|Неограничени групни тренинзи|Сауна и масажа 1x месечно|План за исхрана|Приоритетни резервации|Замрзнување 30 дена',
 'Everything in START|Unlimited group classes|Sauna & massage 1x monthly|Meal plan|Priority bookings|30-day freeze',
 true, 'orange'),
('ЕЛИТА', 'ELITE', 3500, '/ месечно', '/ monthly',
 'Се од ПРО|4 персонални тренинзи|Индивидуален нутриционист|Гостински влез 2x месечно|24/7 пристап|Протеински шејк дневно',
 'Everything in PRO|4 personal trainings|Individual nutritionist|Guest pass 2x monthly|24/7 access|Daily protein shake',
 false, 'amber');

INSERT INTO classes (name_mk, name_en, trainer_id, day_of_week, start_time, end_time, capacity, booked_count, room, intensity) VALUES
('Утрински CrossFit WOD', 'Morning CrossFit WOD', 3, 0, '07:00', '08:00', 14, 9, 'CrossFit бокс', 3),
('Бодибилдинг сплит — гради', 'Bodybuilding split — chest', 1, 0, '09:00', '10:30', 20, 12, 'Теретана', 2),
('Вињаса јога', 'Vinyasa yoga', 2, 0, '12:00', '13:00', 18, 7, 'Јога студио', 1),
('Бокс почетници', 'Boxing beginners', 5, 0, '18:00', '19:15', 16, 14, 'Бокс сала', 2),
('HIIT согорување', 'HIIT burn', 3, 0, '19:30', '20:15', 20, 18, 'Сала А', 3),
('Пилатес јадро', 'Pilates core', 2, 1, '08:00', '09:00', 18, 11, 'Јога студио', 1),
('Powerlifting техника', 'Powerlifting technique', 1, 1, '10:00', '11:30', 12, 6, 'Теретана', 2),
('CrossFit WOD', 'CrossFit WOD', 3, 1, '17:30', '18:30', 14, 13, 'CrossFit бокс', 3),
('Кикбокс рекреативци', 'Kickbox amateurs', 5, 1, '19:00', '20:15', 16, 10, 'Бокс сала', 2),
('Утрински CrossFit WOD', 'Morning CrossFit WOD', 3, 2, '07:00', '08:00', 14, 8, 'CrossFit бокс', 3),
('Хата јога', 'Hatha yoga', 2, 2, '12:00', '13:00', 18, 9, 'Јога студио', 1),
('Функционален тренинг', 'Functional training', 6, 2, '18:00', '19:00', 20, 15, 'Сала А', 2),
('Бокс спаринг (напредни)', 'Boxing sparring (advanced)', 5, 2, '19:30', '20:45', 10, 10, 'Бокс сала', 3),
('TRX + јадро', 'TRX + core', 6, 3, '08:00', '09:00', 16, 5, 'Сала А', 2),
('Бодибилдинг сплит — грб', 'Bodybuilding split — back', 1, 3, '10:00', '11:30', 20, 14, 'Теретана', 2),
('CrossFit WOD', 'CrossFit WOD', 3, 3, '17:30', '18:30', 14, 12, 'CrossFit бокс', 3),
('Јин јога + медитација', 'Yin yoga + meditation', 2, 3, '20:00', '21:00', 18, 16, 'Јога студио', 1),
('Утрински CrossFit WOD', 'Morning CrossFit WOD', 3, 4, '07:00', '08:00', 14, 10, 'CrossFit бокс', 3),
('Бокс фитнес', 'Box fitness', 5, 4, '18:00', '19:00', 20, 17, 'Бокс сала', 2),
('HIIT согорување', 'HIIT burn', 6, 4, '19:30', '20:15', 20, 11, 'Сала А', 3),
('Саботен Team WOD', 'Saturday Team WOD', 3, 5, '10:00', '11:00', 24, 20, 'CrossFit бокс', 2),
('Mobility flow', 'Mobility flow', 2, 5, '11:30', '12:30', 18, 8, 'Јога студио', 1),
('Отворен бокс тренинг', 'Open boxing training', 5, 5, '12:00', '13:30', 20, 6, 'Бокс сала', 2),
('Неделен јога флоу', 'Sunday yoga flow', 2, 6, '10:00', '11:00', 18, 13, 'Јога студио', 1),
('Неделен лесен CrossFit', 'Sunday light CrossFit', 3, 6, '11:30', '12:15', 14, 4, 'CrossFit бокс', 1);

INSERT INTO blog_posts (slug, title_mk, title_en, excerpt_mk, excerpt_en, content_mk, content_en, image_url, category_mk, category_en, author, reading_min) VALUES
('5-greski-na-pocetnici-vo-teretana', '5 грешки на почетници во теретана', '5 Beginner Mistakes in the Gym',
 'Дознај ги најчестите грешки што ги прават почетниците и како да ги избегнеш за побрзи резултати.',
 'Learn the most common mistakes beginners make and how to avoid them for faster results.',
 'Грешка 1: Преголеми тежини од старт. Егото е најголем непријател на прогресот — почни лесно и совладај ја техниката.

Грешка 2: Прескокнување на загревање. 5-10 минути кардио + динамичко истегнување спречуваат повреди.

Грешка 3: Тренирање само на омилени мускули. Балансиран план (push/pull/legs) гради симетрично тело.

Грешка 4: Лоша исхрана. Без доволно протеини (1.6-2.2g по kg) мускулите немаат материјал за раст.

Грешка 5: Нередовност. 3 тренинзи неделно со месеци победуваат 6 тренинзи една недела па пауза.

Заклучок: Дојди на бесплатна проценка во City Gym — ќе ти направиме план што навистина функционира.',
 'Mistake 1: Too heavy weights from day one. Ego is the biggest enemy of progress — start light and master technique.

Mistake 2: Skipping warm-up. 5-10 minutes of cardio + dynamic stretching prevent injuries.

Mistake 3: Training only favorite muscles. A balanced plan (push/pull/legs) builds a symmetric body.

Mistake 4: Bad nutrition. Without enough protein (1.6-2.2g per kg) muscles have no material to grow.

Mistake 5: Inconsistency. 3 workouts weekly for months beats 6 workouts one week then a break.

Conclusion: Come for a free assessment at City Gym — we will make you a plan that really works.',
 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', 'Фитнес', 'Fitness', 'Марко Јовановски', 5),
('ishrana-za-muskulna-masa', 'Исхрана за мускулна маса — комплетен водич', 'Nutrition for Muscle Gain — Complete Guide',
 'Колку протеини, јаглехидрати и калории ти требаат за раст? Практичен водич од нашиот нутриционист.',
 'How much protein, carbs and calories do you need to grow? A practical guide from our nutritionist.',
 'За мускулна маса ти треба калориски суфицит од 200-300 kcal дневно и 1.6-2.2g протеини по килограм телесна тежина.

Пример за 80kg маж (цел: +0.3kg неделно):
- Појадок: овесна каша со банана, путер од кикирики и whey (700 kcal, 40g протеини)
- Ручек: 200g пилешко, 150g ориз, зеленчук, маслиново масло (800 kcal, 55g протеини)
- Пред тренинг: банана + кафе
- После тренинг: whey шејк + урми
- Вечера: 200g лосос, компири, салата (750 kcal, 45g протеини)

Клучни правила:
1. Јади доволно — вагата мора да расте 0.2-0.4kg неделно
2. Спиј 7-9 часа — мускулите растат додека спиеш
3. Хидратација: 3+ литри вода дневно
4. Креатин монохидрат 5g дневно — најдокажан суплемент

Закажи консултација со Елена за персонализиран план.',
 'For muscle gain you need a caloric surplus of 200-300 kcal daily and 1.6-2.2g protein per kilogram of bodyweight.

Example for an 80kg man (goal: +0.3kg weekly):
- Breakfast: oatmeal with banana, peanut butter and whey (700 kcal, 40g protein)
- Lunch: 200g chicken, 150g rice, vegetables, olive oil (800 kcal, 55g protein)
- Pre-workout: banana + coffee
- Post-workout: whey shake + dates
- Dinner: 200g salmon, potatoes, salad (750 kcal, 45g protein)

Key rules:
1. Eat enough — the scale must rise 0.2-0.4kg weekly
2. Sleep 7-9 hours — muscles grow while you sleep
3. Hydration: 3+ liters of water daily
4. Creatine monohydrate 5g daily — the most proven supplement

Book a consultation with Elena for a personalized plan.',
 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', 'Исхрана', 'Nutrition', 'Елена Стојанова', 7),
('sto-e-crossfit', 'Што е CrossFit и дали е за тебе?', 'What is CrossFit and Is It for You?',
 'Се за WOD, AMRAP, EMOM и зошто CrossFit е најбрзорастечкиот фитнес тренд во светот.',
 'All about WOD, AMRAP, EMOM and why CrossFit is the fastest growing fitness trend in the world.',
 'CrossFit е програма за функционална кондиција базирана на постојано варијабилни, високо-интензивни движења.

Што значи тоа на практика? Секој ден различен тренинг (WOD - Workout of the Day) кој комбинира:
- Кревање тегови (чучњеви, мртво кревање, исфрлање)
- Гимнастика (згибови, склекови, пропаѓања)
- Кардио (трчање, веслање, скокање јаже)

Формати: AMRAP (колку рунди за X минути), For Time (за време), EMOM (секоја минута нова задача).

Дали е за тебе? ДА, ако сакаш:
- Тренинг што никогаш не е досаден
- Заедница што те мотивира
- Мерливи резултати (време, тежина, рунди)

МИТ: CrossFit е опасен. ВИСТИНА: со добра техника и скалирање, ризикот е ист како и секој спорт. Затоа кај нас секој нов член поминува On-Ramp курс.

Дојди на пробен WOD секоја сабота во 10:00 — бесплатно!',
 'CrossFit is a functional conditioning program based on constantly varied, high-intensity movements.

What does that mean in practice? A different workout every day (WOD - Workout of the Day) combining:
- Weightlifting (squats, deadlifts, cleans)
- Gymnastics (pull-ups, push-ups, dips)
- Cardio (running, rowing, rope jumping)

Formats: AMRAP (as many rounds in X minutes), For Time, EMOM (every minute a new task).

Is it for you? YES, if you want:
- A workout that is never boring
- A community that motivates you
- Measurable results (time, weight, rounds)

MYTH: CrossFit is dangerous. TRUTH: with good technique and scaling, the risk equals any sport. That is why every new member with us passes an On-Ramp course.

Come to a trial WOD every Saturday at 10:00 — free!',
 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', 'CrossFit', 'CrossFit', 'Стефан Димитров', 6),
('joga-za-pocetnici', 'Јога за почетници: од каде да почнеш?', 'Yoga for Beginners: Where to Start?',
 'Хата, вињаса или јин? Водич низ стиловите и првите чекори на простирката.',
 'Hatha, vinyasa or yin? A guide through the styles and your first steps on the mat.',
 'Јогата не е само истегнување — тоа е систем за сила, флексибилност, дишење и ментален мир.

Кој стил да го избереш?
- ХАТА: бавна, основни пози, идеална за почетници
- ВИЊАСА: динамична, поврзани движења со здив, за кондиција
- ЈИН: пасивни пози по 3-5 минути, длабока релаксација
- ПИЛАТЕС: фокус на јадро, држење и контрола

Што ти треба: удобна облека и отворен ум. Простирка и реквизити добиваш кај нас.

Првите 4 недели: 2 часа неделно хата + 1 јин. Очекувај мускулна треска на неочекувани места — тоа е нормално!

Бенефити по 3 месеци (докажани): -40% болка во грб, подобар сон, намален стрес, подобра подвижност.

Распоред на часови види на страницата Распоред. Прв час бесплатен!',
 'Yoga is not just stretching — it is a system for strength, flexibility, breathing and mental peace.

Which style to choose?
- HATHA: slow, basic poses, ideal for beginners
- VINYASA: dynamic, movements linked with breath, for conditioning
- YIN: passive poses for 3-5 minutes, deep relaxation
- PILATES: focus on core, posture and control

What you need: comfortable clothes and an open mind. Mat and props are provided.

First 4 weeks: 2 hatha classes weekly + 1 yin. Expect muscle soreness in unexpected places — that is normal!

Benefits after 3 months (proven): -40% back pain, better sleep, less stress, better mobility.

See the Schedule page for class times. First class free!',
 'https://images.unsplash.com/photo-1599901860904-17e6ed708b0a?w=800&q=80', 'Јога', 'Yoga', 'Ана Петровска', 5),
('transformacija-nikola', 'Трансформација: -18kg за 6 месеци (интервју)', 'Transformation: -18kg in 6 Months (Interview)',
 'Приказната на Никола — од 102kg и болки во грб до нова личност. Прочитај како успеа.',
 'Nikola story — from 102kg and back pain to a new person. Read how he did it.',
 'Никола Т. (34) дојде во City Gym во март со 102kg и хронична болка во грбот. Шест месеци подоцна: 84kg, без болки и со нови навики за цел живот.

Како почна? Почнав со 3 тренинзи неделно: 2 пати теретана со тренер + 1 CrossFit light. Исхраната ја средивме со Елена — без глад, само паметни замени: газирано со вода, бел леб со интегрален, вечера до 20ч.

Најтешкиот момент? Третиот месец кога вагата застана 3 недели. Тренерот ми објасни дека е нормално (тело се адаптира) и продолжив. Потоа килограмите пак тргнаа надолу.

Што би им порачал на другите? Не чекај мотивација — дојди и почни. Мотивацијата доаѓа со резултатите. И најди си друштво за тренинг, многу е полесно.

Сакаш и ти ваква трансформација? Пријави се за бесплатен пробен тренинг и ќе направиме план за тебе.',
 'Nikola T. (34) came to City Gym in March with 102kg and chronic back pain. Six months later: 84kg, no pain and new habits for life.

How did it start? I started with 3 sessions weekly: 2x gym with a coach + 1 CrossFit light. We fixed nutrition with Elena — no hunger, just smart swaps: soda for water, white bread for wholegrain, dinner by 8pm.

The hardest moment? Month three when the scale stalled for 3 weeks. My coach explained it is normal (body adapts) and I continued. Then the kilos dropped again.

What would you tell others? Do not wait for motivation — come and start. Motivation comes with results. And find a training buddy, it is much easier.

Want a transformation like this? Sign up for a free trial training and we will make a plan for you.',
 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', 'Мотивација', 'Motivation', 'City Gym Тим', 4),
('novogodisna-akcija', 'Новогодишна акција: -30% на годишни членарини', 'New Year Sale: -30% on Annual Memberships',
 'До крајот на јануари — годишна ПРО членарина со 30% попуст + 1 месец персонален тренинг гратис.',
 'Until end of January — annual PRO membership with 30% off + 1 month of personal training free.',
 'Јануари е месец на нови почетоци — а ние го правиме почетокот полесен!

АКЦИЈА (до 31.01):
- Годишна ПРО членарина: 15.120 ден наместо 21.600 ден (-30%)
- ГРАТИС: 1 месец персонален тренинг (4 тренинзи 1-на-1)
- ГРАТИС: InBody анализа + план за исхрана

Услови: плаќање наеднаш или на 3 рати без камата. Акцијата важи за нови и постоечки членови (продолжување). Местата за персонален тренинг се ограничени на 30.

Како да ја искористиш? Дојди на рецепција, јави се на 02 3111 222 или пополни ја формата на страницата Членство со напомена АКЦИЈА.

Не ја пропуштај — минатата година местата се пополнија за 12 дена!',
 'January is the month of new beginnings — and we make the start easier!

SALE (until Jan 31):
- Annual PRO membership: 15,120 MKD instead of 21,600 MKD (-30%)
- FREE: 1 month of personal training (4 one-on-one sessions)
- FREE: InBody analysis + meal plan

Terms: pay at once or in 3 interest-free installments. Valid for new and existing members (renewal). Personal training spots limited to 30.

How to claim? Come to reception, call 02 3111 222 or fill the Membership form with note SALE.

Do not miss it — last year the spots filled in 12 days!',
 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80', 'Акции', 'Promos', 'City Gym Тим', 3);

INSERT INTO testimonials (name, text_mk, text_en, rating, program, image_url) VALUES
('Никола Т.', 'За 6 месеци изгубив 18kg со помош на тимот на City Gym. Тренерот и нутриционистот направија чуда. Најдобра одлука во мојот живот!', 'In 6 months I lost 18kg with the help of the City Gym team. The coach and nutritionist worked wonders. Best decision of my life!', 5, 'CrossFit', ''),
('Марија К.', 'Јога часовите кај Ана се нешто посебно. Атмосферата е одлична, салата секогаш чиста, а персоналот насмеан. Топло препорачувам!', 'Ana yoga classes are something special. Great atmosphere, always clean halls and smiling staff. Highly recommended!', 5, 'Јога', ''),
('Александар В.', 'Опремата е врвна, никогаш нема гужва наутро. Персоналниот тренинг вреди секој денар — за 3 месеци качив 5kg чиста маса.', 'Top-notch equipment, never crowded in the morning. Personal training is worth every denar — gained 5kg of lean mass in 3 months.', 5, 'Персонален', ''),
('Јована С.', 'Како мајка на две деца, конечно најдов место каде можам да тренирам опуштено. Детскиот кат е спас, а TRX тренинзите се одлични!', 'As a mother of two, I finally found a place where I can train relaxed. The kids corner is a lifesaver and TRX sessions are great!', 5, 'TRX', ''),
('Дарко П.', 'Бокс програмата е сериозна — ринг, вреќи, одличен тренер. За година дена од почетник стигнав до прв аматерски меч.', 'The boxing program is serious — ring, bags, great coach. In a year I went from beginner to my first amateur fight.', 5, 'Бокс', ''),
('Теодора М.', 'Сауната после тренинг е најдоброто нешто! Чисто, модерно, љубезни луѓе. Членарината целосно си ја оправдува цената.', 'The sauna after training is the best thing! Clean, modern, kind people. The membership fully justifies its price.', 4, 'Фитнес', '');
