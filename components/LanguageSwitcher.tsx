"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const pathSegments = pathname.split("/");
        // pathSegments[0] is empty, pathSegments[1] is locale
        pathSegments[1] = newLocale;
        const newPath = pathSegments.join("/");
        router.push(newPath);
    };

    const currentLocale = pathname.split("/")[1] || "en";

    return (
        <div className="relative flex items-center">
            <Globe className="w-4 h-4 mr-2 text-gray-300" />
            <select
                value={currentLocale}
                onChange={handleLanguageChange}
                className="bg-transparent text-sm text-gray-300 border-none focus:ring-0 focus:outline-none cursor-pointer"
            >
                <option value="en" className="text-black">English</option>
                <option value="zh" className="text-black">中文</option>
                <option value="ja" className="text-black">日本語</option>
                <option value="ko" className="text-black">한국어</option>
            </select>
        </div>
    );
}
