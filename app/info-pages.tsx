import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Factory,
  Warehouse,
  Car,
  Building2,
  Utensils,
  School,
  Wrench,
  Ruler,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Shell, SectionTitle } from "@/components/site";
import { categories } from "@/data/products";
const appData = [
  [
    "مصانع",
    "تهوية خطوط الإنتاج وإخلاء الحرارة والغبار",
    ["axial-fans", "centrifugal-fans"],
  ],
  ["مخازن", "تجديد الهواء وحماية المنتجات", ["axial-fans", "roof-fans"]],
  [
    "ورش",
    "سحب الأبخرة والملوثات وتحسين بيئة العمل",
    ["wall-fans", "centrifugal-fans"],
  ],
  ["مولات", "حلول تهوية وطرد دخان متكاملة", ["cabinet-smoke-fans", "jet-fans"]],
  ["أنفاق", "إدارة حركة الهواء والغازات الضارة", ["jet-fans"]],
  [
    "جراجات متعددة الأدوار",
    "تهوية الجراجات والتحكم في الدخان",
    ["jet-fans", "cabinet-smoke-fans"],
  ],
  ["مطابخ مركزية", "شفط الدهون والدخان بفعالية", ["kitchen-exhaust"]],
  [
    "مستشفيات ومدارس",
    "هواء نقي واسترجاع للطاقة",
    ["heat-recovery", "duct-fans"],
  ],
  ["صوب ومزارع", "تحكم مناخي وتدوير الهواء", ["greenhouse-fans"]],
];




