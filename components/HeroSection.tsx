import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ dict }: { dict: any }) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 drop-shadow-lg">
                    {dict.hero.headline}
                </h1>
                <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    {dict.hero.sub_headline}
                </p>
                <div className="flex justify-center">
                    <Link
                        href="#solutions"
                        className="group flex items-center px-8 py-3 text-lg font-medium rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 ring-2 ring-white/50 ring-offset-2 ring-offset-black"
                    >
                        {dict.hero.cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
