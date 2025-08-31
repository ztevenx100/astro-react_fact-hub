const phrases = require('../data/phrases');

exports.getLanguagePhrase = (req, res) => {
    const languages = Object.keys(phrases);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const phraseData = phrases[randomLang];
    res.json({ language: randomLang, ...phraseData });
};
