import Link from "next/link";

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Zentriv AI, LLC</h3>
                        <p>123 Innovation Dr.<br />San Francisco, CA 94105<br />USA</p>
                        <p className="mt-2">support@zentriv.co</p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{dict.footer.privacy}</Link></li>
                            <li><Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{dict.footer.terms}</Link></li>
                            <li><Link href={`/${lang}/refund`} className="hover:text-white transition-colors">{dict.footer.refund}</Link></li>
                        </ul>
                    </div>

                    <div className="md:text-right">
                        <p>{dict.footer.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
