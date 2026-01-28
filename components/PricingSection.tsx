import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingSection({ dict }: { dict: any }) {
    return (
        <section id="pricing" className="py-24 bg-zinc-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{dict.pricing.title}</h2>
                    <p className="text-gray-400">Transparent pricing for every stage of growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-black border border-white/10 rounded-2xl p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">{dict.pricing.starter}</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">{dict.pricing.starter_price}</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-gray-400">
                                <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                                <span>Basic Mobile App Access</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                                <span>In-App Purchases available</span>
                            </li>
                        </ul>
                        <Link href="#" className="w-full text-center py-3 rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            Download App
                        </Link>
                    </div>

                    {/* Pro (SaaS) - Highlighted */}
                    <div className="bg-gradient-to-b from-purple-900/20 to-black border border-purple-500/50 rounded-2xl p-8 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
                        <h3 className="text-xl font-bold text-white mb-2">{dict.pricing.pro}</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">{dict.pricing.pro_price}</span>
                        </div>
                        <p className="text-sm text-purple-400 mb-6 font-semibold">{dict.pricing.recurring}</p>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-gray-300">
                                <Check className="w-5 h-5 text-purple-400 mr-2 shrink-0" />
                                <span>Full SaaS Platform Access</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Check className="w-5 h-5 text-purple-400 mr-2 shrink-0" />
                                <span>Advanced Data Analysis</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Check className="w-5 h-5 text-purple-400 mr-2 shrink-0" />
                                <span>Priority Support</span>
                            </li>
                        </ul>
                        <Link href="#" className="w-full text-center py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all font-semibold shadow-lg shadow-purple-900/20">
                            Start Free Trial
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-black border border-white/10 rounded-2xl p-8 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">{dict.pricing.enterprise}</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">{dict.pricing.enterprise_price}</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-gray-400">
                                <Check className="w-5 h-5 text-white mr-2 shrink-0" />
                                <span>Custom LLM Solutions</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <Check className="w-5 h-5 text-white mr-2 shrink-0" />
                                <span>Dedicated Success Manager</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <Check className="w-5 h-5 text-white mr-2 shrink-0" />
                                <span>On-premise Deployment</span>
                            </li>
                        </ul>
                        <Link href="#" className="w-full text-center py-3 rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
