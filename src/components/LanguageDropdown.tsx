import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w20/us.png" },
  { code: "es", label: "Español", flag: "https://flagcdn.com/w20/es.png" },
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w20/fr.png" },
];

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Button */}
      <button
        className="flex items-center space-x-1 cursor-pointer bg-[#FBFBFE] rounded-lg px-1 py-1 shadow-sm hover:shadow transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.label}
          className="w-4 h-4 rounded-sm"
        />
        <span className="text-sm text-gray-800">{selectedLang.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 space-x-2"
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
                console.log("Language switched to:", lang.code);
              }}
            >
              <img
                src={lang.flag}
                className="w-4 h-4 rounded-sm"
                alt={lang.label}
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
