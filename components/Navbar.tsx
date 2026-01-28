import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href={`/${lang}`} className="text-white font-bold text-xl tracking-wider">
                            ZENTRIV AI
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href={`/${lang}#products`} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {dict.nav.products}
                            </Link>
                            <Link href={`/${lang}#solutions`} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {dict.nav.solutions}
                            </Link>
                            <Link href={`/${lang}#pricing`} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {dict.nav.pricing}
                            </Link>
                            <LanguageSwitcher />
                        </div>
                    </div>
                    {/* Mobile menu button (simple implementation) */}
                    <div className="-mr-2 flex md:hidden">
                        <LanguageSwitcher />
                        {/* Note: Full mobile menu omitted for simplicity as per requirements, strictly minimal */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
