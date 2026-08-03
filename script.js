const translations = {
    de: {
        title: "Zakir Ufuk Ören",
        tagline: "B.Eng. IoT | M.Sc. Wirtschaftsinformatik Student",
        bio: "Spezialisiert auf IoT, digitale Energiewende und Smart Grid Management. Mit Leidenschaft an der Schnittstelle von Technik, Erneuerbaren Energien und Wirtschaftsinformatik.",
        btn_linkedin: "LinkedIn",
        btn_email: "Kontaktieren Sie mich"
    },
    en: {
        title: "Zakir Ufuk Oren",
        tagline: "B.Eng. IoT | M.Sc. Business Informatics Student",
        bio: "Specializing in IoT, digital energy transition, and smart grid management. Passionate about driving renewable energy solutions at the intersection of technology and business informatics.",
        btn_linkedin: "LinkedIn",
        btn_email: "Contact Me"
    },
    tr: {
        title: "Zakir Ufuk Ören",
        tagline: "B.Eng. IoT | M.Sc. Wirtschaftsinformatik Öğrencisi",
        bio: "IoT, dijital enerji dönüşümü ve akıllı şebeke (smart grid) yönetim sistemleri üzerine odaklanıyorum. Yenilenebilir enerji ve bilişim sistemlerinin kesişim noktasında yenilikçi çözümler üretiyorum.",
        btn_linkedin: "LinkedIn",
        btn_email: "İletişime Geç"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element has child nodes (like SVG icons in buttons)
            // If it does, we want to replace only the text node, not the icon
            if (element.children.length > 0) {
                // Find the text node and update it
                for (let i = 0; i < element.childNodes.length; i++) {
                    if (element.childNodes[i].nodeType === Node.TEXT_NODE && element.childNodes[i].textContent.trim() !== '') {
                        element.childNodes[i].textContent = " " + translations[lang][key];
                        break;
                    }
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update dropdown button text
    const langBtn = document.getElementById('current-lang-btn');
    if (langBtn) {
        const flags = {
            'de': '🇩🇪',
            'en': '🇬🇧',
            'tr': '🇹🇷'
        };
        langBtn.textContent = flags[lang];
    }
}

// Set default language to German (for German job target)
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('de');
});
