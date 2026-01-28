import { getDictionary } from "@/lib/get-dictionary";

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 bg-black text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{dict.legal.terms.title}</h1>
                <div className="prose prose-invert text-gray-300">
                    <p>{dict.legal.terms.last_updated}</p>
                    <p className="mt-4">
                        {dict.legal.terms.intro}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">{dict.legal.terms.section1_title}</h2>
                    <p>
                        {dict.legal.terms.section1_content}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">{dict.legal.terms.section2_title}</h2>
                    <p>
                        {dict.legal.terms.section2_content}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">{dict.legal.terms.section3_title}</h2>
                    <p>
                        {dict.legal.terms.section3_content}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">{dict.legal.terms.section4_title}</h2>
                    <p>
                        {dict.legal.terms.section4_content}
                    </p>
                </div>
            </div>
        </main>
    );
}
