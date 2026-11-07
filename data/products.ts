/* ───────────────────────────────────────────────
   UG Vent – بيانات المنتجات
   الصور: روابط خارجية مباشرة لموديلات BVN
   ─────────────────────────────────────────────── */

export type GroupId = 'industrial' | 'commercial'

export type Product = {
  model: string
  desc: string
  flow?: string
  extra?: string
  page: number
  image: string
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
    description:
      'مراوح طاردة مركزية ومحورية ومقاومة للانفجار ومراوح سحب الدخان والملاجئ للمصانع والمنشآت الكبيرة.',
  },
  {
    id: 'commercial',
    title: 'تجاري',
    en: 'Commercial',
    description:
      'مراوح مجاري الهواء والأسطح والمطابخ ووحدات التهوية واسترجاع الحرارة والمراوح المنزلية.',
  },
]

/* توحيد أسماء الموديلات لتسهيل المطابقة */
const normalizeModel = (model: string) =>
  model
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()

/* روابط صور موديلات BVN */
const BVN_IMAGE_BASE = 'https://instalpromet.rs/pdf/'

const externalProductImages: Record<string, string> = {
  // Radial Fans
  ALC: 'ALC.jpg',
  BPF: 'BPF.jpg',
  BGSS: 'BGSS.jpg',
  ALRX: 'ALR-X.jpg',
  ALR: 'ALR.jpg',
  ORB: 'ORB.jpg',
  YB: 'YB.jpg',
  BDS: 'BDS.jpg',
  BDRAS: 'BDRAS.jpg',
  BDRS: 'BDRS.jpg',
  AORB: 'AORB.jpg',
  BPS14060: 'BPS.jpg',
  BPSB14060: 'BPS-B.jpg',
  BPSB150100: 'BPS-B.jpg',
  OBR140: 'OBR.jpg',
  OBR200: 'OBR.jpg',
  OBR260: 'OBR.jpg',
  KMSKTS: 'KMS.jpg',
  BFC: 'BFC.jpg',
  BRV: 'BRV.jpg',
  BDD: 'BDD.jpg',
  BSF: 'BSF.jpg',
  OCES: 'OCES.jpg',
  CES: 'CES.jpg',
  BDRKF: 'BDRKF.jpg',
  BASSF: 'BASSF.jpg',

  // Axial Fans
  SF: 'SF.jpg',
  BDRAX: 'BDR-AX.jpg',
  BDRAXK: 'BDR-AX.jpg',
  BORAX: 'BOR-AX.jpg',
  BTFM: 'BTFM.jpg',
  BTFMEX: 'BTFM-EX.jpg',
  ARMOA: 'ARMO-A.jpg',
  ARMOC: 'ARMO-C.jpg',
  ARMOR: 'ARMO-R.jpg',
  B6PA: 'B6PAM.jpg',
  B5PA: 'B5PAM.jpg',
  BSMBST: 'BSM.jpg',
  BSMSBSTS: 'BSMS.jpg',
  BSV: 'BSV.jpg',
  BB: 'BB.jpg',
  BK: 'BK.jpg',

  // Duct Fans
  BDTX: 'BDTX.jpg',
  BDTXEC: 'BDTX.jpg',
  BMFX: 'BMFX.jpg',
  BPX: 'BPX.jpg',
  BFTX: 'BFTX.jpg',
  BDKF: 'BDKF.jpg',
  BDKFEC: 'BDKF.jpg',
  BKKF: 'BKKF.jpg',
  BSKF: 'BSKF.jpg',
  BDKFR: 'BDKF-R.jpg',
  BSKFR: 'BSKF-R.jpg',
  BDKFREX: 'BDKF-R-EX.jpg',

  // Kitchen Exhaust
  BKEF: 'BKEF.jpg',
  BKEFR: 'BKEF-R.jpg',
  BKEFRH: 'BKEF-RH.jpg',
  BKEFT: 'BKEF-T.jpg',

  // Ventilation Units
  BHV: 'BHV.jpg',
  BHVR: 'BHV-R.jpg',
  BHVP: 'BHV-P.jpg',

  // Heat Recovery
  BGK: 'BGK.jpg',

  // Shelter Fans
  BSH: 'BSH.jpg',
  BSHR: 'BSH.jpg',
  BSHC: 'BSH-C.jpg',

  // Roof Fans
  BRF: 'BRF.jpg',
  BRCFM: 'BRCF-M.jpg',
  BRCF: 'BRCF.jpg',
  BRCFEX: 'BRCF-EX.jpg',
  BACF: 'BACF.jpg',
  BRFV: 'BRF-V.jpg',
  BRFVEC: 'BRF-V.jpg',
  BRDV: 'BRDV.jpg',

  // Smoke & Heat Exhaust
  ARMOJP: 'ARMO-JP-F400-2h.jpg',
  ARMOJR: 'ARMO-JR-50-F400-2h.jpg',

  // Bathroom Fans
  EF: 'EF.jpg',
  EC: 'EC.jpg',
  EA: 'EA.jpg',
  BPP: 'BPP.jpg',
  BPR: 'BPR.jpg',
}

/* تحويل اسم الموديل إلى اسم صورة محلية احتياطية */
export const imageSlug = (model: string) =>
  model
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/* إنشاء المنتج وربط الصورة الخارجية */
const P = (
  model: string,
  desc: string,
  flow: string | undefined,
  page: number,
  extra?: string
): Product => {
  const key = normalizeModel(model)
  const imageFile = externalProductImages[key]

  return {
    model,
    desc,
    flow,
    extra,
    page,
    image: imageFile
      ? `${BVN_IMAGE_BASE}${imageFile}`
      : `/products/${imageSlug(model)}.jpg`,
  }
}

const cat = (slug: string) => `/categories/${slug}.jpg`

export const categories: Category[] = [
  /* ═══════════════ القسم الصناعي ═══════════════ */

  {
    slug: 'radial-fans',
    group: 'industrial',
    title: 'المراوح الطاردة المركزية',
    en: 'Radial Fans',
    description:
      'مراوح طرد مركزي بمدى واسع من الضغط والتدفق، من النفخات الصغيرة حتى المراوح الصناعية الكبيرة.',
    icon: 'circle',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2022/3/LJ/QH/DS/77768019/centrifugal-blower3-250x250.jpg',
    applications: ['مصانع', 'مخازن', 'ورش دهانات'],
    features: [
      'خلفية وأمامية الانحناء وريش شعاعية',
      'مدى تدفق من 80 إلى 400,000 م³/س',
      'مواد متعددة: صاج، ألمنيوم، بلاستيك',
    ],
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
    description:
      'مراوح محورية بتدفق عالٍ للتبريد والتهوية العامة وضغط الهواء، حائطية وأنبوبية وسقفية.',
    icon: 'fan',
    image:
      'https://5.imimg.com/data5/KR/HT/FH/SELLER-2888163/industrial-axial-fan-250x250.jpg',
    applications: ['مصانع', 'ورش', 'مواقف سيارات'],
    features: [
      'مدى تدفق حتى 155,000 م³/س',
      'تركيب حائطي أو أنبوبي',
      'ريش مركّبة بتصميم Airfoil',
    ],
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
    description:
      'مراوح مصممة للبيئات الخطرة التي قد تحتوي غازات أو أبخرة قابلة للاشتعال.',
    icon: 'shield',
    image: cat('exproof-fans'),
    applications: ['مصانع كيماوية', 'مخازن وقود', 'ورش دهانات'],
    features: [
      'محركات مقاومة للانفجار',
      'خيارات محورية ومستطيلة وسقفية',
      'للمناطق الخطرة',
    ],
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
    description:
      'مراوح سحب الدخان والحرارة ومراوح الجت للجراجات والأنفاق، بمقاومة حريق F300 وF400.',
    icon: 'wind',
    image: cat('smoke-extract-fans'),
    applications: ['جراجات', 'أنفاق', 'مولات ومباني صناعية'],
    features: [
      'مقاومة حريق F300-2h / F400-2h',
      'مراوح جت 25–70 N',
      'أنواع أنبوبية وكابينة وسقفية',
    ],
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
    features: [
      'وحدات مجاري هواء وكابينة',
      'خيار فلترة',
      'تدفق من 400 إلى 8000 م³/س',
    ],
    products: [
      P('BSH', 'Duct Type Shelter Fans', '400–4500 m³/h', 130),
      P('BSH-R', 'Cabinet Shelter Fans', undefined, 133),
      P('BSH-C', 'Filtered Duct Fans', '2000–8000 m³/h', 134),
    ],
  },

  /* ═══════════════ القسم التجاري ═══════════════ */

  {
    slug: 'duct-fans',
    group: 'commercial',
    title: 'مراوح مجاري الهواء',
    en: 'Duct Fans',
    description:
      'مراوح دائرية ومستطيلة للتهوية المركزية ومجاري الهواء في المباني التجارية.',
    icon: 'duct',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2025/4/504896543/GS/JR/PT/16524617/circular-duct-inline-fan-250x250.jpg',
    applications: ['مبانٍ تجارية', 'مطاعم', 'فنادق'],
    features: [
      'تركيب داخل المجرى',
      'نسخ مقاومة 120°C',
      'دائرية ومستطيلة ومربعة',
    ],
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
    description:
      'مراوح أسطح بمخرج أفقي أو رأسي، طرد مركزي أو محوري، للمباني والمصانع.',
    icon: 'roof',
    image: cat('roof-fans'),
    applications: ['مصانع', 'مستشفيات', 'مبانٍ تجارية'],
    features: [
      'مخرج أفقي أو رأسي',
      'نسخ مقاومة 120°C',
      'ضوضاء منخفضة وصيانة أقل',
    ],
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
    description:
      'مراوح بمحركات EC موفرة للطاقة مع تحكم دقيق في السرعة.',
    icon: 'settings',
    image: cat('ec-fans'),
    applications: ['مبانٍ تجارية', 'وحدات تهوية', 'مولات'],
    features: [
      'كفاءة طاقة عالية',
      'تحكم متغير في السرعة',
      'تشغيل هادئ',
    ],
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
    description:
      'مراوح شفط المطابخ التجارية المقاومة للحرارة حتى 120°C.',
    icon: 'kitchen',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2025/2/486537868/HL/OD/RH/235818/commercial-kitchen-exhaust-fan-250x250.png',
    applications: ['مطابخ مركزية', 'مطاعم', 'فنادق'],
    features: [
      'تشغيل حتى 120°C',
      'أمامية وخلفية الانحناء',
      'ضغط عالٍ (BKEF-RH)',
    ],
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
    description:
      'وحدات تهوية متكاملة لتجديد الهواء وتوزيعه في المباني والمنشآت.',
    icon: 'wind',
    image: cat('ventilation-units'),
    applications: ['مستشفيات', 'مكاتب', 'مراكز تجارية'],
    features: [
      'خيارات متعددة للتجهيز',
      'تدفق هواء مناسب للمساحات المختلفة',
      'قابلة للدمج مع أنظمة التكييف',
    ],
    products: [
      P('BHV', 'Ventilation Units', 'حسب التكوين', 290),
      P('BHV-R', 'Ventilation Units – Rotary', 'حسب التكوين', 292),
      P('BHV-P', 'Ventilation Units – Plate Heat Exchanger', 'حسب التكوين', 294),
      P('ARMO-C', 'Axial Fan – Circular Casing', 'حسب الموديل', 296),
    ],
  },

  {
    slug: 'heat-recovery',
    group: 'commercial',
    title: 'استرجاع الحرارة',
    en: 'Heat Recovery',
    description:
      'أنظمة استرجاع الطاقة الحرارية من الهواء المطرود لتقليل استهلاك الطاقة.',
    icon: 'refresh-cw',
    image: cat('heat-recovery'),
    applications: ['المباني التجارية', 'المكاتب', 'الفنادق'],
    features: [
      'استعادة الطاقة الحرارية',
      'تحسين كفاءة التهوية',
      'تقليل أحمال التكييف',
    ],
    products: [
      P('BGK', 'Heat Recovery Units', 'حسب الموديل', 310),
      P('BTCH', 'Heat Recovery Units', 'حسب الموديل', 312),
    ],
  },

  {
    slug: 'bathroom-fans',
    group: 'commercial',
    title: 'مراوح الحمامات',
    en: 'Bathroom Fans',
    description:
      'مراوح صغيرة لسحب الرطوبة والروائح وتجديد الهواء في الحمامات.',
    icon: 'fan',
    image: cat('bathroom-fans'),
    applications: ['الحمامات', 'المطابخ المنزلية', 'الغرف الصغيرة'],
    features: [
      'تصميم مدمج',
      'سهولة التركيب',
      'تشغيل هادئ',
    ],
    products: [
      P('EF', 'Bathroom Exhaust Fans', 'حسب الموديل', 320),
      P('EC', 'Bathroom Exhaust Fans', 'حسب الموديل', 322),
      P('EA', 'Bathroom Exhaust Fans', 'حسب الموديل', 324),
      P('BPP', 'Bathroom Exhaust Fans', 'حسب الموديل', 326),
      P('BPK', 'Bathroom Exhaust Fans', 'حسب الموديل', 328),
      P('BPR', 'Bathroom Exhaust Fans', 'حسب الموديل', 330),
    ],
  },

  {
    slug: 'pellet-greenhouse',
    group: 'commercial',
    title: 'مراوح الصوب الزراعية',
    en: 'Greenhouse & Agricultural Fans',
    description:
      'مراوح تهوية للمزارع والصوب الزراعية وأنظمة تربية الدواجن.',
    icon: 'sprout',
    image: cat('pellet-greenhouse'),
    applications: ['الصوب الزراعية', 'مزارع الدواجن', 'المخازن الزراعية'],
    features: [
      'تجديد الهواء',
      'مناسبة للبيئات الزراعية',
      'خيارات متعددة للتدفق',
    ],
    products: [
      P('BPA', 'Agricultural Fans', 'حسب الموديل', 340),
      P('BPAK', 'Agricultural Fans', 'حسب الموديل', 342),
      P('BMSF-V', 'Agricultural Fans', 'حسب الموديل', 344),
    ],
  },
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getGroup = (id: GroupId) =>
  groups.find((group) => group.id === id);

export const categoriesOf = (group: GroupId) =>
  categories.filter((category) => category.group === group);