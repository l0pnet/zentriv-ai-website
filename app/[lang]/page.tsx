import { getDictionary } from "@/lib/get-dictionary";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection dict={dict} />
      <ServicesSection dict={dict} />
      <PricingSection dict={dict} />
    </main>
  );
}
