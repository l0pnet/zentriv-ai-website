import { Terminal, Cloud, Smartphone } from "lucide-react";

export default function ServicesSection({ dict }: { dict: any }) {
    // Hardcoded structure but using dict for some labels if we extended it.
    // Requirement: "Must clear display 3 business sectors matching Stripe desc".
    // Since dict was simple, I will use English for labels not in dict or map them if I added them.
    // In step 74 (en.json), I didn't add detailed service descriptions.
    // I will use the sub-headline context or hardcode English for now (since "English (default)" is the requirement).
    // Wait, the site must be multilingual.
    // The user provided spec text: "Custom LLM training...", etc.
    // I should text content from the dict!
    // But my dict in Step 74 was minimal.
    // I should have added these fields to dict.
    // I will add them to the dicts now or just hardcode for MVP and ask user later?
    // User Requirement: "Language support: En, Zh, Ja, Ko".
    // So I MUST put them in dict.
    // I will update the dictionaries later or "fake" it by extending dict in the component? No, that breaks i18n.
    // I'll update the dictionaries. It's better to be correct.
    // I'll update en.json first, then others (with placeholders or same English if I can't translate instantly? I can translate).

    // Actually, I'll update the components to use `dict.services` and `dict.pricing` features.
    // And I'll update `en.json`.
    // Multi-file edit?
    // Let's create the component expecting `dict.services`.
    // And then update dicts.
    // Or I can update dicts first.

    // Let's implement the component first.
    return (
        <section id="solutions" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{dict.nav?.solutions || "Solutions"}</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Service 1: AI Development */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                            <Terminal className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI Development Services</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Custom LLM training and workflow automation agents for enterprise clients.
                        </p>
                    </div>

                    {/* Service 2: SaaS Platform */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                            <Cloud className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">SaaS Platform</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Subscription-based tools for data analysis and content generation.
                        </p>
                    </div>

                    {/* Service 3: Consumer Apps */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-6 text-pink-400">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Consumer Apps</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Creative mobile applications powered by generative AI (e.g., Viral Dance).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
