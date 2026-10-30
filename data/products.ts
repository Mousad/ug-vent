/* ───────────────────────────────────────────────
   UG Vent – بيانات المنتجات (مبنية على كتالوج BVN 2022)
   الهيكل:  قسم (صناعي / تجاري)  ←  فئة فرعية  ←  منتجات
   الصور:   public/products/<اسم-الموديل>.jpg   (مثال: alc.jpg)
            public/categories/<slug>.jpg        (صورة كل فئة)
   ─────────────────────────────────────────────── */

export type GroupId = 'industrial' | 'commercial'

export type Product = {
  model: string
  desc: string      // الوصف كما في الكتالوج
  flow?: string     // مدى التدفق أو القدرة
  extra?: string    // معلومة إضافية (درجة حرارة، فئة حريق...)
  page: number      // رقم الصفحة في الكتالوج
  image: string     // مسار الصورة داخل public
}

export type Category = {
  slug: string
  group: GroupId
  title: string
  en: string
  description: string
  icon: string
  image: string
  applications: string[]
  features: string[]
  products: Product[]
}

export type Group = {
  id: GroupId
  title: string
  en: string
  description: string
}

export const groups: Group[] = [
  {
    id: 'industrial',
    title: 'صناعي',
    en: 'Industrial',
    description: 'مراوح طاردة مركزية ومحورية ومقاومة للانفجار ومراوح سحب الدخان والملاجئ للمصانع والمنشآت الكبيرة.',
  },
  {
    id: 'commercial',
    title: 'تجاري',
    en: 'Commercial',
    description: 'مراوح مجاري الهواء والأسطح والمطابخ ووحدات التهوية واسترجاع الحرارة والمراوح المنزلية.',
  },
]

/* اسم ملف الصورة من اسم الموديل: "BPS-B 140-60" → bps-b-140-60 */
export const imageSlug = (model: string) =>
  model
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const P = (
  model: string,
  desc: string,
  flow: string | undefined,
  page: number,
  extra?: string
): Product => ({
  model,
  desc,
  flow,
  extra,
  page,
  image: `/products/${imageSlug(model)}.jpg`,
})

const cat = (slug: string) => `/categories/${slug}.jpg`

export const categories: Category[] = [
  /* ═══════════════ صناعي ═══════════════ */
  {
    slug: 'radial-fans',
    group: 'industrial',
    title: 'المراوح الطاردة المركزية',
    en: 'Radial Fans',
    description: 'مراوح طرد مركزي بمدى واسع من الضغط والتدفق، من النفخات الصغيرة حتى المراوح الصناعية الكبيرة.',
    icon: 'circle',
    image: cat('radial-fans'),
    applications: ['مصانع', 'مخازن', 'ورش دهانات'],
    features: ['خلفية وأمامية الانحناء وريش شعاعية', 'مدى تدفق من 80 إلى 400,000 م³/س', 'مواد متعددة: صاج، ألمنيوم، بلاستيك'],
    products: [
      P('ALÇ', 'Industrial Radial Fans (Low Pressure) – Backward Curved', '1800–10000 m³/h', 398),
      P('BPF', 'Industrial Radial Fans (Plug) – Backward Curved', '2000–25000 m³/h', 400),
      P('BGSS', 'Industrial Radial Fans – Backward Curved', '2500–40000 m³/h', 403),
      P('ALRX', 'Industrial Radial Fans – Backward Curved', '1500–10000 m³/h', 407),
      P('ALR', 'Industrial Radial Fans – Forward Curved', '2000–14000 m³/h', 410),
      P('ORB', 'Medium Pressure Industrial Fans – Radial Blade', '950–4000 m³/h', 413),
      P('YB', 'High Pressure Industrial Fans – Radial Blade', '350–6500 m³/h', 416),
      P('BDS', 'Industrial Radial Fans – Aluminum Housing', '800–8400 m³/h', 419),
      P('BDRAS', 'Centrifugal Blowers – Aluminum Housing', '90–600 m³/h', 422),
      P('BDRS', 'Centrifugal Blowers – Sheet Metal Housing', '250–600 m³/h', 425),
      P('AORB', 'Centrifugal Blowers – Sheet Metal Housing', '1200 m³/h', 427),
      P('BPS 140-60', 'Centrifugal Blowers – Plastic Housing', '500 m³/h', 428),
      P('BPS-B 140-60', 'Centrifugal Blower – Plastic Housing', '500 m³/h', 429),
      P('BPS-B 150-100', 'Double Inlet Centrifugal Blower – Plastic Housing', '720 m³/h', 430),
      P('OBR 140', 'Sheet Metal Housing – Single Inlet', '500–1100 m³/h', 431),
      P('OBR 200', 'Sheet Metal Housing – Single Inlet', '850–1800 m³/h', 432),
      P('OBR 260', 'Sheet Metal Housing – Single Inlet', '1450–2700 m³/h', 434),
      P('KMS/KTS', 'Sheet Metal Housing – Single Inlet', '1500 m³/h', 435),
      P('BFC', 'Fancoil Fans – Forward Curved', '750–1100 m³/h', 436),
      P('BRV', 'Double Inlet Radial Fans – Belt Drive, Forward Curved', '2000–20000 m³/h', 438),
      P('BDD', 'Double Inlet Fans – Direct Drive, Forward Curved', '1800–5180 m³/h', 441),
      P('BSF', 'Double Inlet Radial Fans – Backward Curved, Welded', '2000–400000 m³/h', 443),
      P('OÇES', 'Centrifugal Blowers – Double Inlet', '2200 m³/h', 446),
      P('ÇES', 'Centrifugal Blowers – Double Inlet', '1300 m³/h', 447),
      P('BDRKF', 'Backward Curved Fans', '346–11000 m³/h', 448),
      P('BASSF', 'Forward Curved Fans', '80–4000 m³/h', 454),
    ],
  },
  {
    slug: 'axial-fans',
    group: 'industrial',
    title: 'المراوح المحورية',
    en: 'Axial Fans',
    description: 'مراوح محورية بتدفق عالٍ للتبريد والتهوية العامة وضغط الهواء، حائطية وأنبوبية وسقفية.',
    icon: 'fan',
    image: cat('axial-fans'),
    applications: ['مصانع', 'ورش', 'مواقف سيارات'],
    features: ['مدى تدفق حتى 155,000 م³/س', 'تركيب حائطي أو أنبوبي', 'ريش مركّبة بتصميم Airfoil'],
    products: [
      P('SF', 'Cooling Fans', '1800–27500 m³/h', 290),
      P('BDRAX', 'Axial Fans', '407–3110 m³/h', 303),
      P('BDRAX-K', 'Axial Fans', '407–3110 m³/h', 306),
      P('BTFM', 'Tube Fans', '3500–115000 m³/h', 309),
      P('BTFM-EX', 'Tube Fans', '3500–115000 m³/h', 314),
      P('ARMO-A', 'Pressurization Fans – Tube Axial', '1000–155000 m³/h', 318),
      P('ARMO-C', 'Pressurization Fans – Cabinet', '1000–155000 m³/h', 339),
      P('ARMO-R', 'Pressurization Fans – Vertical Roof Type', '1000–155000 m³/h', 360),
      P('B6PA', 'Wall Mounted Industrial Axial Fans – Composite Airfoil Blade', '1500–8500 m³/h', 381),
      P('B5PA', 'Wall Mounted Industrial Axial Fans – Composite Airfoil Blade', '8500–38000 m³/h', 383),
      P('BSM-BST', 'Industrial Axial Fans', '2200–8000 m³/h', 385),
      P('BSMS-BSTS', 'Industrial Axial Fans', '2200–8000 m³/h', 388),
      P('BSV', 'Industrial Ventilators', '7000–17400 m³/h', 391),
      P('BB', 'Axial Fans', '450–1150 m³/h', 392),
      P('BK', 'Axial Fans / Lid Option', '450–1150 m³/h', 393),
    ],
  },
  {
    slug: 'exproof-fans',
    group: 'industrial',
    title: 'مراوح مقاومة للانفجار',
    en: 'Explosion-proof Fans',
    description: 'مراوح مصممة للبيئات الخطرة التي قد تحتوي غازات أو أبخرة قابلة للاشتعال.',
    icon: 'shield',
    image: cat('exproof-fans'),
    applications: ['مصانع كيماوية', 'مخازن وقود', 'ورش دهانات'],
    features: ['محركات مقاومة للانفجار', 'خيارات محورية ومستطيلة وسقفية', 'للمناطق الخطرة'],
    products: [
      P('BDKF-R EX', 'Rectangular Duct Fans – Backward Curved', '2000–10500 m³/h', 186),
      P('BRCF-EX', 'Horizontal Outlet Roof Fans – Backward Curved', '1000–17000 m³/h', 188),
      P('BTFM-EX', 'Axial Exproof Fans', '3500–115000 m³/h', 192),
    ],
  },
  {
    slug: 'smoke-extract-fans',
    group: 'industrial',
    title: 'مراوح سحب الدخان',
    en: 'Smoke & Heat Exhaust Fans',
    description: 'مراوح سحب الدخان والحرارة ومراوح الجت للجراجات والأنفاق، بمقاومة حريق F300 وF400.',
    icon: 'wind',
    image: cat('smoke-extract-fans'),
    applications: ['جراجات', 'أنفاق', 'مولات ومباني صناعية'],
    features: ['مقاومة حريق F300-2h / F400-2h', 'مراوح جت 25–70 N', 'أنواع أنبوبية وكابينة وسقفية'],
    products: [
      P('ARMO-JP', 'Axial Jet Fans', '25–70 N thrust', 212, 'F300-2h / F400-2h'),
      P('ARMO-JR', 'Jet Fans – Backward Curved', '48 N thrust', 213, 'F300-2h / F400-2h'),
      P('ARMO-A', 'Smoke and Heat Exhaust Fans – Tube Axial', '1000–155000 m³/h', 214, 'F300-2h / F400-2h'),
      P('ARMO-C', 'Smoke and Heat Exhaust Fans – Cabinet', '1000–155000 m³/h', 236, 'F300-2h / F400-2h'),
      P('ARMO-R', 'Smoke and Heat Exhaust Fans – Roof', '1000–155000 m³/h', 257, 'F300-2h / F400-2h'),
    ],
  },
  {
    slug: 'shelter-fans',
    group: 'industrial',
    title: 'مراوح الملاجئ',
    en: 'Shelter Fans',
    description: 'وحدات تهوية وتنقية هواء للملاجئ والمنشآت الحساسة.',
    icon: 'box',
    image: cat('shelter-fans'),
    applications: ['ملاجئ', 'منشآت حساسة'],
    features: ['وحدات مجاري هواء وكابينة', 'خيار فلترة', 'تدفق من 400 إلى 8000 م³/س'],
    products: [
      P('BSH', 'Duct Type Shelter Fans', '400–4500 m³/h', 130),
      P('BSH-R', 'Cabinet Shelter Fans', undefined, 133),
      P('BSH-C', 'Filtered Duct Fans', '2000–8000 m³/h', 134),
    ],
  },

  /* ═══════════════ تجاري ═══════════════ */
  {
    slug: 'duct-fans',
    group: 'commercial',
    title: 'مراوح مجاري الهواء',
    en: 'Duct Fans',
    description: 'مراوح دائرية ومستطيلة للتهوية المركزية ومجاري الهواء في المباني التجارية.',
    icon: 'duct',
    image: cat('duct-fans'),
    applications: ['مبانٍ تجارية', 'مطاعم', 'فنادق'],
    features: ['تركيب داخل المجرى', 'نسخ مقاومة 120°C', 'دائرية ومستطيلة ومربعة'],
    products: [
      P('BDTX', 'Centrifugal In Line Duct Fans – Backward Curved', '240–2640 m³/h', 44),
      P('BDTX-EC', 'Centrifugal In Line Duct Fans – Backward Curved', '350–2200 m³/h', 47),
      P('BMFX', 'In Line Duct Fans – Mixed Flow', '165–2000 m³/h', 50),
      P('BPX', 'In Line Duct Fans – Plastic Housing', '410 m³/h', 54),
      P('BORAX', 'Axial In Line Duct Fan', '680–3110 m³/h', 55),
      P('BFTX', 'Round Wall Mounted Fans – Backward Curved', '240–1750 m³/h', 57),
      P('BDKF', 'Rectangular In Line Duct Fans – Backward Curved', '450–9600 m³/h', 60),
      P('BDKF-EC', 'Rectangular In Line Duct Fans – Backward Curved', '650–8500 m³/h', 64),
      P('BKKF', 'Square Duct Fans – Backward Curved', '4200–9800 m³/h', 67),
      P('BSKF', 'Rectangular In Line Duct Fans – Forward Curved', '990–4250 m³/h', 69),
      P('BDKF-R', 'Direct Drive Rectangular In-Line Duct Fans – Backward Curved', '2000–10500 m³/h', 71, '120°C'),
      P('BSKF-R', 'Direct Drive Rectangular In-Line Duct Fans – Forward Curved', '1000–10500 m³/h', 73, '120°C'),
      P('BDKF-R EX', 'Direct Drive Rectangular In-Line Duct Fans – Backward Curved', '2000–10500 m³/h', 76),
    ],
  },
  {
    slug: 'roof-fans',
    group: 'commercial',
    title: 'مراوح الأسطح',
    en: 'Roof Fans',
    description: 'مراوح أسطح بمخرج أفقي أو رأسي، طرد مركزي أو محوري، للمباني والمصانع.',
    icon: 'roof',
    image: cat('roof-fans'),
    applications: ['مصانع', 'مستشفيات', 'مبانٍ تجارية'],
    features: ['مخرج أفقي أو رأسي', 'نسخ مقاومة 120°C', 'ضوضاء منخفضة وصيانة أقل'],
    products: [
      P('BRF', 'Centrifugal Roof Fans – Horizontal Outlet', '346–9600 m³/h', 140),
      P('BRCF-M', 'Direct Drive Roof Fans – Horizontal Outlet', '1800 m³/h', 143, '120°C'),
      P('BRCF', 'Direct Drive Roof Fans – Horizontal Outlet', '1000–16000 m³/h', 144, '120°C'),
      P('BRCF-EX', 'Direct Drive Roof Fans – Horizontal Outlet', '1000–16000 m³/h', 147),
      P('BACF', 'Axial Roof Fans – Horizontal Outlet', '2400–38000 m³/h', 150),
      P('ARMO-R', 'Axial Type Roof Fans – Horizontal Outlet', '1000–155000 m³/h', 154),
      P('BRF-V', 'Centrifugal Roof Fans – Vertical Outlet', '850–9600 m³/h', 175),
      P('BRF-V EC', 'Centrifugal Roof Fans – Vertical Outlet', '2200–8500 m³/h', 178),
      P('BRDV', 'Direct Drive Roof Fans – Vertical Outlet', '1900–10500 m³/h', 180, '120°C'),
    ],
  },
  {
    slug: 'ec-fans',
    group: 'commercial',
    title: 'مراوح EC',
    en: 'EC Fans',
    description: 'مراوح بمحركات EC موفرة للطاقة مع تحكم دقيق في السرعة.',
    icon: 'settings',
    image: cat('ec-fans'),
    applications: ['مبانٍ تجارية', 'وحدات تهوية', 'مولات'],
    features: ['كفاءة طاقة عالية', 'تحكم متغير في السرعة', 'تشغيل هادئ'],
    products: [
      P('BDTX-EC', 'Round Duct Type Fans – Backward Curved', '350–2200 m³/h', 200),
      P('BDKF-EC', 'Rectangular Duct Fans – Backward Curved', '650–8500 m³/h', 203),
      P('BRF-V EC', 'Vertical Outlet Roof Fans – Backward Curved', '2200–8500 m³/h', 206),
    ],
  },
  {
    slug: 'kitchen-exhaust',
    group: 'commercial',
    title: 'شفاطات المطابخ',
    en: 'Kitchen Exhaust Fans',
    description: 'مراوح شفط المطابخ التجارية المقاومة للحرارة حتى 120°C.',
    icon: 'kitchen',
    image: cat('kitchen-exhaust'),
    applications: ['مطابخ مركزية', 'مطاعم', 'فنادق'],
    features: ['تشغيل حتى 120°C', 'أمامية وخلفية الانحناء', 'ضغط عالٍ (BKEF-RH)'],
    products: [
      P('BKEF-R', 'Kitchen Exhaust Fans – Backward Curved', '4100–10800 m³/h', 278, '120°C'),
      P('BKEF-RH', 'Kitchen Exhaust Fans – Backward Curved, High Pressure', '3600–5000 m³/h', 280, '120°C'),
      P('BKEF', 'Kitchen Exhaust Fans – Backward Curved', '1800–10000 m³/h', 282, '120°C'),
      P('BKEF-T', 'Kitchen Fans – Forward Curved', '1750–6000 m³/h', 284, '120°C'),
    ],
  },
  {
    slug: 'ventilation-units',
    group: 'commercial',
    title: 'وحدات التهوية',
    en: 'Ventilation Units',
    description: 'وحدات تهوية كاملة بسير أو اقتران مباشر لمختلف التدفقات.',
    icon: 'box',
    image: cat('ventilation-units'),
    applications: ['مبانٍ تجارية', 'مستشفيات', 'مصانع'],
    features: ['نقل بالسير أو مباشر', 'أمامية وخلفية الانحناء', 'تدفق حتى 155,000 م³/س'],
    products: [
      P('BHV', 'Ventilation Units – Belt Drive, Forward Curved', '1800–20000 m³/h', 86),
      P('BHV-R', 'Ventilation Units – Belt Drive, Backward Curved', '2000–40000 m³/h', 90),
      P('BHV-P', 'Ventilation Units – Direct Drive, Backward Curved', '1000–25000 m³/h', 94),
      P('ARMO-C', 'Ventilation Units – Direct Drive, Airfoil Axial Fan', '1000–155000 m³/h', 97),
    ],
  },
  {
    slug: 'heat-recovery',
    group: 'commercial',
    title: 'استرجاع الحرارة',
    en: 'Heat Recovery Devices',
    description: 'وحدات استرجاع الحرارة وسخانات مجاري الهواء.',
    icon: 'recovery',
    image: cat('heat-recovery'),
    applications: ['مدارس', 'مستشفيات', 'مولات'],
    features: ['توفير الطاقة', 'سخانات مجاري 3–13 kW', 'مراوح اقتران مباشر'],
    products: [
      P('BGK', 'Backward Curved Direct Drive Fan', '1000–6000 m³/h', 122),
      P('BTCH', 'Duct Type Heating', '3–13 kW', 124),
    ],
  },
  {
    slug: 'bathroom-fans',
    group: 'commercial',
    title: 'مراوح الحمامات',
    en: 'Bathroom Fans',
    description: 'مراوح تهوية للحمامات والمطابخ الصغيرة بتصاميم ديكورية وعادية.',
    icon: 'wall',
    image: cat('bathroom-fans'),
    applications: ['حمامات', 'مطابخ صغيرة', 'شقق وفلل'],
    features: ['تدفق 100–1100 م³/س', 'غطاء أوتوماتيكي (EC)', 'نسخ قابلة للعكس'],
    products: [
      P('EF', 'Axial Bathroom Fans – Decorative', '100–300 m³/h', 462),
      P('EC', 'Axial Bathroom Fans – Automatic Shutter', '100–300 m³/h', 464),
      P('EA', 'Axial Bathroom Fans – Standard', '100–300 m³/h', 466),
      P('BPP', 'Axial Bathroom Fans – Reversible Wall Mounted', '300–1100 m³/h', 468),
      P('BPK', 'Axial Bathroom Fans – Duct Type', '100–300 m³/h', 470),
      P('BPR', 'Radial Bathroom Fans – Standard', '120–150 m³/h', 471),
    ],
  },
  {
    slug: 'pellet-greenhouse',
    group: 'commercial',
    title: 'مواقد البيليت والصوب',
    en: 'Pellet Stove & Greenhouse Fans',
    description: 'مراوح عادم مواقد البيليت ومراوح تدوير الهواء للصوب الزراعية.',
    icon: 'leaf',
    image: cat('pellet-greenhouse'),
    applications: ['مواقد بيليت', 'صوب زراعية'],
    features: ['مراوح عادم حرارية', 'نسخة بحلزون', 'تدوير هواء للصوب'],
    products: [
      P('BPA', 'Pellet Exhaust Fans', '220–580 m³/h', 474),
      P('BPAK', 'Pellet Exhaust Fans with Scroll', '160–270 m³/h', 474),
      P('BMSF-V', 'Greenhouse Axial Fans', '4270 m³/h', 482),
    ],
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)
export const getGroup = (id: GroupId) => groups.find((g) => g.id === id)
export const categoriesOf = (id: GroupId) => categories.filter((c) => c.group === id)