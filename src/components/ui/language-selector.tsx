import { useState, useRef, useEffect } from "react";

type Language = { code: "en" | "dk"; label: "EN" | "DA"; host: string; flag: string };

const languages: Language[] = [
  { code: "en", label: "EN", host: "nordiccharge.com", flag: "/images/language/uk.svg" },
  { code: "dk", label: "DA", host: "nordiccharge.dk", flag: "/images/language/dk.svg" },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect current language from the hostname (default EN)
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  useEffect(() => {
    const host = typeof window !== "undefined" ? window.location.hostname.toLowerCase() : "";
    const dk = languages.find(l => l.code === "dk")!;
    const en = languages.find(l => l.code === "en")!;
    setCurrentLang(host.endsWith(dk.host) ? dk : en);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const changeLanguage = (code: Language["code"]) => {
    const target = languages.find(l => l.code === code)!;
    if (target.code === currentLang.code) {
      setOpen(false);
      return;
    }
    // Preserve path/query/hash when switching domains
    const { protocol, pathname, search, hash } = window.location;
    const url = `${protocol}//${target.host}${pathname}${search}${hash}`;
    window.location.assign(url);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="inline-flex w-full justify-center rounded-xl border-gray-300 px-4 py-2 text-foreground font-sans text-sm font-light focus:outline-none hover:cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img src={currentLang.flag} alt="" className="inline-block mr-2 h-5"  /> {currentLang.label}
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-green-800 ring-opacity-5 z-50">
          <div>
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full px-4 py-2 text-left text-sm rounded-xl hover:bg-gray-100 hover:cursor-pointer ${
                  lang.code === currentLang.code ? "font-bold text-primary" : "text-gray-700"
                }`}
                disabled={lang.code === currentLang.code}
                role="option"
                aria-selected={lang.code === currentLang.code}
              >
                <img src={lang.flag} alt="" className="inline-block mr-2 h-5" /> {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
