const phrases = require('../data/phrases');

exports.getLanguagePhrase = (req, res) => {
    const languages = Object.keys(phrases);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const languagePhrases = phrases[randomLang];
    
    if (languagePhrases && languagePhrases.length > 0) {
        const randomIndex = Math.floor(Math.random() * languagePhrases.length);
        const phraseData = languagePhrases[randomIndex];
        res.json({ language: randomLang, ...phraseData });
    } else {
        res.status(404).json({ 
            language: 'error', 
            phrase: 'Idioma no encontrado', 
            translation: 'Language not found', 
            pronunciation: 'Error' 
        });
    }
};

exports.getAllLanguagesPhrases = (req, res) => {
    try {
        const allPhrases = {};
        const languages = Object.keys(phrases);

        languages.forEach(language => {
            const languagePhrases = phrases[language];
            if (languagePhrases && languagePhrases.length > 0) {
                const randomIndex = Math.floor(Math.random() * languagePhrases.length);
                allPhrases[language] = {
                    language: language,
                    ...languagePhrases[randomIndex]
                };
            }
        });

        res.json({ phrases: allPhrases });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener frases de todos los idiomas." });
    }
};
