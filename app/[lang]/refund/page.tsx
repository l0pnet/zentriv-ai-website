import { getDictionary } from "@/lib/get-dictionary";

export default async function RefundPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 bg-black text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{dict.legal.refund.title}</h1>
                <div className="prose prose-invert">
                    <p className="mb-4 text-gray-300">
                        {dict.legal.refund.intro}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.legal.refund.saas_title}</h2>
                    <p className="mb-4 text-gray-300">
                        {dict.legal.refund.saas_content}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.legal.refund.custom_title}</h2>
                    <p className="mb-4 text-gray-300">
                        {dict.legal.refund.custom_content}
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.legal.refund.contact_title}</h2>
                    <p className="mb-4 text-gray-300">
                        {dict.legal.refund.contact_content}
                    </p>
                </div>
            </div>
        </main>
    );
}
