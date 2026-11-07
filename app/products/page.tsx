
import { Shell } from "@/components/site";
import ProductGroups from "@/components/product-groups";

export default function ProductsPage() {
  return (
    <Shell>
      <main className="min-h-screen bg-[#F5F8FC]">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-bold text-[#2F80ED]">
              UG VENT / PRODUCTS
            </p>

            <h1 className="text-3xl font-black tracking-tight text-[#082747] sm:text-4xl">
              منتجاتنا
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
              اكتشف حلول التهوية الصناعية والتجارية المصممة لتلبية
              احتياجات مختلف المشروعات والتطبيقات الهندسية.
            </p>
          </div>
        </section>

        <ProductGroups />
      </main>
    </Shell>
  );
}
