
import type { Metadata } from "next";
import { Applications } from "@/components/Applications";

export const metadata: Metadata = {
  title: "التطبيقات | UG VENT",
  description:
    "تطبيقات أنظمة التهوية الصناعية وسحب الدخان لمختلف المنشآت.",
};

export default function ApplicationsPage() {
  return <Applications />;
}
