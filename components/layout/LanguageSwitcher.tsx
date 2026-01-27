'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import type { Locale } from '@/lib/translations';

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params?.locale as Locale) || 'ro';
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    setIsOpen(false);
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-industrial-200 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-sm">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-industrial-800 rounded-lg shadow-xl border border-industrial-700 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-industrial-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLocale === lang.code ? 'bg-industrial-700 text-primary' : 'text-industrial-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
