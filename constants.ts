

import { Project, Mentor, SiteSettings } from './types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  heroTitle: {
    content: {
      AZE: "AKUSTEAM 2025",
      ENG: "AKUSTEAM 2025",
      TR: "AKUSTEAM 2025",
      RU: "AKUSTEAM 2025"
    },
    color: "#CCD6F6", // tech-white
    fontSize: "4.5rem"
  },
  heroSubtitle: {
    content: {
      AZE: "İnqilabi yenilikləri kəşf edin, onları yaradan insanlarla tanış olun və sabahımızı formalaşdıran layihələri araşdırın.",
      ENG: "Discover groundbreaking innovations, meet the brilliant minds behind them, and explore the projects shaping our tomorrow.",
      TR: "Çığır açan yenilikleri keşfedin, arkasındaki parlak zihinlerle tanışın ve yarınımızı şekillendiren projeleri inceleyin.",
      RU: "Откройте для себя революционные инновации, познакомьтесь с гениальными умами, стоящими за ними, и изучите проекты, формирующие наше завтра."
    },
    color: "#8892B0", // tech-slate
    fontSize: "1.25rem"
  },
  logoTop: {
    content: {
      AZE: "AZƏRBAYCAN",
      ENG: "AZERBAIJAN",
      TR: "AZERBAYCAN",
      RU: "АЗЕРБАЙДЖАН"
    },
    color: "#CCD6F6",
    fontSize: "12px"
  },
  logoMiddle: {
    content: {
      AZE: "KOOPERASİYA",
      ENG: "COOPERATION",
      TR: "KOOPERASYON",
      RU: "КООПЕРАЦИИ"
    },
    color: "#CCD6F6",
    fontSize: "24px"
  },
  logoBottom: {
    content: {
      AZE: "UNİVERSİTETİ",
      ENG: "UNIVERSITY",
      TR: "ÜNİVERSİTESİ",
      RU: "УНИВЕРСИТЕТ"
    },
    color: "#CCD6F6",
    fontSize: "12px"
  },
  showGame: true
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    teamName: {
      AZE: "Ventra Technology",
      ENG: "Ventra Technology",
      TR: "Ventra Technology",
      RU: "Ventra Technology"
    },
    // Fayl yolu: public/images/projects/ventra/logo.png
    logo: "/images/projects/ventra/logo.png",
    // Fayl yolu: public/images/projects/ventra/main.png
    image: "/images/projects/ventra/main.png",
    shortDescription: {
      AZE: "Günəş və külək enerjisini birləşdirən hibrid sistem. Fasiləsiz enerji təminatı və artıq enerji istehsalı ilə ekoloji cəhətdən səmərəli həll.",
      ENG: "A hybrid renewable energy system combining solar and wind power. An eco-efficient solution providing uninterrupted power and excess energy generation.",
      TR: "Güneş ve rüzgar enerjisini birleştiren hibrit yenilenebilir enerji sistemi. Kesintisiz güç kaynağı ve fazla enerji üretimi sağlayan eko-verimli bir çözüm.",
      RU: "Гибридная система возобновляемой энергии, объединяющая солнечную и ветровую энергию. Эко-эффективное решение, обеспечивающее бесперебойное питание."
    },
    longDescription: {
      AZE: "Bərpaolunan enerjinin ən böyük problemi onun fasiləli olmasıdır. Günəş və külək daimi enerji mənbələri deyil. Bizim layihəmiz də məhz bu boşluqları aradan qaldırmaq üçün hazırlanmış hibrid bir sistemdir.\n\nLayihəmizin əsas məntiqi iki fərqli gücün bir-birini tamamlamasıdır. Günəş panelləri günorta saatlarında ən yüksək məhsuldarlığa çatır, lakin gecələr və buludlu havada fəaliyyətini dayandırır. Külək turbinləri isə çox vaxt məhz gecə və səhər saatlarında, hava axınları gücləndikdə daha aktiv olur. Biz bu iki sistemi vahid bir mexanizmdə birləşdirdik.\n\nSistemimiz belə işləyir: Gün ərzində günəş həm evin ehtiyaclarını ödəyir, həm də batareyaları doldurur. Gecə və ya küləkli havada isə külək bu prosesi davam etdirir. Nəticədə sistem fasiləsiz işləyir.\n\nBu fasiləsiz rejim sayəsində sistem təkcə bir evin tələbatını ödəmir, hətta əhəmiyyətli dərəcədə artıq enerji istehsal edir. Gəlin sadə bir hesablama aparaq: Bir ailənin sutkalıq ehtiyacı təxminən 10-15 kilovat-saatdır. Bizim bu kiçik sistemimiz isə sutka ərzində 25-30 kilovat-saat enerji istehsal edə bilir.\n\nBu rəqəmlər o deməkdir ki, toplanan enerji təkcə bir evi deyil, əlavə olaraq bir və ya iki qonşu evi də təmin etməyə, yəni kiçik bir lokal enerji şəbəkəsi yaratmağa imkan verir. Bundan əlavə, ev sahibləri bu artıq enerji hesabına öz elektrik avtomobillərini də heç bir xərc olmadan, təmiz enerji ilə şarj edə bilərlər. Bu maket, sadəcə enerji asılılığını aradan qaldıran bir mühəndislik həlli deyil, həm də müstəqil bir enerji mərkəzinin modelidir.",
      ENG: "The biggest challenge with renewable energy is its intermittency. Solar and wind are not constant sources. Our project is a hybrid system designed to bridge these gaps.\n\nThe core logic of our project is that two different powers complement each other. Solar panels reach peak efficiency at noon but stop working at night or in cloudy weather. Wind turbines, on the other hand, are often more active at night and in the morning when air currents strengthen. We combined these two systems into a single mechanism.\n\nHere is how our system works: During the day, the sun powers the house and charges the batteries. At night or in windy weather, the wind continues this process. As a result, the system operates without interruption.\n\nThanks to this continuous mode, the system not only meets the needs of a single house but also produces significantly excess energy. Let's do a simple calculation: A family's daily need is about 10-15 kWh. Our small system can produce 25-30 kWh per day.\n\nThese figures mean that the collected energy allows not only powering one house but also supplying one or two neighboring houses, creating a small local energy grid. Furthermore, homeowners can charge their electric vehicles with clean energy at no cost using this excess energy. This model is not just an engineering solution that eliminates energy dependence; it is a model of an independent energy hub.",
      TR: "Yenilenebilir enerjinin en büyük sorunu kesintili olmasıdır. Güneş ve rüzgar sürekli enerji kaynakları değildir. Projemiz, tam da bu boşlukları doldurmak için tasarlanmış hibrit bir sistemdir.\n\nProjemizin temel mantığı, iki farklı gücün birbirini tamamlamasıdır. Güneş panelleri öğle saatlerinde en yüksek verimliliğe ulaşır, ancak geceleri veya bulutlu havalarda çalışmayı durdurur. Rüzgar türbinleri ise genellikle hava akımlarının güçlendiği gece ve sabah saatlerinde daha aktiftir. Biz bu iki sistemi tek bir mekanizmada birleştirdik.\n\nSistemimiz şöyle çalışır: Gün boyunca güneş hem evin ihtiyaçlarını karşılar hem de pilleri şarj eder. Gece veya rüzgarlı havalarda ise rüzgar bu süreci devam ettirir. Sonuç olarak sistem kesintisiz çalışır.\n\nBu kesintisiz mod sayesinde sistem sadece bir evin ihtiyacını karşılamakla kalmaz, aynı zamanda önemli miktarda fazla enerji üretir. Basit bir hesaplama yapalım: Bir ailenin günlük ihtiyacı yaklaşık 10-15 kWh'dir. Bizim bu küçük sistemimiz ise günde 25-30 kWh enerji üretebilmektedir.\n\nBu rakamlar, toplanan enerjinin sadece bir evi değil, ek olarak bir veya iki komşu evi de beslemeye, yani küçük bir yerel enerji şebekesi oluşturmaya olanak tanıdığı anlamına gelir. Ayrıca ev sahipleri bu fazla enerji sayesinde elektrikli araçlarını hiçbir ücret ödemeden temiz enerji ile şarj edebilirler. Yani bu maket, sadece enerji bağımlılığını ortadan kaldıran bir mühendislik çözümü değil, aynı zamanda bağımsız bir enerji merkezinin modelidir.",
      RU: "Самая большая проблема возобновляемой энергии — ее непостоянство. Солнце и ветер не являются постоянными источниками энергии. Наш проект — это гибридная система, разработанная именно для устранения этих пробелов.\n\nОсновная логика нашего проекта заключается в том, что две разные силы дополняют друг друга. Солнечные панели достигают пиковой эффективности в полдень, но прекращают работу ночью или в пасмурную погоду. Ветряные турбины же часто более активны именно ночью и утром, когда воздушные потоки усиливаются. Мы объединили эти две системы в единый механизм.\n\nНаша система работает так: днем солнце обеспечивает потребности дома и заряжает аккумуляторы. Ночью или в ветреную погоду этот процесс продолжает ветер. В результате система работает бесперебойно.\n\nБлагодаря этому бесперебойному режиму система не только покрывает потребности одного дома, но и производит значительно больше энергии. Давайте проведем простой расчет: суточная потребность семьи составляет около 10-15 кВтч. Наша небольшая система может производить 25-30 кВтч в сутки.\n\nЭти цифры означают, что собранная энергия позволяет обеспечить не только один дом, но и один или два соседних дома, то есть создать небольшую локальную энергосеть. Кроме того, домовладельцы могут бесплатно заряжать свои электромобили чистой энергией за счет этого избытка. То есть этот макет — не просто инженерное решение, устраняющее энергетическую зависимость, но и модель независимого энергетического центра."
    },
    members: ["Nəzrin Şikarlı"],
    projectLink: "",
    // Fayl yolları: public/images/projects/ventra/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/ventra/gallery1.png",
      "/images/projects/ventra/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/ventra/video.mp4
    video: "/images/projects/ventra/video.mp4"
  },
  {
    id: 2,
    teamName: {
      AZE: "RoboTwo",
      ENG: "RoboTwo",
      TR: "RoboTwo",
      RU: "RoboTwo"
    },
    // Fayl yolu: public/images/projects/robotwo/logo.png
    logo: "/images/projects/robotwo/logo.png",
    // Fayl yolu: public/images/projects/robotwo/main.png
    image: "/images/projects/robotwo/main.png",
    shortDescription: {
      AZE: "İstənilən avtomobilə inteqrasiya olunan, Arduino əsaslı ağıllı parkinq və təhlükəsizlik sistemi.",
      ENG: "An Arduino-based smart parking and safety system integratable into any vehicle.",
      TR: "Her araca entegre edilebilen, Arduino tabanlı akıllı park ve güvenlik sistemi.",
      RU: "Умная система парковки и безопасности на базе Arduino, интегрируемая в любой автомобиль."
    },
    longDescription: {
      AZE: "Hər birimiz şəhərimizin küçələrində bu mənzərə ilə qarşılaşmışıq: sıxlıq, nizam-intizam olmadan park edilmiş avtomobillər və bunun yaratdığı gərginlik. Bu problem təkcə qiymətli vaxtımızın itkisi deyil, həm də kiçik toqquşmalara, maddi ziyana və gündəlik həyatımızda ciddi əsəb gərginliyinə səbəb olur. Aparılan araşdırmalar göstərir ki, şəhərdaxili kiçik qəzaların böyük bir qismi məhz parkinq zamanı baş verir.\n\nMəhz bu problemi aradan qaldırmaq üçün biz, “RoboTwo” layihəsini hazırladıq. “RoboTwo”, istənilən avtomobilə asanlıqla inteqrasiya oluna bilən, universal bir parkinq yardım sistemidir. Məqsədimiz, bahalı avtomobillərdə olan bu üstünlüyü hər kəs üçün əlçatan etməkdir. Sistemimiz həm səsli, həm də gələcəkdə əlavə edəcəyimiz vizual xəbərdarlıqlarla sürücüyə dəstək olaraq parkinq prosesini tamamilə təhlükəsiz və stressiz bir təcrübəyə çevirir.\n\nBizim əsas məqsədimiz bu texnologiyanı avtomobilə əlavə edərkən onun xarici görünüşünü və səliqəsini tam qorumaq idi. İstədik ki, texnologiya hiss edilsin, amma görünməsin. Bütün sistemin beyni Arduino platformasıdır. Avtomobilin arxasına yerləşdirdiyimiz ultrasəs sensorları bizim “gözlərimiz” rolunu oynayır. Onlar maneə ilə məsafəni fasiləsiz olaraq ölçür və məlumatı mərkəzə, yəni Arduino-ya ötürür. Mərkəz isə C++ dilində yazdığımız alqoritm əsasında bu məlumatı emal edərək sürücüyə yaxınlaşma dərəcəsinə görə artan tezlikdə səs siqnalları göndərir.\n\nBütün bu naqillər və sxemlər avtomobilin daxili hissələrində, gözə görünməyəcək şəkildə səliqə ilə gizlədilib. Hətta sistemin nizamlı və etibarlı işləməsi üçün fərqli funksiyaları fərqli rəngli naqillərlə ayırdıq. Məsələn, səs siqnallarını ötürən xətlər qırmızı, sensorlardan gələn məlumatları isə mavi naqillər daşıyır. Bu, gələcəkdə sistemə yeni funksiyalar əlavə edərkən işimizi asanlaşdıracaq. Bu, hələ başlanğıcdır. Gələcəkdə sistemə kamera, avtomatik tormozlama və digər ağıllı funksiyalar əlavə etməyi planlaşdırırıq.",
      ENG: "We have all encountered this scene on our city streets: congestion, disorderly parked cars, and the resulting tension. This problem is not only a loss of our precious time but also causes minor collisions, financial damage, and serious nervous tension in our daily lives. Studies show that a large proportion of minor accidents within the city occur during parking.\n\nTo eliminate this problem, we developed the 'RoboTwo' project. 'RoboTwo' is a universal parking assistance system that can be easily integrated into any car. Our goal is to make this advantage, found in expensive cars, accessible to everyone. Our system transforms the parking process into a completely safe and stress-free experience by supporting the driver with both audible and, in the future, visual warnings.\n\nThe brain of the entire system is the Arduino platform. Ultrasonic sensors placed at the rear of the car act as our 'eyes.' They continuously measure the distance to the obstacle and transmit the information to the center, i.e., Arduino. Based on the algorithm we wrote in C++, the center processes this information and sends sound signals to the driver with increasing frequency according to the degree of approach. All these wires and circuits are neatly hidden inside the car's interior parts, invisible to the eye.",
      TR: "Hepimiz şehrimizin sokaklarında bu manzarayla karşılaşmışızdır: kalabalık, düzensiz park edilmiş arabalar ve bunun yarattığı gerginlik. Bu sorun sadece değerli vaktimizin kaybı değil, aynı zamanda küçük çarpışmalara, maddi hasara ve günlük hayatımızda ciddi sinir gerginliğine neden olur. Yapılan araştırmalar, şehir içi küçük kazaların büyük bir kısmının tam da park etme sırasında meydana geldiğini göstermektedir.\n\nTam da bu sorunu ortadan kaldırmak için biz, 'RoboTwo' projesini hazırladık. 'RoboTwo', istenilen her araca kolayca entegre edilebilen, evrensel bir park yardım sistemidir. Amacımız, pahalı arabalarda olan bu üstünlüğü herkes için ulaşılabilir kılmaktır. Sistemimiz hem sesli hem de gelecekte ekleyeceğimiz görsel uyarılarla sürücüye destek olarak park etme sürecini tamamen güvenli ve stressiz bir deneyime dönüştürür.\n\nTüm sistemin beyni Arduino platformudur. Arabanın arkasına yerleştirdiğimiz ultrasonik sensörler bizim 'gözlerimiz' rolünü oynar. Onlar engelle mesafeyi kesintisiz olarak ölçer ve bilgiyi merkeze, yani Arduino'ya iletir. Merkez ise C++ dilinde yazdığımız algoritma temelinde bu bilgiyi işleyerek sürücüye yaklaşma derecesine göre artan frekansta ses sinyalleri gönderir. Tüm bu kablolar ve şemalar arabanın iç kısımlarında, göze görünmeyecek şekilde özenle gizlenmiştir.",
      RU: "Каждый из нас сталкивался с этой картиной на улицах нашего города: пробки, беспорядочно припаркованные автомобили и возникающее из-за этого напряжение. Эта проблема — не только потеря нашего драгоценного времени, но и причина мелких столкновений, материального ущерба и серьезного нервного напряжения в нашей повседневной жизни. Исследования показывают, что большая часть мелких аварий в черте города происходит именно во время парковки.\n\nИменно для устранения этой проблемы мы разработали проект 'RoboTwo'. 'RoboTwo' — это универсальная система помощи при парковке, которую можно легко интегрировать в любой автомобиль. Наша цель — сделать это преимущество, доступное в дорогих автомобилях, доступным для каждого. Наша система превращает процесс парковки в полностью безопасный и безстрессовый опыт, поддерживая водителя как звуковыми, так и в будущем визуальными предупреждениями.\n\nМозгом всей системы является платформа Arduino. Ультразвуковые датчики, размещенные сзади автомобиля, играют роль наших 'глаз'. Они непрерывно измеряют расстояние до препятствия и передают информацию в центр, то есть на Arduino. Центр обрабатывает эту информацию на основе алгоритма, написанного нами на C++, и отправляет водителю звуковые сигналы с увеличивающейся частотой по мере приближения. Все эти провода и схемы аккуратно спрятаны во внутренних частях автомобиля, невидимые глазу."
    },
    members: ["Yusif Şıxəliyev", "Ülviyyə Cavadlı"],
    projectLink: "https://linktr.ee/RoboTwo",
    // Fayl yolları: public/images/projects/robotwo/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/robotwo/gallery1.png",
      "/images/projects/robotwo/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/robotwo/video.mp4
    video: "/images/projects/robotwo/video.mp4"
  },
  {
    id: 3,
    teamName: {
      AZE: "Bitcrip",
      ENG: "Bitcrip",
      TR: "Bitcrip",
      RU: "Bitcrip"
    },
    // Fayl yolu: public/images/projects/bitcrip/logo.png
    logo: "/images/projects/bitcrip/logo.png",
    // Fayl yolu: public/images/projects/bitcrip/main.png
    image: "/images/projects/bitcrip/main.png",
    shortDescription: {
      AZE: "Binalarda və yaşayış məkanlarında yanğın hadisələrinin erkən aşkar olunması və dərhal xəbərdarlıq edilməsi üçün hazırlanmış ağıllı təhlükəsizlik sistemi.",
      ENG: "A smart safety system designed for early detection of fire incidents in buildings and living spaces, providing immediate alerts.",
      TR: "Binalarda ve yaşam alanlarında yangın olaylarının erken tespiti ve anında uyarı verilmesi için tasarlanmış akıllı güvenlik sistemi.",
      RU: "Умная система безопасности, разработанная для раннего обнаружения возгораний в зданиях и жилых помещениях и немедленного оповещения."
    },
    longDescription: {
      AZE: "Binalarda, ofislərdə və yaşayış məkanlarında yanğın hadisələrinin erkən aşkar olunmaması ciddi fəsadlara səbəb olur. Əksər hallarda yanğın gec fərq edilir, nəticədə insanlar vaxtında təxliyə ola bilmir, maddi ziyan artır və fövqəladə xidmətlərin müdaxiləsi gecikmiş olur. Mövcud sistemlərdə gec xəbərdarlıq, texniki nasazlıq və ya kifayət qədər əhatə olunmayan ərazilər problemi mövcuddur.\n\nLayihəmiz bu problemləri həll etmək üçün sürətli və dəqiq işləyən yanğın sensoru sistemini təklif edir. Sistem duman və temperatur sensorları ilə real vaxtda müşahidə aparır, mikrokontroller (Arduino/ESP32) vasitəsilə məlumatları təhlil edir. Yanğın aşkar edildikdə dərhal səsli xəbərdarlıq verir və mobil tətbiq vasitəsilə bildiriş göndərir.\n\nBitcrip sisteminin əsas üstünlükləri yanğının başlanğıc mərhələsində erkən aşkar edilməsi, həm səsli, həm də uzaqdan avtomatik xəbərdarlıq sistemi, aşağı enerji sərfiyyatı və asan quraşdırılmasıdır. Bu layihə yanğın təhlükəsizliyinin artırılmasına yönəlmiş effektiv və müasir həll təqdim edir. Sistem yanğını vaxtında aşkar edərək həm insanların həyatını qoruyur, həm də maddi ziyanın qarşısını alır.",
      ENG: "Failure to detect fire incidents early in buildings, offices, and living spaces causes serious consequences. In most cases, fires are noticed late, resulting in inability to evacuate in time, increased material damage, and delayed emergency response. Existing systems suffer from late warnings, technical malfunctions, or insufficient coverage. Our project proposes a fast and accurate fire sensor system to solve these problems.\n\nThe system monitors in real-time with smoke and temperature sensors and analyzes data via a microcontroller (Arduino/ESP32). When a fire is detected, it immediately gives an audible warning and sends a notification via a mobile app.\n\nThe main advantages of the Bitcrip system are early detection of fire at the initial stage, both audible and remote automatic warning systems, low energy consumption, and easy installation. This project presents an effective and modern solution aimed at increasing fire safety. By detecting fire in time, the system protects both human lives and prevents material damage.",
      TR: "Binalarda, ofislerde ve yaşam alanlarında yangın olaylarının erken tespit edilmemesi ciddi sonuçlara yol açmaktadır. Çoğu durumda yangın geç fark edilir, bunun sonucunda insanlar zamanında tahliye olamaz, maddi hasar artar ve acil durum hizmetlerinin müdahalesi gecikir. Mevcut sistemlerde geç uyarı, teknik arıza veya yeterince kapsanmayan alanlar sorunu mevcuttur. Projemiz bu sorunları çözmek için hızlı ve doğru çalışan bir yangın sensör sistemi önermektedir.\n\nSistem duman ve sıcaklık sensörleri ile gerçek zamanlı izleme yapar, mikrodenetleyici (Arduino/ESP32) aracılığıyla verileri analiz eder. Yangın tespit edildiğinde derhal sesli uyarı verir ve mobil uygulama aracılığıyla bildirim gönderir.\n\nBitcrip sisteminin temel avantajları yangının başlangıç aşamasında erken tespit edilmesi, hem sesli hem de uzaktan otomatik uyarı sistemi, düşük enerji tüketimi ve kolay kurulumdur. Bu proje yangın güvenliğinin artırılmasına yönelik etkili ve modern bir çözüm sunmaktadır. Sistem yangını zamanında tespit ederek hem insan hayatını korur hem de maddi hasarı önler.",
      RU: "Несвоевременное обнаружение пожаров в зданиях, офисах и жилых помещениях приводит к серьезным последствиям. В большинстве случаев пожар замечают поздно, в результате чего люди не могут вовремя эвакуироваться, материальный ущерб возрастает, а вмешательство экстренных служб задерживается. В существующих системах есть проблемы с поздним предупреждением, техническими неисправностями или недостачным охватом территории. Наш проект предлагает быструю и точную систему пожарных датчиков для решения этих проблем.\n\nСистема ведет наблюдение в реальном времени с помощью датчиков дыма и температуры, анализирует данные через микроконтроллер (Arduino/ESP32). При обнаружении пожара она немедленно подает звуковой сигнал и отправляет уведомление через мобильное приложение.\n\nОсновными преимуществами системы Bitcrip являются раннее обнаружение пожара на начальной стадии, автоматическая система оповещения (как звуковая, так и удаленная), низкое энергопотребление и простота установки. Этот проект представляет собой эффективное и современное решение, направленное на повышение пожарной безопасности. Своевременно обнаруживая пожар, система защищает жизни людей и предотвращает материальный ущерб."
    },
    members: ["Nagızadə Sənan", "Həsənov Əli", "Sadıqzadə Şəhanə"],
    projectLink: "",
    // Fayl yolları: public/images/projects/bitcrip/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/bitcrip/gallery1.png",
      "/images/projects/bitcrip/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/bitcrip/video.mp4
    video: "/images/projects/bitcrip/video.mp4"
  },
  {
    id: 4,
    teamName: {
      AZE: "SKYTECH",
      ENG: "SKYTECH",
      TR: "SKYTECH",
      RU: "SKYTECH"
    },
    // Fayl yolu: public/images/projects/skytech/logo.png
    logo: "/images/projects/skytech/logo.png",
    // Fayl yolu: public/images/projects/skytech/main.png
    image: "/images/projects/skytech/main.png",
    shortDescription: {
      AZE: "Azyaşlılara dron qurmağı və idarə etməyi öyrədən, Arduino əsaslı tədris layihəsi.",
      ENG: "An Arduino-based educational project teaching minors how to build and control drones.",
      TR: "Çocuklara drone yapımını ve kontrolünü öğreten Arduino tabanlı bir eğitim projesi.",
      RU: "Образовательный проект на базе Arduino, обучающий детей сборке и управлению дронами."
    },
    longDescription: {
      AZE: "Bu layihə, azyaşlılara və gənclərə dronun qurulmasını, texniki hissələrini və idarə edilməsini praktiki şəkildə öyrətmək üçün hazırlanmışdır. Layihə çərçivəsində sadə dron hissələrindən istifadə olunsa da, cihazın daxilində mürəkkəb funksiyalar və quraşdırma prosesləri mövcuddur.\n\nDronun beyni Arduino platforması üzərində kodlaşdırılmışdır və enerji mənbəyi olaraq batareyalardan istifadə edilir. Layihənin əsas keysi (gövdəsi) və müxtəlif funksional hissələri xüsusi olaraq elə dizayn edilib ki, robotexnikaya həvəsi olan gənclər onu rahatlıqla söküb-yığa bilsinlər.\n\nKomandamızın əsas məqsədi mürəkkəb mühəndislik biliklərini sadələşdirərək gənc nəslə ötürməkdir. Bu layihə sayəsində uşaqlar sadəcə hazır qurğunu idarə etmir, həm də onun necə işlədiyini, kodların necə yazıldığını və detalların bir-biri ilə necə əlaqələndiyini öyrənirlər.",
      ENG: "This project is designed to practically teach minors and youth about drone assembly, technical components, and piloting. Although simple drone parts are used within the scope of the project, the device includes complex functions and assembly processes internally.\n\nThe drone's brain is coded on the Arduino platform and uses batteries as a power source. The main case (body) and various functional parts of the project are specially designed so that youth with a passion for robotics can easily disassemble and reassemble it.\n\nOur team's main goal is to simplify complex engineering knowledge and transfer it to the younger generation. Thanks to this project, children do not just control a ready-made device, but also learn how it works, how the codes are written, and how the details are interconnected.",
      TR: "Bu proje, küçük çocuklara ve gençlere drone yapımını, teknik parçalarını ve kontrolünü pratik bir şekilde öğretmek için hazırlanmıştır. Proje kapsamında basit drone parçaları kullanılsa da, cihazın içinde karmaşık fonksiyonlar ve kurulum süreçleri mevcuttur.\n\nDronun beyni Arduino platformu üzerinde kodlanmıştır ve güç kaynağı olarak piller kullanılır. Projenin ana gövdesi ve çeşitli fonksiyonel parçaları, robotiğe meraklı gençlerin onu rahatlıkla söküp takabilmesi için özel olarak tasarlanmıştır.\n\nTakımımızın temel amacı, karmaşık mühendislik bilgilerini basitleştirerek genç nesle aktarmaktır. Bu proje sayesinde çocuklar sadece hazır bir cihazı kontrol etmiyor, aynı zamanda nasıl çalıştığını, kodların nasıl yazıldığını ve parçaların birbirleriyle nasıl bağlantılı olduğunu da öğreniyorlar.",
      RU: "Этот проект разработан для практического обучения детей и молодежи сборке, техническим компонентам и управлению дронами. Хотя в рамках проекта используются простые детали дрона, устройство содержит сложные функции и процессы сборки внутри.\n\nМозг дрона закодирован на платформе Arduino, а в качестве источника питания используются батареи. Основной корпус и различные функциональные части проекта специально разработаны так, чтобы молодежь, увлеченная робототехникой, могла легко разбирать и собирать его.\n\nОсновная цель нашей команды — упростить сложные инженерные знания и передать их молодому поколению. Благодаря этому проекту дети не просто управляют готовым устройством, но и узнают, как оно работает, как пишутся коды и как детали взаимосвязаны друг с другом."
    },
    members: ["Aysu Əhmədova", "Sədaqət Səfərova", "Aydan İsmayılova"],
    projectLink: "",
    // Fayl yolları: public/images/projects/skytech/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/skytech/gallery1.png",
      "/images/projects/skytech/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/skytech/video.mp4
    video: "/images/projects/skytech/video.mp4"
  },
  {
    id: 5,
    teamName: {
      AZE: "KOD21",
      ENG: "KOD21",
      TR: "KOD21",
      RU: "KOD21"
    },
    // Fayl yolu: public/images/projects/kod21/logo.png
    logo: "/images/projects/kod21/logo.png",
    // Fayl yolu: public/images/projects/kod21/main.png
    image: "/images/projects/kod21/main.png",
    shortDescription: {
      AZE: "Görmə məhdudiyyətli insanlar üçün Arduino və ultrasəs sensorlarla hazırlanmış ağıllı əsa.",
      ENG: "A smart walking stick for visually impaired people, powered by Arduino and ultrasonic sensors.",
      TR: "Görme engelli bireyler için Arduino ve ultrasonik sensörlerle geliştirilmiş akıllı baston.",
      RU: "Умная трость для людей с нарушениями зрения, созданная на базе Arduino и ультразвуковым датчиков."
    },
    longDescription: {
      AZE: "\"Kod21\" - görmə məhdudiyyətli insanlar üçün hazırlanmış ağıllı əsa layihəsidir. Bu layihənin əsas məqsədi istifadəçilərin sərbəst hərəkətini təmin etmək və qarşılarına çıxan maneələri əvvəlcədən xəbərdar etməkdir.\n\nLayihə Arduino platforması üzərində qurulub. Əsanın üzərində yerləşdirilən ultrasəs (ultrasonic) sensorlar ətrafdakı maneələri müəyyən edir. Maneəyə yaxınlaşdıqda sistem səsli siqnal və ya vibrasiya vasitəsilə istifadəçiyə xəbərdarlıq göndərir. Bu texnologiya sayəsində görmə əngəlli şəxslər ətraf mühiti daha yaxşı hiss edir və təhlükəsiz şəkildə hərəkət edə bilirlər.",
      ENG: "\"Kod21\" is a smart walking stick designed for visually impaired individuals. The main goal of this project is to ensure independent movement for users and warn them of obstacles in advance.\n\nThe project is built on the Arduino platform. Ultrasonic sensors placed on the stick detect surrounding obstacles. When approaching an obstacle, the system sends a warning to the user via an audio signal or vibration. Thanks to this technology, visually impaired individuals can better sense their environment and move safely.",
      TR: "\"Kod21\", görme engelli bireyler için tasarlanmış akıllı bir baston projesidir. Bu projenin temel amacı, kullanıcıların bağımsız hareket etmelerini sağlamak ve önlerine çıkan engelleri önceden haber vermektir.\n\nProje Arduino platformu üzerine kurulmuştur. Bastonun üzerine yerleştirilen ultrasonik sensörler çevredeki engelleri algılar. Bir engele yaklaşıldığında sistem, sesli sinyal veya titreşim yoluyla kullanıcıya uyarı gönderir. Bu teknoloji sayesinde görme engelli bireyler çevrelerini daha iyi hissedebilir ve güvenli bir şekilde hareket edebilirler.",
      RU: "\"Kod21\" — это проект умной трости, разработанный для людей с нарушениями зрения. Основная цель этого проекта — обеспечить пользователям свободное передвижение и заранее предупреждать о препятствиях.\n\nПроект построен на платформе Arduino. Ультразвуковые датчики, размещенные на трости, обнаруживают окружающие препятствия. При приближении к препятствию система отправляет пользователю предупреждение с помощью звукового сигнала или вибрации. Благодаря этой технологии люди с нарушениями зрения могут лучше чувствовать окружающую среду и безопасно передвигаться."
    },
    members: ["Vüqar Gəraylı"],
    projectLink: "",
    // Fayl yolları: public/images/projects/kod21/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/kod21/gallery1.png",
      "/images/projects/kod21/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/kod21/video.mp4
    video: "/images/projects/kod21/video.mp4"
  },
  {
    id: 6,
    teamName: {
      AZE: "For The Future (FTF)",
      ENG: "For The Future (FTF)",
      TR: "For The Future (FTF)",
      RU: "For The Future (FTF)"
    },
    // Fayl yolu: public/images/projects/binbot/logo.png
    logo: "/images/projects/binbot/logo.png",
    // Fayl yolu: public/images/projects/binbot/main.png
    image: "/images/projects/binbot/main.png",
    shortDescription: {
      AZE: "Tullantıları quru və nəm olaraq avtomatik ayıran ağıllı zibil qutusu.",
      ENG: "A smart trash bin that automatically separates waste into dry and wet categories.",
      TR: "Atıkları kuru ve ıslak olarak otomatik ayıran akıllı çöp kutusu.",
      RU: "Умная мусорная корзина, автоматически разделяющая отходы на сухие и влажные."
    },
    longDescription: {
      AZE: "BinBot layihəsinin əsas məqsədi tullantıları avtomatik olaraq quru və nəm olmaqla iki kateqoriyaya ayıran ağıllı zibil qutusu hazırlamaqdır. Bu sistem tullantıların gigiyenik və doğru şəkildə ayrılmasını təmin edərək təkrar emala kömək edir və ekoloji təsiri azaldır.\n\nSistem necə işləyir?\n1. Ultrasonik sensor tullantı yaxınlaşanda sistemi aktivləşdirir.\n2. Rütubət sensoru tullantının nəm səviyyəsini ölçür.\n3. Arduino UNO məlumatları emal edir və servo motor vasitəsilə tullantını uyğun bölməyə yönləndirir.\n\nLayihədə istifadə olunan əsas hissələr: Arduino UNO, Ultrasonik sensor, Rütubət sensoru, Servo motor, Breadboard və kabellər.",
      ENG: "The main goal of the BinBot project is to create a smart trash bin that automatically separates waste into two categories: dry and wet. This system ensures hygienic and correct separation of waste, supports recycling, and reduces environmental impact.\n\nHow does the system work?\n1. The ultrasonic sensor activates the system when waste approaches.\n2. The moisture sensor measures the moisture level of the waste.\n3. Arduino UNO processes the data and directs the waste to the appropriate compartment via a servo motor.\n\nMain components used: Arduino UNO, Ultrasonic sensor, Moisture sensor, Servo motor, Breadboard, and cables.",
      TR: "BinBot projesinin temel amacı, atıkları otomatik olarak kuru ve ıslak olmak üzere iki kategoriye ayıran akıllı bir çöp kutusu yapmaktır. Bu sistem, atıkların hijyenik ve doğru şekilde ayrılmasını sağlayarak geri dönüşüme katkıda bulunur ve çevresel etkiyi azaltır.\n\nSistem nasıl çalışır?\n1. Ultrasonik sensör atık yaklaştığında sistemi etkinleştirir.\n2. Nem sensörü atığın nem seviyesini ölçer.\n3. Arduino UNO verileri işler ve servo motor aracılığıyla atığı uygun bölmeye yönlendirir.\n\nKullanılan ana bileşenler: Arduino UNO, Ultrasonik sensör, Nem sensörü, Servo motor, Breadboard ve kablolar.",
      RU: "Основная цель проекта BinBot — создать умную мусорную корзину, которая автоматически разделяет отходы на две категории: сухие и влажные. Эта система обеспечивает гигиеничное и правильное разделение отходов, способствует переработке и снижает воздействие на окружающую среду.\n\nКак работает система?\n1. Ультразвуковой датчик активирует систему при приближении мусора.\n2. Датчик влажности измеряет уровень влажности отходов.\n3. Arduino UNO обрабатывает данные и с помощью серводвигателя направляет отходы в соответствующий отсек.\n\nОсновные компоненты: Arduino UNO, Ультразвуковой датчик, Датчик влажности, Серводвигатель, Макетная плата и кабели."
    },
    members: ["Rəhimov Nicat", "Eldostlu Elton"],
    projectLink: "mailto:nicatrehimov50@gmail.com",
    // Fayl yolları: public/images/projects/binbot/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/binbot/gallery1.png",
      "/images/projects/binbot/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/binbot/video.mp4
    video: "/images/projects/binbot/video.mp4"
  },
  {
    id: 7,
    teamName: {
      AZE: "Cyberaku",
      ENG: "Cyberaku",
      TR: "Cyberaku",
      RU: "Cyberaku"
    },
    // Fayl yolu: public/images/projects/cyberaku/logo.png
    logo: "/images/projects/cyberaku/logo.png",
    // Fayl yolu: public/images/projects/cyberaku/main.png
    image: "/images/projects/cyberaku/main.png",
    shortDescription: {
      AZE: "3D çap hissələrdən ibarət, servo motorlarla hərəkət edən robot və diqqəti inkişaf etdirən Tel Labirint oyunu.",
      ENG: "A project featuring a Wire Maze Game for skill development and a custom-built 3D printed robot.",
      TR: "Dikkat geliştirici Tel Labirent Oyunu ve 3D yazıcı ile üretilmiş, servo motorlu bir robot projesi.",
      RU: "Проект, включающий игру «Проволочный лабиринт» для развития внимания и робота, созданного на 3D-принтере."
    },
    longDescription: {
      AZE: "Cyberaku layihəsi iki maraqlı hissədən ibarətdir: Tel Labirint Oyunu və 3D Çap Robotu.\n\nTel Labirint Oyunu:\nƏsas məqsəd metal halqanı əyilmiş telin üzərindən toxundurmadan keçirməkdir. Halqa teli toxunarsa, elektrik siqnalı (səs, işıq) işə düşür. Bu oyun əl-göz koordinasiyasını, diqqəti və səbri inkişaf etdirir. Uşaqlar və gənclər üçün STEM bacarıqlarını təşviq edir.\n\nRobotun Hazırlanma Prosesi:\n1. Dizayn: Robotun gövdəsi və ayaqları 3D modelləmə proqramında hazırlanır və 3D printerdə çap edilir.\n2. Mexanika: Ayaq seqmentləri servo motorlara birləşdirilir, bu da robotun müxtəlif istiqamətlərdə hərəkət etməsinə imkan verir.\n3. Elektronika: Servo motorlar sürücü lövhəsinə və mikroidarəçiyə bağlanır.\n4. Proqramlaşdırma: Gəzinti və balans üçün xüsusi alqoritmlər yazılır.\n\nBu layihə həm əyləncəli oyunu, həm də mürəkkəb mühəndislik həllini bir araya gətirir.",
      ENG: "The Cyberaku project consists of two exciting parts: a Wire Maze Game and a 3D Printed Robot.\n\nWire Maze Game:\nThe main goal is to pass a metal ring over a bent wire without touching it. If the ring touches the wire, an electric signal (sound, light) is triggered. This game develops hand-eye coordination, attention, and patience. It promotes STEM skills for children and youth.\n\nRobot Construction Process:\n1. Design: The robot's body and legs are created in 3D modeling software and printed on a 3D printer.\n2. Mechanics: Leg segments are connected to servo motors, allowing the robot to move in various directions.\n3. Electronics: Servo motors are connected to the driver board and microcontroller.\n4. Programming: Special algorithms are written for walking and balance.\n\nThis project combines both an entertaining game and a complex engineering solution.",
      TR: "Cyberaku projesi iki heyecan verici bölümden oluşur: Tel Labirent Oyunu ve 3D Baskılı Robot.\n\nTel Labirent Oyunu:\nTemel amaç, metal bir halkayı bükülmüş bir telin üzerinden değdirmeden geçirmektir. Halka tele değerse, elektrik sinyali (ses, ışık) tetiklenir. Bu oyun el-göz koordinasyonunu, dikkati ve sabrı geliştirir. Çocuklar ve gençler için STEM becerilerini teşvik eder.\n\nRobot Yapım Süreci:\n1. Tasarım: Robotun gövdesi ve ayakları 3D modelleme programında hazırlanır ve 3D yazıcıda basılır.\n2. Mekanik: Ayak segmentleri servo motorlara bağlanır, bu da robotun çeşitli yönlerde hareket etmesini sağlar.\n3. Elektronik: Servo motorlar sürücü kartına ve mikrodenetleyiciye bağlanır.\n4. Programlama: Yürüme ve denge için özel algoritmalar yazılır.\n\nBu proje hem eğlenceli bir oyunu hem de karmaşık bir mühendislik çözümünü bir araya getiriyor.",
      RU: "Проект Cyberaku состоит из двух увлекательных частей: игры «Проволочный лабиринт» и 3D-печатного робота.\n\nИгра «Проволочный лабиринт»:\nОсновная цель — провести металлическое кольцо через изогнутую проволоку, не касаясь ее. Если кольцо касается проволоки, срабатывает электрический сигнал (звук, свет). Эта игра развивает зрительно-моторную координацию, внимание и терпение. Она способствует развитию навыков STEM у детей и молодежи.\n\nПроцесс создания робота:\n1. Дизайн: Корпус и ноги робота создаются в программе 3D-моделирования и печатаются на 3D-принтере.\n2. Механика: Сегменты ног соединяются с сервомоторами, что позволяет роботу двигаться в различных направлениях.\n3. Электроника: Сервомоторы подключаются к плате драйвера и микроконтроллеру.\n4. Программирование: Пишутся специальные алгоритмы для ходьбы и баланса.\n\nЭтот проект объединяет в себе как развлекательную игру, так и сложное инженерное решение."
    },
    members: ["İbrahimov Nurlan", "Rəqsanə Həmidova"],
    projectLink: "",
    // Fayl yolları: public/images/projects/cyberaku/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/cyberaku/gallery1.png",
      "/images/projects/cyberaku/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/cyberaku/video.mp4
    video: "/images/projects/cyberaku/video.mp4"
  },
  {
    id: 8,
    teamName: {
      AZE: "AKUvation",
      ENG: "AKUvation",
      TR: "AKUvation",
      RU: "AKUvation"
    },
    // Fayl yolu: public/images/projects/aquacontrol/logo.png
    logo: "/images/projects/aquacontrol/logo.png",
    // Fayl yolu: public/images/projects/aquacontrol/main.png
    image: "/images/projects/aquacontrol/main.png",
    shortDescription: {
      AZE: "Su üzərində hərəkət edən, hidrodinamik prinsiplərlə hazırlanmış yüksək idarəetmə qabiliyyətli pultlu gəmi prototipi.",
      ENG: "A remote-controlled boat prototype with high maneuverability, designed with hydrodynamic principles.",
      TR: "Hidrodinamik prensiplerle tasarlanmış, yüksek manevra kabiliyetine sahip uzaktan kumandalı tekne prototipi.",
      RU: "Прототип радиоуправляемой лодки с высокой маневренностью, разработанный на основе принципов гидродинамики."
    },
    longDescription: {
      AZE: "“AquaControl RC Boat” layihəsi su üzərində hərəkət edən, idarəetmə qabiliyyəti yüksək olan və real mühəndislik prinsiplərini nümayiş etdirən pultlu gəmi modelidir. Bu prototip hidrodinamika prinsiplərinə uyğun olaraq hazırlanmışdır. Gəminin gövdəsi su müqavimətini minimuma endirən konstruksiyada formalaşdırılıb.\n\nModel aşağıdakı texniki komponentlərə əsaslanır:\n- Elektrik mühərriki: Gəminin irəli və geri hərəkətini təmin edir.\n- Servo motor: Gəminin dönmə bucağını idarə edir.\n- Siqnal qəbuledici modul: Pultdan gələn komandaları qəbul edib mühərrikə ötürür.\n- Enerji sistemi: Batareya bloku ilə təmin olunur.\n\nBu layihə vasitəsilə su nəqliyyatı mexanikası, balans, enerji ötürülməsi və uzaqdan idarəetmə prinsipləri real model üzərində praktiki şəkildə öyrənilib.",
      ENG: "The “AquaControl RC Boat” project is a remote-controlled boat model that moves on water, features high maneuverability, and demonstrates real engineering principles. This prototype is designed according to hydrodynamic principles. The hull of the boat is shaped to minimize water resistance.\n\nThe model is based on the following technical components:\n- Electric motor: Provides forward and backward movement.\n- Servo motor: Controls the steering angle of the boat.\n- Signal receiver module: Receives commands from the remote and transmits them to the motor.\n- Energy system: Powered by a battery block.\n\nThrough this project, water transport mechanics, balance, energy transmission, and remote control principles are learned practically on a real model.",
      TR: "“AquaControl RC Boat” projesi, su üzerinde hareket eden, yüksek manevra kabiliyetine sahip ve gerçek mühendislik ilkelerini sergileyen uzaktan kumandalı bir tekne modelidir. Bu prototip hidrodinamik prensiplere uygun olarak hazırlanmıştır. Teknenin gövdesi su direncini en aza indirecek şekilde tasarlanmıştır.\n\nModel aşağıdaki teknik bileşenlere dayanmaktadır:\n- Elektrik motoru: Teknenin ileri ve geri hareketini sağlar.\n- Servo motor: Teknenin dönüş açısını kontrol eder.\n- Sinyal alıcı modül: Kumandadan gelen komutları alır ve motora iletir.\n- Enerji sistemi: Pil bloğu ile sağlanır.\n\nBu proje sayesinde su taşıma mekaniği, denge, enerji iletimi ve uzaktan kumanda ilkeleri gerçek bir model üzerinde uygulamalı olarak öğrenilmektedir.",
      RU: "Проект «AquaControl RC Boat» — это модель радиоуправляемой лодки, которая движется по воде, обладает высокой маневренностью и демонстрирует реальные инженерные принципы. Этот прототип разработан в соответствии с принципами гидродинамики. Корпус лодки имеет форму, минимизирующую сопротивление воды.\n\nМодель основана на следующих технических компонентах:\n- Электродвигатель: Обеспечивает движение вперед и назад.\n- Сервомотор: Управляет углом поворота лодки.\n- Модуль приема сигнала: Принимает команды с пульта и передает их на двигатель.\n- Энергосистема: Питается от аккумуляторного блока.\n\nС помощью этого проекта механика водного транспорта, баланс, передача энергии и принципы дистанционного управления изучаются на практике на реальной модели."
    },
    members: ["Tənzilzadə Gülsabah", "Cəfərova Jalə"],
    projectLink: "",
    // Fayl yolları: public/images/projects/aquacontrol/
    gallery: [
      "/images/projects/aquacontrol/gallery1.png",
      "/images/projects/aquacontrol/gallery2.png"
    ],
    video: "/images/projects/aquacontrol/video.mp4"
  },
  {
    id: 9,
    teamName: {
      AZE: "AKUvation",
      ENG: "AKUvation",
      TR: "AKUvation",
      RU: "AKUvation"
    },
    // Fayl yolu: public/images/projects/autodrive/logo.png
    logo: "/images/projects/autodrive/logo.png",
    // Fayl yolu: public/images/projects/autodrive/main.png
    image: "/images/projects/autodrive/main.png",
    shortDescription: {
      AZE: "Robototexnika və elektronikanın baza prinsiplərini nümayiş etdirən, tam idarəolunan pultlu maşın modeli.",
      ENG: "A fully controllable remote-controlled car model demonstrating basic principles of robotics and electronics.",
      TR: "Robotik ve elektroniğin temel prensiplerini gösteren, tam kontrol edilebilir uzaktan kumandalı araba modeli.",
      RU: "Полностью управляемая модель радиоуправляемой машины, демонстрирующая основные принципы робототехники и электроники."
    },
    longDescription: {
      AZE: "“AutoDrive RC Car” layihəsi elektrik mühərrikləri və idarəetmə sistemi ilə işləyən kiçik avtomobil prototipidir. Maşın real avtomobillərin iş prinsipini sadələşdirilmiş formada əks etdirir. Bu layihə robototexnika və elektronikanın baza prinsiplərini nümayiş etdirmək üçün hazırlanmışdır.\n\nTərkibində aşağıdakı sistemlər mövcuddur:\n- DC mühərrikləri: Sürət və hərəkət funksiyasını təmin edir.\n- Servo dönmə mexanizmi: Ön təkərlərin sağ–sol dönməsini idarə edir.\n- Uzaqdan idarəetmə modulu: Komandaların saniyələr içində maşına ötürülməsinə imkan yaradır.\n- Şassi və konstruksiya: Stabil hərəkət və balans üçün yüngül və davamlı materiallardan yığılıb.\n\nLayihə tələbəyə real mühərrik iş prinsipi, enerji paylanması, mexaniki konstruksiya və siqnal idarəetmə texnologiyasını praktiki şəkildə öyrədir.",
      ENG: "The “AutoDrive RC Car” project is a small car prototype powered by electric motors and a control system. The car reflects the working principle of real cars in a simplified form. This project aims to demonstrate the basic principles of robotics and electronics.\n\nIt includes the following systems:\n- DC motors: Provide speed and movement functions.\n- Servo steering mechanism: Controls the left-right turning of the front wheels.\n- Remote control module: Allows commands to be transmitted to the car in seconds.\n- Chassis and construction: Assembled from light and durable materials for stable movement and balance.\n\nThe project teaches the student the real motor working principle, energy distribution, mechanical construction, and signal control technology practically.",
      TR: "“AutoDrive RC Car” projesi, elektrik motorları ve kontrol sistemi ile çalışan küçük bir araba prototipidir. Araba, gerçek arabaların çalışma prensibini basitleştirilmiş bir biçimde yansıtır. Bu proje, robotik ve elektroniğin temel ilkelerini göstermek için tasarlanmıştır.\n\nAşağıdaki sistemleri içerir:\n- DC motorlar: Hız ve hareket işlevlerini sağlar.\n- Servo direksiyon mekanizması: Ön tekerleklerin sağa-sola dönüşünü kontrol eder.\n- Uzaktan kumanda modülü: Komutların saniyeler içinde araca iletilmesini sağlar.\n- Şasi ve yapı: Dengeli hareket ve denge için hafif ve dayanıklı malzemelerden monte edilmiştir.\n\nProje, öğrenciye gerçek motor çalışma prensibini, enerji dağılımını, mekanik yapıyı ve sinyal kontrol teknolojisini uygulamalı olarak öğretir.",
      RU: "Проект «AutoDrive RC Car» — это прототип небольшого автомобиля, работающего от электродвигателей и системы управления. Машина отражает принцип работы реальных автомобилей в упрощенной форме. Этот проект призван продемонстрировать основные принципы робототехники и электроники.\n\nВключает в себя следующие системы:\n- Двигатели постоянного тока: Обеспечивают скорость и движение.\n- Сервомотор: Управляет углом поворота передних колес влево-вправо.\n- Модуль дистанционного управления: Позволяет передавать команды на машину за считанные секунды.\n- Шасси и конструкция: Собраны из легких и прочных материалов для стабильного движения и баланса.\n\nПроект обучает студента реальному принципу работы двигателя, распределению энергии, механической конструкции и технологии управления сигналами на практике."
    },
    members: ["Tənzilzadə Gülsabah", "Cəfərova Jalə"],
    projectLink: "",
    // Fayl yolları: public/images/projects/autodrive/
    gallery: [
      "/images/projects/autodrive/gallery1.png",
      "/images/projects/autodrive/gallery2.png"
    ],
    video: "/images/projects/autodrive/video.mp4"
  },
  {
    id: 10,
    teamName: {
      AZE: "AKUvation",
      ENG: "AKUvation",
      TR: "AKUvation",
      RU: "AKUvation"
    },
    // Fayl yolu: public/images/projects/skyvision/logo.png
    logo: "/images/projects/skyvision/logo.png",
    // Fayl yolu: public/images/projects/skyvision/main.png
    image: "/images/projects/skyvision/main.png",
    shortDescription: {
      AZE: "Balanslaşdırılmış uçuş sisteminə malik, stabil və idarəolunan dron (quadcopter) prototipi.",
      ENG: "A balanced, stable, and controllable drone (quadcopter) prototype with an advanced flight system.",
      TR: "Dengeli uçuş sistemine sahip, kararlı ve kontrol edilebilir drone (quadcopter) prototipi.",
      RU: "Прототип сбалансированного, стабильного и управляемого дрона (квадрокоптера) с системой полета."
    },
    longDescription: {
      AZE: "“SkyVision Quadcopter” layihəsi balanslaşdırılmış uçuş sisteminə malik, stabil və idarəolunan dronun hazırlanması məqsədini daşıyır. Dron 4 mühərrik və pervane üzərində qurulmuş “quadcopter” uçuş sistemindən istifadə edir. Uzaqdan idarə olunan uçuş üçün inertial ölçü sistemləri və stabilizasiya mexanizmləri tətbiq edilir.\n\nDronun texniki strukturu:\n- 4 ədəd yüksək sürətli mühərrik: Yüksəlmə, enmə və manevr etməyi təmin edir.\n- Balans və stabilizasiya sistemi (IMU): Uçuş zamanı dronun yırğalanmasının qarşısını alır.\n- ESC (Electronic Speed Controller): Hər motorun sürətini ayrıca tənzimləyir.\n- Uzaqdan idarəetmə modulu: Real zamanlı uçuş komandalarının qəbulunu təmin edir.\n- Enerji modulu: Yüksək gərginlikli batareya ilə təchiz edilir.\n\nLayihə vasitəsilə dronların uçuş prinsipi, aerodinamika, sabitlik sistemi, motor idarəetməsi və wireless texnologiyalar barədə geniş praktiki bilik əldə edilmişdir.",
      ENG: "The “SkyVision Quadcopter” project aims to develop a stable and controllable drone with a balanced flight system. The drone uses a “quadcopter” flight system built on 4 motors and propellers. Inertial measurement systems and stabilization mechanisms are applied for remote-controlled flight.\n\nTechnical structure of the drone:\n- 4 high-speed motors: Provide ascent, descent, and maneuvering.\n- Balance and stabilization system (IMU): Prevents the drone from wobbling during flight.\n- ESC (Electronic Speed Controller): Adjusts the speed of each motor individually.\n- Remote control module: Ensures the reception of real-time flight commands.\n- Energy module: Equipped with a high-voltage battery.\n\nThrough the project, extensive practical knowledge has been gained about drone flight principles, aerodynamics, stability systems, motor control, and wireless technologies.",
      TR: "“SkyVision Quadcopter” projesi, dengeli bir uçuş sistemine sahip, kararlı ve kontrol edilebilir bir drone geliştirmeyi amaçlamaktadır. Drone, 4 motor ve pervane üzerine kurulu bir “quadcopter” uçuş sistemi kullanır. Uzaktan kumandalı uçuş için atalet ölçüm sistemleri ve stabilizasyon mekanizmaları uygulanır.\n\nDrone'un teknik yapısı:\n- 4 adet yüksek hızlı motor: Yükselme, alçalma ve manevra yapmayı sağlar.\n- Denge ve stabilizasyon sistemi (IMU): Uçuş sırasında drone'un sallanmasını önler.\n- ESC (Elektronik Hız Kontrolcüsü): Her motorun hızını ayrı ayrı ayarlar.\n- Uzaktan kumanda modülü: Gerçek zamanlı uçuş komutlarının alınmasını sağlar.\n- Enerji modülü: Yüksek voltajlı pil ile donatılmıştır.\n\nProje sayesinde drone uçuş prensipleri, aerodinamik, kararlılık sistemleri, motor kontrolü ve kablosuz teknolojiler hakkında geniş pratik bilgi edinilmiştir.",
      RU: "Проект «SkyVision Quadcopter» направлен на разработку стабильного и управляемого дрона со сбалансированной системой полета. Дрон использует систему полета «квадрокоптер», построенную на 4 моторах и пропеллерах. Для дистанционно управляемого полета применяются инерциальные измерительные системы и механизмы стабилизации.\n\nТехническая структура дрона:\n- 4 высокоскоростных мотора: Обеспечивают взлет, посадку и маневрирование.\n- Система баланса и стабилизации (IMU): Предотвращает раскачивание дрона во время полета.\n- ESC (Электронный регулятор скорости): Регулирует скорость каждого мотора индивидуально.\n- Модуль дистанционного управления: Обеспечивает прием команд полета в реальном времени.\n- Энергетический модуль: Оснащен высоковольтной батареей.\n\nБлагодаря проекту были получены обширные практические знания о принципах полета дронов, аэродинамике, системах стабилизации, управлении моторами и беспроводных технологиях."
    },
    members: ["Tənzilzadə Gülsabah", "Cəfərova Jalə"],
    projectLink: "",
    // Fayl yolları: public/images/projects/skyvision/
    gallery: [
      "/images/projects/skyvision/gallery1.png",
      "/images/projects/skyvision/gallery2.png"
    ],
    video: "/images/projects/skyvision/video.mp4"
  },
  {
    id: 11,
    teamName: {
      AZE: "HSE & oil",
      ENG: "HSE & oil",
      TR: "HSE & oil",
      RU: "HSE & oil"
    },
    // Fayl yolu: public/images/projects/hse_oil/logo.png
    logo: "/images/projects/hse_oil/logo.png",
    // Fayl yolu: public/images/projects/hse_oil/main.png
    image: "/images/projects/hse_oil/main.png",
    shortDescription: {
      AZE: "Neft buruqlarında təhlükəsizliyi təmin edən Arduino əsaslı ağıllı monitorinq sistemi.",
      ENG: "An Arduino-based smart monitoring system ensuring safety in oil rigs.",
      TR: "Petrol kulelerinde güvenliği sağlayan Arduino tabanlı akıllı izleme sistemi.",
      RU: "Умная система мониторинга на базе Arduino, обеспечивающая безопасность на нефтяных вышках."
    },
    longDescription: {
      AZE: "Neft buruqlarında qazma prosesi zamanı təzyiqin qəfil dəyişməsi, vibrasiya səviyyəsinin artması, temperaturun normadan kənara çıxması və qazma mayesinin səviyyəsinin düşməsi ciddi təhlükələr yaradır. Layihəmiz neft buruğunda baş verən bu mühüm prosesləri real vaxtda izləyən Arduino əsaslı ağıllı səs monitorinq və siqnalizasiya sistemi təklif edir.\n\nƏsas üstünlükləri:\n1. Təhlükəsizliyin artması: Kəskin təzyiq və vibrasiya dəyişmələri dərhal aşkarlanır.\n2. Aşağı xərc: Arduino əsaslı sistem peşəkar sənaye avadanlıqları ilə müqayisədə daha sərfəlidir.\n3. Qəza və avadanlıq sıradan çıxmasının qarşısının alınması: Erkən xəbərdarlıqla maddi itkiləri azaldır.",
      ENG: "During the drilling process in oil rigs, sudden pressure changes, increased vibration levels, abnormal temperatures, and drops in drilling fluid levels pose serious risks. Our project offers an Arduino-based smart sound monitoring and alarm system that tracks these critical processes in real-time.\n\nKey Advantages:\n1. Increased Safety: Sharp pressure and vibration changes are detected immediately.\n2. Low Cost: The Arduino-based system is more cost-effective compared to professional industrial equipment.\n3. Prevention of Accidents and Equipment Failure: Reduces financial losses through early warning.",
      TR: "Petrol kulelerinde sondaj işlemi sırasında ani basınç değişiklikleri, artan titreşim seviyeleri, anormal sıcaklıklar ve sondaj sıvısı seviyesindeki düşüşler ciddi riskler oluşturur. Projemiz, bu kritik süreçleri gerçek zamanlı olarak izleyen Arduino tabanlı akıllı bir ses izleme ve alarm sistemi sunmaktadır.\n\nTemel Avantajlar:\n1. Artırılmış Güvenlik: Keskin basınç ve titreşim değişiklikleri anında tespit edilir.\n2. Düşük Maliyet: Arduino tabanlı sistem, profesyonel endüstriyel ekipmanlara kıyasla daha ekonomiktir.\n3. Kaza ve Ekipman Arızalarının Önlenmesi: Erken uyarı ile maddi kayıpları azaltır.",
      RU: "Во время процесса бурения на нефтяных вышках внезапные изменения давления, повышение уровня вибрации, аномальные температуры и падение уровня бурового раствора создают серьезные риски. Наш проект предлагает умную систему звукового мониторинга и сигнализации на базе Arduino, которая отслеживает эти критические процессы в реальном времени.\n\nОсновные преимущества:\n1. Повышенная безопасность: Резкие изменения давления и вибрации обнаруживаются немедленно.\n2. Низкая стоимость: Система на базе Arduino более экономична по сравнению с профессиональным промышленным оборудованием.\n3. Предотвращение аварий и поломки оборудования: Снижает финансовые потери благодаря раннему предупреждению."
    },
    members: ["Yunusova Sevinc", "Babayeva Aytac"],
    projectLink: "",
    // Fayl yolları: public/images/projects/hse_oil/
    gallery: [
      "/images/projects/hse_oil/gallery1.png",
      "/images/projects/hse_oil/gallery2.png"
    ],
    video: "/images/projects/hse_oil/video.mp4"
  },
  {
    id: 12,
    teamName: {
      AZE: "AKUla",
      ENG: "AKUla",
      TR: "AKUla",
      RU: "AKUla"
    },
    // Fayl yolu: public/images/projects/akula/logo.png
    logo: "/images/projects/akula/logo.png",
    // Fayl yolu: public/images/projects/akula/main.png
    image: "/images/projects/akula/main.png",
    shortDescription: {
      AZE: "Uzaqdan idarə olunan, maneələri aşan və təhlükəli mühitlərdə müşahidə aparmaq üçün nəzərdə tutulmuş Arduino əsaslı robot.",
      ENG: "An Arduino-based remote-controlled robot designed for monitoring hazardous environments and overcoming obstacles.",
      TR: "Tehlikeli ortamlarda gözlem yapmak ve engelleri aşmak için tasarlanmış, uzaktan kumandalı Arduino tabanlı robot.",
      RU: "Робот на базе Arduino с дистанционным управлением, предназначенный для мониторинга опасных сред и преодоления препятствий."
    },
    longDescription: {
      AZE: "Təhlükəli, çətin və ya əlçatan olmayan mühitlərin müşahidəsi, araşdırılması və nəzarəti çox vaxt insan üçün risklidir. Bu hallarda istifadə edilə bilən hazır robot sistemləri isə baha başa gəlir və təhsil məqsədləri üçün əlçatan deyil.\n\nLayihəmiz çərçivəsində Arduino əsaslı, Bluetooth/Wi-Fi ilə məsafədən idarə olunan robot maşın hazırlanmışdır. Sistem real vaxtda hərəkət edir, maneələri aşmağa imkan yaradan sensorlarla təchiz olunur və modulyar quruluşa malikdir.\n\nHazırlanan robot həm təhlükəsiz məsafədən nəzarət və araşdırma imkanı yaradır, həm də tələbələr və araşdırmaçılar üçün sərfəli robototexnika platforması rolunu oynayır. Layihə gələcəkdə kameralar, süni intellekt və avtonom naviqasiya sistemləri ilə təkmilləşdirilərək real sahə tətbiqlərinə uyğunlaşdırıla bilər.",
      ENG: "Monitoring, researching, and controlling hazardous, difficult, or inaccessible environments is often risky for humans. Ready-made robotic systems available for these cases are expensive and not accessible for educational purposes.\n\nWithin our project, an Arduino-based robot car controlled remotely via Bluetooth/Wi-Fi has been developed. The system moves in real-time, is equipped with sensors that allow it to overcome obstacles, and has a modular structure.\n\nThe developed robot provides opportunities for monitoring and research from a safe distance and acts as an affordable robotics platform for students and researchers. The project can be upgraded in the future with cameras, artificial intelligence, and autonomous navigation systems to adapt to real-field applications.",
      TR: "Tehlikeli, zor veya erişilemeyen ortamların izlenmesi, araştırılması ve kontrolü genellikle insanlar için risklidir. Bu durumlarda kullanılabilen hazır robot sistemleri ise pahalıdır ve eğitim amaçlı erişilebilir değildir.\n\nProjemiz kapsamında, Bluetooth/Wi-Fi ile uzaktan kumanda edilen Arduino tabanlı bir robot araba geliştirilmiştir. Sistem gerçek zamanlı hareket eder, engelleri aşmasını sağlayan sensörlerle donatılmıştır ve modüler bir yapıya sahiptir.\n\nGeliştirilen robot, hem güvenli bir mesafeden izleme ve araştırma imkanı sağlar hem de öğrenciler ve araştırmacılar için uygun maliyetli bir robotik platform görevi görür. Proje gelecekte kameralar, yapay zeka ve otonom navigasyon sistemleri ile geliştirilerek gerçek saha uygulamalarına uyarlanabilir.",
      RU: "Мониторинг, исследование и контроль опасных, трудных или недоступных сред часто рискованны для человека. Готовые робототехнические системы, доступные для этих случаев, стоят дорого и недоступны для учебных целей.\n\nВ рамках нашего проекта был разработан робот-автомобиль на базе Arduino с дистанционным управлением через Bluetooth/Wi-Fi. Система движется в реальном времени, оснащена датчиками, позволяющими преодолевать препятствия, и имеет модульную структуру.\n\nРазработанный робот предоставляет возможности для мониторинга и исследований с безопасного расстояния, а также служит доступной робототехнической платформой для студентов и исследователей. В будущем проект может быть модернизирован камерами, искусственным интеллектом и системами автономной навигации для адаптации к реальным полевым применениям."
    },
    members: ["Cəsur Məmmədov"],
    projectLink: "",
    // Fayl yolları: public/images/projects/akula/
    gallery: [
      "/images/projects/akula/gallery1.png",
      "/images/projects/akula/gallery2.png"
    ],
    video: "/images/projects/akula/video.mp4"
  },
  {
    id: 13,
    teamName: {
      AZE: "DRYTECH",
      ENG: "DRYTECH",
      TR: "DRYTECH",
      RU: "DRYTECH"
    },
    // Fayl yolu: public/images/projects/drytech/logo.png
    logo: "/images/projects/drytech/logo.png",
    // Fayl yolu: public/images/projects/drytech/main.png
    image: "/images/projects/drytech/main.png",
    shortDescription: {
      AZE: "Yağış başlayan kimi paltarları islanmaqdan qoruyan, Arduino əsaslı avtomatlaşdırılmış ağıllı asılqan sistemi.",
      ENG: "An Arduino-based automated smart clothesline system that protects clothes from getting wet as soon as rain starts.",
      TR: "Yağmur başlar başlamaz kıyafetleri ıslanmaktan koruyan, Arduino tabanlı otomatik akıllı çamaşır askı sistemi.",
      RU: "Автоматизированная умная система сушки белья на базе Arduino, защищающая одежду от намокания при начале дождя."
    },
    longDescription: {
      AZE: "Ağıllı yağış sensorlu paltar qoruma sistemi açıq havada qurudulan paltarların qəfil yağan yağışdan təsirlənməsinin qarşısını almaq üçün hazırlanmış avtomatlaşdırılmış məişət həllidir. Sistem yağışın ilk damcılarını aşkar edən kimi paltar asılqanını avtomatik olaraq talvarın altına çəkir və paltarların islanmasının qarşısını alır.\n\nLayihə Arduino mikroidarəetici əsasında qurulub və aşağıdakı komponentlərdən istifadə edir:\n- Yağış sensoru: Yağışı aşkar edir və Arduinoya siqnal göndərir.\n- SG90 servo motor: Asılqanı hərəkətə gətirir.\n- Mexaniki rel sistemi: Asılqanın qorunan sahəyə doğru sürüşməsini təmin edir.\n\nBu sistem həm praktiki, həm də sərgi mühitində nümayiş üçün uyğundur. Prototip versiya mexanizmin iş prinsipini nümayiş etdirir və gələcəkdə daha güclü mühərriklər və davamlı konstruksiya ilə real həyət tətbiqlərinə uyğunlaşdırıla bilər. Ağıllı yağış sensorlu paltar qoruma sistemi sadə bir mexanizmdən daha çox, gündəlik həyatda rahatlıq və təhlükəsizlik yaradan innovativ yanaşmadır.",
      ENG: "The smart rain sensor clothes protection system is an automated household solution designed to prevent clothes drying outdoors from being affected by sudden rain. As soon as the system detects the first drops of rain, it automatically pulls the clothesline under a shelter, preventing the clothes from getting wet.\n\nThe project is built on an Arduino microcontroller and uses the following components:\n- Rain sensor: Detects rain and sends a signal to the Arduino.\n- SG90 servo motor: Activates the movement of the clothesline.\n- Mechanical rail system: Ensures the clothesline slides towards the protected area.\n\nThis system is suitable for both practical use and exhibition demonstration. The prototype version demonstrates the working principle of the mechanism and can be adapted for real yard applications with stronger motors and durable construction in the future. The smart rain sensor clothes protection system is more than just a simple mechanism; it is an innovative approach that creates comfort and safety in daily life.",
      TR: "Akıllı yağmur sensörlü kıyafet koruma sistemi, açık havada kurutulan kıyafetlerin ani yağmurdan etkilenmesini önlemek için tasarlanmış otomatik bir ev çözümüdür. Sistem yağmurun ilk damlalarını algılar algılamaz çamaşır askısını otomatik olarak bir saçak altına çeker ve kıyafetlerin ıslanmasını önler.\n\nProje Arduino mikrodenetleyici üzerine kurulmuştur ve aşağıdaki bileşenleri kullanır:\n- Yağmur sensörü: Yağmuru algılar ve Arduino'ya sinyal gönderir.\n- SG90 servo motor: Askının hareketini sağlar.\n- Mekanik ray sistemi: Askının korunan alana doğru kaymasını sağlar.\n\nBu sistem hem pratik kullanım hem de sergi ortamında gösterim için uygundur. Prototip versiyon mekanizmanın çalışma prensibini gösterir ve gelecekte daha güçlü motorlar ve dayanıklı yapı ile gerçek bahçe uygulamalarına uyarlanabilir. Akıllı yağmur sensörlü kıyafet koruma sistemi basit bir mekanizmadan daha fazlasıdır; günlük hayatta rahatlık ve güvenlik yaratan yenilikçi bir yaklaşımdır.",
      RU: "Умная система защиты одежды с датчиком дождя — это автоматизированное бытовое решение, разработанное для предотвращения намокания одежды, сушащейся на открытом воздухе, от внезапного дождя. Как только система обнаруживает первые капли дождя, она автоматически затягивает вешалку под навес, предотвращая намокание одежды.\n\nПроект построен на базе микроконтроллера Arduino и использует следующие компоненты:\n- Датчик дождя: Обнаруживает дождь и отправляет сигнал на Arduino.\n- Сервомотор SG90: Приводит в движение вешалку.\n- Механическая рельсовая система: Обеспечивает скольжение вешалки в защищенную зону.\n\nЭта система подходит как для практического использования, так и для демонстрации на выставке. Прототип демонстрирует принцип работы механизма и в будущем может быть адаптирован для реального применения во дворе с более мощными моторами и прочной конструкцией. Умная система защиты одежды с датчиком дождя — это больше, чем просто механизм; это инновационный подход, создающий комфорт и безопасность в повседневной жизни."
    },
    members: ["Ayxan Bağırlı"],
    projectLink: "",
    // Fayl yolları: public/images/projects/drytech/
    gallery: [
      "/images/projects/drytech/gallery1.png",
      "/images/projects/drytech/gallery2.png"
    ],
    video: "/images/projects/drytech/video.mp4"
  },
  {
    id: 14,
    teamName: {
      AZE: "Purgamentorum",
      ENG: "Purgamentorum",
      TR: "Purgamentorum",
      RU: "Purgamentorum"
    },
    // Fayl yolu: public/images/projects/purgamentorum/logo.png
    logo: "/images/projects/purgamentorum/logo.png",
    // Fayl yolu: public/images/projects/purgamentorum/main.png
    image: "/images/projects/purgamentorum/main.png",
    shortDescription: {
      AZE: "Avtomatik açılıb-bağlanan, Arduino və ultrasəs sensoru ilə təchiz edilmiş ağıllı zibil qutusu.",
      ENG: "An automated smart trash bin equipped with Arduino and an ultrasonic sensor.",
      TR: "Arduino ve ultrasonik sensörle donatılmış otomatik açılıp kapanan akıllı çöp kutusu.",
      RU: "Автоматическая умная мусорная корзина, оснащенная Arduino и ультразвуковым датчиком."
    },
    longDescription: {
      AZE: "Purgamentorum layihəsi gündəlik həyatda gigiyena və rahatlığı təmin etmək üçün hazırlanmış ağıllı zibil qutusu sistemidir. Layihənin əsas xüsusiyyəti onun qapağının insan müdaxiləsi olmadan, avtomatik şəkildə açılıb-bağlanmasıdır.\n\nİş prinsipi aşağıdakı kimidir:\nZibil qutusunun üzərində yerləşdirilən ultrasəs (ultrasonic) sensor daim məsafəni analiz edir. İnsan zibil qutusuna yaxınlaşdıqda sensor siqnalı qəbul edir və Arduino mikrokontrollerinə ötürür. Arduino bu siqnalı emal edərək servo motoru işə salır və qapaq avtomatik açılır. İnsan zibili atıb geri çəkildikən sonra sensor məsafənin artdığını təyin edir və qapaq yenidən bağlanır.\n\nBu layihənin hazırlanmasında Arduino Uno, ultrasəs sensor, servo motor və müxtəlif birləşdirici naqillərdən istifadə olunmuşdur. Komanda şəklində hazırlanan bu layihənin gələcəkdə daha da təkmilləşdirilərək ofislər, məktəblər və korporativ şirkətlər üçün istifadəyə verilməsi planlaşdırılır.",
      ENG: "The Purgamentorum project is a smart trash bin system designed to ensure hygiene and convenience in daily life. The main feature of the project is that its lid opens and closes automatically without human intervention.\n\nThe working principle is as follows:\nAn ultrasonic sensor placed on the trash bin continuously analyzes the distance. When a person approaches the trash bin, the sensor receives the signal and transmits it to the Arduino microcontroller. Arduino processes this signal and activates the servo motor, causing the lid to open automatically. After the person throws the trash and steps back, the sensor detects the increased distance, and the lid closes again.\n\nArduino Uno, ultrasonic sensor, servo motor, and various connecting wires were used in the preparation of this project. Prepared as a team, this project is planned to be further improved in the future for use in offices, schools, and corporate companies.",
      TR: "Purgamentorum projesi, günlük hayatta hijyen ve rahatlığı sağlamak için tasarlanmış akıllı bir çöp kutusu sistemidir. Projenin temel özelliği, kapağının insan müdahalesi olmadan otomatik olarak açılıp kapanmasıdır.\n\nÇalışma prensibi şöyledir:\nÇöp kutusunun üzerine yerleştirilen ultrasonik sensör sürekli mesafeyi analiz eder. Bir kişi çöp kutusuna yaklaştığında sensör sinyali alır ve Arduino mikrodenetleyicisine iletir. Arduino bu sinyali işleyerek servo motoru çalıştırır ve kapak otomatik olarak açılır. Kişi çöpü atıp geri çekildikten sonra sensör mesafenin arttığını tespit eder ve kapak tekrar kapanır.\n\nBu projenin hazırlanmasında Arduino Uno, ultrasonik sensör, servo motor ve çeşitli bağlantı kabloları kullanılmıştır. Bir ekip olarak hazırlanan bu projenin gelecekte daha da geliştirilerek ofisler, okullar ve kurumsal şirketler için kullanıma sunulması planlanmaktadır.",
      RU: "Проект Purgamentorum — это система умной мусорной корзины, разработанная для обеспечения гигиены и удобства в повседневной жизни. Главной особенностью проекта является то, что его крышка открывается и закрывается автоматически без вмешательства человека.\n\nПринцип работы следующий:\nУльтразвуковой датчик, размещенный на мусорной корзине, постоянно анализирует расстояние. Когда человек приближается к мусорной корзине, датчик принимает сигнал и передает его на микроконтроллер Arduino. Arduino обрабатывает этот сигнал и активирует сервомотор, в результате чего крышка открывается автоматически. После того как человек выбрасывает мусор и отходит, датчик фиксирует увеличение расстояния, и крышка снова закрывается.\n\nВ подготовке этого проекта использовались Arduino Uno, ультразвуковой датчик, сервомотор и различные соединительные провода. Этот проект, подготовленный командой, в будущем планируется усовершенствовать для использования в офисах, школах и корпоративных компаниях."
    },
    members: ["Məhəmmədəli Babaşov", "Ülvi Əmirov", "Ələsgərov Musa"],
    projectLink: "",
    // Fayl yolları: public/images/projects/purgamentorum/
    gallery: [
      "/images/projects/purgamentorum/gallery1.png",
      "/images/projects/purgamentorum/gallery2.png"
    ],
    video: "/images/projects/purgamentorum/video.mp4"
  },
  {
    id: 15,
    teamName: {
      AZE: "Zirvə Lab",
      ENG: "Zirvə Lab",
      TR: "Zirvə Lab",
      RU: "Zirvə Lab"
    },
    // Fayl yolu: public/images/projects/zirvelab/logo.png
    logo: "/images/projects/zirvelab/logo.png",
    // Fayl yolu: public/images/projects/zirvelab/main.png
    image: "/images/projects/zirvelab/main.png",
    shortDescription: {
      AZE: "Arduino ilə idarə olunan, hissələrin çapını və prototipləməni təmin edən xüsusi yığılmış 3D printer.",
      ENG: "A custom-built 3D printer controlled by Arduino, enabling part printing and prototyping.",
      TR: "Parça baskısı ve prototipleme sağlayan, Arduino kontrollü özel yapım bir 3D yazıcı.",
      RU: "Собранный на заказ 3D-принтер под управлением Arduino, обеспечивающий печать деталей и прототипирование."
    },
    longDescription: {
      AZE: "Zirvə Lab layihəsi çərçivəsində hazırlanmış bu 3D printer, mühəndislik və proqramlaşdırmanın vəhdətini nümayiş etdirir. Qurğu Arduino Mega və RAMPS şildi üzərində qurulub, bu da onun həm dəqiq idarə olunmasını, həm də gələcəkdə modifikasiya edilə bilməsini təmin edir.\n\nLayihənin əsas məqsədi tələbələrə rəqəmsal modellərin necə fiziki obyektə çevrildiyini, G-kodların necə işlədiyini və addım motorlarının dəqiq idarəetmə prinsiplərini öyrətməkdir. Bu printer vasitəsilə müxtəlif robot detalları, dişli çarxlar və prototiplər çap edilə bilər.",
      ENG: "Within the Zirvə Lab project, this 3D printer demonstrates the unity of engineering and programming. The device is built on Arduino Mega and RAMPS shield, ensuring both precise control and future modifiability.\n\nThe main goal is to teach students how digital models turn into physical objects, how G-codes work, and the precise control principles of stepper motors. Various robot parts, gears, and prototypes can be printed using this printer.",
      TR: "Zirvə Lab projesi kapsamında geliştirilen bu 3D yazıcı, mühendislik ve programlamanın birleşimini sergiliyor. Cihaz, hem hassas kontrol hem de gelecekteki modifikasyonlara olanak tanıyan Arduino Mega ve RAMPS kalkanı üzerine kurulmuştur.\n\nProjenin temel amacı, öğrencilere dijital modellerin fiziksel nesnelere nasıl dönüştüğünü, G-kodlarının nasıl çalıştığını ve step motorların hassas kontrol prensiplerini öğretmektir. Bu yazıcı ile çeşitli robot parçaları, dişliler ve prototipler basılabilir.",
      RU: "Этот 3D-принтер, разработанный в рамках проекта Zirvə Lab, демонстрирует единство инженерии и программирования. Устройство построено на базе Arduino Mega и шилда RAMPS, что обеспечивает как точное управление, так и возможность будущей модификации.\n\nОсновная цель проекта — научить студентов тому, как цифровые модели превращаются в физические объекты, как работают G-коды и принципам точного управления шаговыми двигателями. С помощью этого принтера можно печатать различные детали роботов, шестеренки и прототипы."
    },
    members: ["Əsgər Hacıyev", "Rəsul Qumruzov", "Babayev Fuad"],
    projectLink: "",
    // Fayl yolları: public/images/projects/zirvelab/gallery1.png, gallery2.png
    gallery: [
      "/images/projects/zirvelab/gallery1.png",
      "/images/projects/zirvelab/gallery2.png"
    ],
    // Fayl yolu: public/images/projects/zirvelab/video.mp4
    video: "/images/projects/zirvelab/video.mp4"
  },
  {
    id: 16,
    teamName: {
      AZE: "Dual Tech",
      ENG: "Dual Tech",
      TR: "Dual Tech",
      RU: "Dual Tech"
    },
    // Fayl yolu: public/images/projects/dualtech/logo.png
    logo: "/images/projects/dualtech/logo.png",
    // Fayl yolu: public/images/projects/dualtech/main.png
    image: "/images/projects/dualtech/main.png",
    shortDescription: {
      AZE: "Günəş və külək enerjisinin hibrid sistemi (asfalt panelləri daxil olmaqla).",
      ENG: "A hybrid system combining solar and wind energy, featuring innovative asphalt solar panels.",
      TR: "Güneş ve rüzgar enerjisinin hibrit sistemi (asfalt panelleri dahil).",
      RU: "Гибридная система солнечной и ветровой энергии (включая асфальтовые панели)."
    },
    longDescription: {
      AZE: "Dual Tech layihəsi yenilənə bilən enerjini daha səmərəli toplamaq üçün iki əsas texnologiyanın birləşdirilməsinə əsaslanır. Layihəyə “Dual Tech” adı verilməsinin səbəbi günəş və külək enerjisinin birlikdə işlədiyi hibrid sistem qurulmasıdır. Günəş enerjisi həm normal günəş panelləri, həm də asfalt səthinə yerləşdirilmiş xüsusi panellər vasitəsilə toplanır. Asfalt panelləri yol və açıq səthlərdən əlavə enerji əldə etməyə imkan verir və bu, günəş enerjisinin daha geniş mühitdə istifadəsini təmin edir.\n\nKülək enerjisi isə sistemin ikinci əsas texnologiyasıdır. Külək pərvanələri hava axınından istifadə edərək günəş işığının zəif olduğu vaxtlarda belə enerjinin davamlı istehsalını qoruyur. Beləliklə, iki enerji mənbəyi bir-birini tamamlayır və fasiləsiz enerji axını yaranır.\n\nDual Tech adının məntiqi də məhz bunun üzərində qurulub: “Dual” ikili enerji texnologiyasını, “Tech” isə bu iki mənbənin müasir texnoloji yanaşma ilə vahid sistemdə birləşdirilməsini ifadə edir. Asfalt günəş panelləri sistemi gücləndirsə də layihənin əsas ideyası yenə də günəş və küləyin hibrid işləməsinə dayanır. Bu model həm ekoloji təmizdir, həm də real şəhər şəraitində tətbiq oluna biləcək praktik enerji həllidir. Nəticədə Dual Tech davamlı enerji istehsalını təmin edən, mövcud infrastrukturdan ağıllı istifadə edən və gələcək üçün effektiv enerji konsepsiyası yaradan innovativ layihədir.",
      ENG: "The Dual Tech project is based on combining two key technologies to harvest renewable energy more efficiently. The reason for naming the project “Dual Tech” is the establishment of a hybrid system where solar and wind energy work together. Solar energy is collected through both normal solar panels and special panels placed on the asphalt surface. Asphalt panels allow for additional energy generation from roads and open surfaces, enabling wider use of solar energy.\n\nWind energy is the second key technology of the system. Wind turbines use air flow to maintain continuous energy production even when sunlight is weak. Thus, the two energy sources complement each other, creating an uninterrupted flow of energy.\n\nThe logic of the name Dual Tech is built precisely on this: “Dual” represents dual energy technology, and “Tech” represents the combination of these two sources into a single system with a modern technological approach. Although asphalt solar panels strengthen the system, the main idea of the project still relies on the hybrid operation of sun and wind. This model is both environmentally friendly and a practical energy solution that can be applied in real urban conditions. As a result, Dual Tech is an innovative project that ensures sustainable energy production, uses existing infrastructure intelligently, and creates an effective energy concept for the future.",
      TR: "Dual Tech projesi, yenilenebilir enerjiyi daha verimli toplamak için iki temel teknolojinin birleştirilmesine dayanmaktadır. Projeye “Dual Tech” adının verilmesinin nedeni, güneş ve rüzgar enerjisinin birlikte çalıştığı hibrit bir sistem kurulmasıdır. Güneş enerjisi hem normal güneş panelleri hem de asfalt yüzeyine yerleştirilmiş özel paneller aracılığıyla toplanır. Asfalt panelleri, yol ve açık yüzeylerden ek enerji elde etmeye olanak tanır ve bu, güneş enerjisinin daha geniş bir ortamda kullanımını sağlar.\n\nRüzgar enerjisi ise sistemin ikinci temel teknolojisidir. Rüzgar türbinleri hava akımını kullanarak güneş ışığının zayıf olduğu zamanlarda bile enerjinin sürekli üretimini korur. Böylece iki enerji kaynağı birbirini tamamlar ve kesintisiz enerji akışı oluşur.\n\nDual Tech adının mantığı da tam olarak bunun üzerine kuruludur: “Dual” ikili enerji teknolojisini, “Tech” ise bu iki kaynağın modern teknolojik yaklaşımla tek bir sistemde birleştirilmesini ifade eder. Asfalt güneş panelleri sistemi güçlendirse de projenin ana fikri yine de güneş ve rüzgarın hibrit çalışmasına dayanır. Bu model hem çevre dostudur hem de gerçek şehir koşullarında uygulanabilecek pratik bir enerji çözümüdür. Sonuç olarak Dual Tech, sürdürülebilir enerji üretimini sağlayan, mevcut altyapıyı akıllıca kullanan ve gelecek için etkili bir enerji konsepti oluşturan yenilikçi bir projedir.",
      RU: "Проект Dual Tech основан на объединении двух ключевых технологий для более эффективного сбора возобновляемой энергии. Причина названия проекта «Dual Tech» заключается в создании гибридной системы, в которой солнечная и ветровая энергия работают вместе. Солнечная энергия собирается как с помощью обычных солнечных панелей, так и с помощью специальных панелей, размещенных на асфальтовом покрытии. Асфальтовые панели позволяют получать дополнительную энергию с дорог и открытых поверхностей, обеспечивая более широкое использование солнечной энергии.\n\nВетровая энергия является второй ключевой технологией системы. Ветряные турбины используют воздушный поток для поддержания непрерывного производства энергии даже при слабом солнечном свете. Таким образом, два источники энергии дополняют друг друга, создавая бесперебойный поток энергии.\n\nЛогика названия Dual Tech строится именно на этом: «Dual» означает двойную энергетическую технологию, а «Tech» — объединение этих двух источников в единую систему с современным технологическим подходом. Хотя асфальтовые солнечные панели усиливают систему, основная идея проекта по-прежнему опирается на гибридную работу солнца и ветра. Эта модель является экологически чистой и представляет собой практичное энергетическое решение, которое можно применять в реальных городских условиях. В результате Dual Tech — это инновационный проект, обеспечивающий устойчивое производство энергии, разумно использующий существующую инфраструктуру и создающий эффективную энергетическую концепцию для будущего."
    },
    members: ["Rəvan Əliyev"],
    projectLink: "",
    // Fayl yolları: public/images/projects/dualtech/
    gallery: [
      "/images/projects/dualtech/gallery1.png",
      "/images/projects/dualtech/gallery2.png"
    ],
    video: "/images/projects/dualtech/video.mp4"
  },
  {
    id: 17,
    teamName: {
      AZE: "Flow Control",
      ENG: "Flow Control",
      TR: "Flow Control",
      RU: "Flow Control"
    },
    // Fayl yolu: public/images/projects/aquasense/logo.png
    logo: "/images/projects/aquasense/logo.png",
    // Fayl yolu: public/images/projects/aquasense/main.png
    image: "/images/projects/aquasense/main.png",
    shortDescription: {
      AZE: "Mikrokontroller və metal kontaktlar əsasında hazırlanmış sadə su aşkarlama sistemi.",
      ENG: "A simple water detection system based on a microcontroller and metal contacts.",
      TR: "Mikrodenetleyici ve metal kontaklara dayalı basit bir su algılama sistemi.",
      RU: "Простая система обнаружения воды на основе микроконтроллера и металлических контактов."
    },
    longDescription: {
      AZE: "Aqua Sense layihəsi sadə su sensoru prinsipinə əsaslanır: iki metal kontaktın su ilə birləşməsi. Səthin üzərinə və ya qabın içinə yerləşdirilən iki keçirici metal lövhə və ya tel suya toxunduqda elektrik keçiriciliyi yaranır. Bu keçiricilik mikrovezrə tərəfindən siqnal kimi qəbul olunur. Sensor quru vəziyyətdə siqnal vermir, su ilə təmasda isə əlaqə yaranır və cihaz suyun olduğunu bildirir.\n\nBu tip sadə sensorun hazırlanması üçün yalnız iki metal kontakt, bir rezistor və mikrovezrə kifayət edir. Kontaktlar suya yerləşdirilir, bir ucu enerji mənbəyinə, digər ucu isə oxuma pininə qoşulur. Su olduqda dövrə bağlanır və mikrovezrə onu aşkarlayır. Son mərhələdə siqnala uyğun xəbərdarlıq — LED yandırılması, buzzer ötürülməsi və ya məlumatın ekrana çıxarılması təmin edilir.",
      ENG: "The Aqua Sense project is based on the principle of a simple water sensor: two metal contacts connecting via water. When two conductive metal plates or wires placed on a surface or in a container touch water, electrical conductivity is created. This conductivity is received as a signal by the microcontroller. The sensor gives no signal when dry, but when in contact with water, a connection is formed, and the device indicates the presence of water.\n\nOnly two metal contacts, a resistor, and a microcontroller are sufficient to create this type of simple sensor. The contacts are placed in water; one end is connected to the power source, and the other to the reading pin. When water is present, the circuit closes, and the microcontroller detects it. Finally, a warning corresponding to the signal—turning on an LED, sounding a buzzer, or displaying data on a screen—is provided.",
      TR: "Aqua Sense projesi, basit bir su sensörü prensibine dayanır: iki metal kontağın su ile birleşmesi. Bir yüzeye veya kabın içine yerleştirilen iki iletken metal plaka veya tel suya dokunduğunda elektriksel iletkenlik oluşur. Bu iletkenlik mikrodenetleyici tarafından bir sinyal olarak algılanır. Sensör kuru durumda sinyal vermez, su ile temas ettiğinde ise bağlantı oluşur ve cihaz suyun varlığını bildirir.\n\nBu tür basit bir sensörün hazırlanması için sadece iki metal kontak, bir direnç ve bir mikrodenetleyici yeterlidir. Kontaklar suya yerleştirilir, bir ucu güç kaynağına, diğer ucu ise okuma pinine bağlanır. Su olduğunda devre kapanır ve mikrodenetleyici bunu algılar. Son aşamada sinyale uygun uyarı — LED yakılması, buzzer sesi veya verinin ekrana yansıtılması sağlanır.",
      RU: "Проект Aqua Sense основан на принципе простого датчика воды: соединение двух металлических контактов через воду. Когда две токопроводящие металлические пластины или проволоки, помещенные на поверхность или в емкость, касаются воды, возникает электрическая проводимость. Эта проводимость воспринимается микроконтроллером как сигнал. В сухом состоянии датчик не подает сигнал, а при контакте с водой образуется связь, и устройство сообщает о наличии воды.\n\nДля создания такого простого датчика достаточно всего двух металлических контактов, резистора и микроконтроллера. Контакты помещаются в воду: один конец подключается к источнику питания, а другой — к считывающему пину. При наличии воды цепь замыкается, и микроконтроллер обнаруживает это. На последнем этапе обеспечивается предупреждение, соответствующее сигналу — включение светодиода, звуковой сигнал зуммера или вывод информации на экран."
    },
    members: ["Nurlan Məmmədov", "Elcan Əhədov"],
    projectLink: "",
    // Fayl yolları: public/images/projects/aquasense/
    gallery: [
      "/images/projects/aquasense/gallery1.png",
      "/images/projects/aquasense/gallery2.png"
    ],
    video: "/images/projects/aquasense/video.mp4"
  },
  {
    id: 18,
    teamName: {
      AZE: "Az Drip",
      ENG: "Az Drip",
      TR: "Az Drip",
      RU: "Az Drip"
    },
    // Fayl yolu: public/images/projects/azdrip/logo.png
    logo: "/images/projects/azdrip/logo.png",
    // Fayl yolu: public/images/projects/azdrip/main.png
    image: "/images/projects/azdrip/main.png",
    shortDescription: {
      AZE: "Arduino əsaslı avtomatlaşdırılmış torpaq rütubəti və suvarma nəzarət sistemi.",
      ENG: "An Arduino-based automated soil moisture and irrigation control system.",
      TR: "Arduino tabanlı otomatik toprak nemi ve sulama kontrol sistemi.",
      RU: "Автоматизированная система контроля влажности почвы и орошения на базе Arduino."
    },
    longDescription: {
      AZE: "Bu layihədə torpaq rütubətinin avtomatik ölçülməsi və suvarma prosesinin idarə olunması üçün Arduino əsaslı ağıllı nəmlik nəzarət sistemi hazırlanmışdır. Sistem kənd təsərrüfatında su ehtiyatlarının səmərəli istifadəsini təmin etmək, bitkilərin kök zonasına dəqiq su çatdırmaq və insan müdaxiləsini minimuma endirmək məqsədi daşıyır.\n\nLayihənin əsas elementləri torpaq nəm sensoru, saatda 240 L su ötürmə gücünə malik kiçik su nasosu, mini sprinkler, üç ədəd damladıcı və ağac kökünün birbaşa sulanması üçün nəzərdə tutulmuş damlama borusundan ibarətdir. Torpaq nəm sensoru real vaxt rejimində torpağın rütubət göstəricisini oxuyur və məlumatı Arduino mikrokontrollerinə ötürür. Arduino müəyyən olunmuş hədd dəyərinə əsasən suvarmanı avtomatik işə salır və torpaq kifayət qədər nəmləndikdən sonra prosesi dayandırır.",
      ENG: "In this project, an Arduino-based smart moisture control system has been developed for the automatic measurement of soil moisture and the management of the irrigation process. The system aims to ensure the efficient use of water resources in agriculture, deliver precise water to the root zone of plants, and minimize human intervention. The main elements of the project consist of a soil moisture sensor, a small water pump with a capacity of 240 L/h, a mini sprinkler, three drippers, and a drip pipe designed for direct watering of tree roots. The soil moisture sensor reads the soil moisture indicator in real-time and transmits the information to the Arduino microcontroller. Arduino automatically starts irrigation based on the determined threshold value and stops the process after the soil is sufficiently moistened.",
      TR: "Bu projede, toprak neminin otomatik ölçümü ve sulama sürecinin yönetimi için Arduino tabanlı akıllı bir nem kontrol sistemi geliştirilmiştir. Sistem, tarımda su kaynaklarının verimli kullanılmasını sağlamayı, bitkilerin kök bölgesine hassas su ulaştırmayı ve insan müdahalesini en aza indirmeyi amaçlamaktadır. Projenin ana unsurları, bir toprak nem sensörü, saatte 240 L su basma kapasitesine sahip küçük bir su pompası, bir mini sprinkler, üç damlatıcı ve ağaç köklerinin doğrudan sulanması için tasarlanmış bir damlama borusundan oluşmaktadır. Toprak nem sensörü, toprak nem göstergesini gerçek zamanlı olarak okur ve bilgiyi Arduino mikrodenetleyicisine iletir. Arduino, belirlenen eşik değerine göre sulamayı otomatik olarak başlatır ve toprak yeterince nemlendikten sonra süreci durdurur.",
      RU: "В этом проекте разработана умная система контроля влажности на базе Arduino для автоматического измерения влажности почвы и управления процессом орошения. Система направлена на обеспечение эффективного использования водных ресурсов в сельском хозяйстве, точную подачу воды в корневую зону растений и минимизацию вмешательства человека. Основными элементами проекта являются датчик влажности почвы, небольшой водяной насос производительностью 240 л/ч, мини-спринклер, три капельницы и капельная трубка, предназначенная для непосредственного полива корней деревьев. Датчик влажности почвы считывает показатель влажности почвы в режиме реального времени и передает информацию на микроконтроллер Arduino. Arduino автоматически запускает орошение на основе определенного порогового значения и останавливает процесс после того, как почва будет достаточно увлажнена."
    },
    members: ["Rüstəmov Namiq"],
    projectLink: "",
    // Fayl yolları: public/images/projects/azdrip/
    gallery: [
      "/images/projects/azdrip/gallery1.png",
      "/images/projects/azdrip/gallery2.png"
    ],
    video: "/images/projects/azdrip/video.mp4"
  },
  {
    id: 19,
    teamName: {
      AZE: "TriBotX",
      ENG: "TriBotX",
      TR: "TriBotX",
      RU: "TriBotX"
    },
    // Fayl yolu: public/images/projects/tribotx/logo.png
    logo: "/images/projects/tribotx/logo.png",
    // Fayl yolu: public/images/projects/tribotx/main.png
    image: "/images/projects/tribotx/main.png",
    shortDescription: {
      AZE: "Nəqliyyat və sənaye sahələrində istifadə üçün nəzərdə tutulmuş ağıllı xətt izləyən robot.",
      ENG: "A smart line-following robot designed for transport and industrial safety applications.",
      TR: "Ulaşım ve endüstriyel güvenlik uygulamaları için tasarlanmış akıllı çizgi izleyen robot.",
      RU: "Умный робот, следующий по линии, разработанный для транспорта и промышленной безопасности."
    },
    longDescription: {
      AZE: "“Ağıllı Xətt İzləmə Robotu: Gələcəyin Nəqliyyat Həlləri” layihəsi iki əsas istiqamətdə həllər təklif edir:\n\n1. Nəqliyyat İnfırastrukturunun İntellektuallaşması:\nYüksək dəqiqlikli xətt üzərində hərəkət edən robotlar, şəhər nəqliyyatı sistemlərinin bir hissəsi olaraq inkişaf etdirilə bilər. Məsələn, gələcəkdə bu cür robotlar ticarət mərkəzlərində və ya böyük hava limanlarında, sərnişinləri və ya yükü müəyyən bir istiqamətə yönəltmək üçün istifadə oluna bilər. Xətt üzərində avtomatik olaraq hərəkət edən bu robotlar, nəqliyyatın daha sürətli və daha etibarlı olmasını təmin edəcək.\n\n2. Təhlükəsizlik və İzlenebilirlik:\nXətt üzərində hərəkət edən robotlar, xüsusi mühitlərdə təhlükəsizlik məqsədilə istifadə oluna bilər. Məsələn, mədən işlərində və ya digər yüksək riskli sənaye sahələrində, robotlar insanların yerinə təhlükəli sahələrdə çalışaraq insana zərər vermədən işləri yerinə yetirə bilər. Bu, təhlükəsizlik tədbirlərini artıracaq və işçi həyatını qorumağa kömək edəcək.",
      ENG: "The “Smart Line Follower Robot: Future Transport Solutions” project offers solutions in two main directions:\n\n1. Intelligent Transport Infrastructure:\nRobots moving on high-precision lines can be developed as part of urban transport systems. For example, in the future, such robots can be used in shopping centers or large airports to direct passengers or cargo to a specific destination. These robots, moving automatically on the line, will ensure faster and more reliable transport.\n\n2. Safety and Traceability:\nRobots moving on the line can be used for safety purposes in special environments. For example, in mining operations or other high-risk industrial areas, robots can work in dangerous areas instead of humans, performing tasks without harming people. This will increase safety measures and help protect workers' lives.",
      TR: "“Akıllı Çizgi İzleyen Robot: Geleceğin Ulaşım Çözümleri” projesi iki ana yönde çözümler sunmaktadır:\n\n1. Ulaşım Altyapısının Akıllanması:\nYüksek hassasiyetli hat üzerinde hareket eden robotlar, şehir ulaşım sistemlerinin bir parçası olarak geliştirilebilir. Örneğin gelecekte bu tür robotlar, alışveriş merkezlerinde veya büyük havaalanlarında yolcuları veya yükleri belirli bir yöne yönlendirmek için kullanılabilir. Hat üzerinde otomatik olarak hareket eden bu robotlar, ulaşımın daha hızlı ve daha güvenilir olmasını sağlayacaktır.\n\n2. Güvenlik ve İzlenebilirlik:\nHat üzerinde hareket eden robotlar, özel ortamlarda güvenlik amacıyla kullanılabilir. Örneğin madencilik işlerinde veya diğer yüksek riskli sanayi alanlarında, robotlar insanların yerine tehlikeli alanlarda çalışarak insana zarar vermeden işleri yerine getirebilir. Bu, güvenlik önlemlerini artıracak ve işçi hayatını korumaya yardımcı olacaktır.",
      RU: "Проект «Умный робот, следующий по линии: Транспортные решения будущего» предлагает решения по двум основным направлениям:\n\n1. Интеллектуализация транспортной инфраструктуры:\nРоботы, движущиеся по высокоточной линии, могут быть разработаны как часть городских транспортных систем. Например, в будущем такие роботы могут использоваться в торговых центрах или крупных аэропортах для направления пассажиров или грузов в определенном направлении. Эти роботы, автоматически движущиеся по линии, обеспечат более быстрый и надежный транспорт.\n\n2. Безопасность и отслеживаемость:\nРоботы, движущиеся по линии, могут использоваться в целях безопасности в особых условиях. Например, при горных работах или в других промышленных зонах с высоким риском роботы могут работать в опасных зонах вместо людей, выполняя задачи без вреда для человека. Это усилит меры безопасности и поможет защитить жизни рабочих."
    },
    members: ["Kənan Məmmədov", "Ramiz Kərimov", "Sadiq Kərimov"],
    projectLink: "",
    // Fayl yolları: public/images/projects/tribotx/
    gallery: [
      "/images/projects/tribotx/gallery1.png",
      "/images/projects/tribotx/gallery2.png"
    ],
    video: "/images/projects/tribotx/video.mp4"
  },
  {
    id: 20,
    teamName: {
      AZE: "MechaKran",
      ENG: "MechaKran",
      TR: "MechaKran",
      RU: "MechaKran"
    },
    // Fayl yolu: public/images/projects/mechakran/logo.png
    logo: "/images/projects/mechakran/logo.png",
    // Fayl yolu: public/images/projects/mechakran/main.png
    image: "/images/projects/mechakran/main.png",
    shortDescription: {
      AZE: "Su təzyiqi (hidravlika) ilə idarə olunan, ekskavator funksiyasını yerinə yetirən mexaniki qol prototipi.",
      ENG: "A mechanical arm model demonstrating the working principle of hydraulic systems used in heavy industrial machinery, operated by water pressure.",
      TR: "Ağır sanayi makinelerinde kullanılan hidrolik sistemlerin çalışma prensibini gösteren, su basıncı ile çalışan mekanik kol modeli.",
      RU: "Модель механической руки, демонстрирующая принцип работы гидравлических систем тяжелой техники, управляемая давлением воды."
    },
    longDescription: {
      AZE: "“MechaKran” layihəsi, ağır sənaye texnikalarında istifadə olunan hidravlik sistemlərin iş prinsipini nümayiş etdirən mexaniki qol modelidir. Layihə ekskavator qolu funksiyasını daşıyır və tamamilə su təzyiqi (hidravlika) ilə idarə olunur.\n\nİş prinsipi Paskal qanununa əsaslanır. Şprislər və su boruları vasitəsilə yaradılan təzyiq, mexaniki oynaqları hərəkətə gətirərək qolun qalxmasını, enməsini və tutmasını təmin edir.\n\nBu sadəcə bir prototipdir, lakin mühəndislik və fizika qanunlarının əyani sübutudur. Gələcəkdə layihənin elektronika və motorlarla inteqrasiya edilərək tam avtomatlaşdırılması planlaşdırılır.",
      ENG: "The “MechaKran” project is a mechanical arm model demonstrating the working principle of hydraulic systems used in heavy industrial machinery. The project functions as an excavator arm and is controlled entirely by water pressure (hydraulics).\n\nThe working principle is based on Pascal's law. Pressure created through syringes and water tubes moves mechanical joints, allowing the arm to lift, lower, and grip.\n\nThis is just a prototype, but it is a tangible proof of engineering and physics laws. In the future, the project is planned to be fully automated by integrating electronics and motors.",
      TR: "“MechaKran” projesi, ağır sanayi makinelerinde kullanılan hidrolik sistemlerin çalışma prensibini gösteren mekanik bir kol modelidir. Proje, ekskavatör kolu işlevi görür ve tamamen su basıncı (hidrolik) ile kontrol edilir.\n\nÇalışma prensibi Pascal yasasına dayanmaktadır. Şırıngalar ve su boruları aracılığıyla oluşturulan basınç, mekanik eklemleri hareket ettirerek kolun kalkmasını, inmesini ve kavramasını sağlar.\n\nBu sadece bir prototiptir, ancak mühendislik ve fizik yasalarının somut bir kanıtıdır. Gelecekte projenin elektronik ve motorlarla entegre edilerek tam otomatik hale getirilmesi planlanmaktadır.",
      RU: "Проект «MechaKran» — это модель механической руки, демонстрирующая принцип работы гидравлических систем, используемых в тяжелой промышленной технике. Проект выполняет функцию руки экскаватора и полностью управляется давлением воды (гидравликой).\n\nПринцип работы основан на законе Паскаля. Давление, создаваемое с помощью шприцев и водяных трубок, приводит в движение механические суставы, позволяя руке подниматься, опускаться и захватывать.\n\nЭто всего лишь прототип, но он является наглядным доказательством законов инженерии и физики. В будущем планируется полная автоматизация проекта за счет интеграции электроники и моторов."
    },
    members: ["Ayxan Xəlilov"],
    projectLink: "",
    // Fayl yolları: public/images/projects/mechakran/
    gallery: [
      "/images/projects/mechakran/gallery1.png",
      "/images/projects/mechakran/gallery2.png"
    ],
    video: "/images/projects/mechakran/video.mp4"
  }
];

export const INITIAL_MENTORS: Mentor[] = [
  // Üst sıra - 2 kişi
  {
    id: 5,
    name: "Xanoğlan Hüseynev",
    role: {
      AZE: "Mühasibat və Kompüter Mühəndisliyi Fakultəsinin dekanı./ İqtisad elmlər namizədi, dosent",
      ENG: "Organizer / PhD in Economics, Associate Professor",
      TR: "Organizatör / İktisat Bilimleri Adayı, Doçent",
      RU: "Организатор / Кандидат экономических наук, доцент"
    },
    // Fayl yolu: public/images/mentors/xanoglan.png
    image: "/images/mentors/xanoglan.png",
    social: {}
  },
  {
    id: 1,
    name: "Zümrüd Nəsibova",
    role: {
      AZE: "Mühasibat və Kompüter Mühəndisliyi Fakultəsinin Tyutoru / Təşkilatçı",
      ENG: "Organizer / Tutor",
      TR: "Organizatör / Eğitmen",
      RU: "Организатор / Тьютор"
    },
    // Fayl yolu: public/images/mentors/zumrud.png
    image: "/images/mentors/zumrud.png",
    social: {}
  },
  // Alt sıra - 3 kişi
  {
    id: 2,
    name: "Gülsüm Bədirzadə",
    role: {
      AZE: "İnformasiya vә Kompüter Mühәndisliyi Kafedrasının Müdüri / iqtisad üzrə fəlsəfə doktoru, dosent",
      ENG: "Organizer / PhD in Economics, Associate Professor",
      TR: "Organizatör / Ekonomi Doktoru, Doçent",
      RU: "Организатор / Доктор философии по экономике, доцент"
    },
    // Fayl yolu: public/images/mentors/gulsum.png
    image: "/images/mentors/gulsum.png",
    social: {}
  },
  {
    id: 3,
    name: "Yusif Şıxəliyev",
    role: {
      AZE: "Texniki işlər üzrə mütəxəssis / Mentor",
      ENG: "Technical staff / Mentor",
      TR: "Teknik personel / Mentor",
      RU: "Технический персонал / Ментор"
    },
    // Fayl yolu: public/images/mentors/yusif.png
    image: "/images/mentors/yusif.png",
    social: {
      instagram: "https://www.instagram.com/yusif_shikhaliyev/",
      facebook: "https://www.facebook.com/shikhaliyevyusif",
      linkedin: "https://www.linkedin.com/in/yusif-shikhaliyev/",
      x: "https://x.com/y_shikhaliyev"
    }
  },
  {
    id: 6,
    name: "Nərgiz Mikayılova",
    role: {
      AZE: "İnformasiya vә Kompüter Mühәndisliyi Kafedrasının Müəllimi/ Mentor",
      ENG: "Mentor",
      TR: "Mentor",
      RU: "Ментор"
    },
    // Fayl yolu: public/images/mentors/nargiz.png
    image: "/images/mentors/nargiz.png",
    social: {}
  },

  
];

// --- New Gallery Data ---

export const INITIAL_GALLERY: string[] = Array.from({ length: 25 }, (_, i) => `/images/gallery/img${i + 1}.png`);

export const INITIAL_VIDEOS: string[] = [
  "/images/gallery/vid1.mp4",
  "/images/gallery/vid2.mp4",
  "/images/gallery/vid3.mp4"
];
