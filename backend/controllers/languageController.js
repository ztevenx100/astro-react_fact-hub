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
