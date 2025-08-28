const phrases = {
    espanol: { phrase: "Hola, ¿cómo estás?", translation: "Hello, how are you?", pronunciation: "O-la, ko-mo es-tas?" },
    ingles: { phrase: "Hello, how are you?", translation: "Hola, ¿cómo estás?", pronunciation: "He-llo, how are you?" },
    japones: { phrase: "こんにちは、お元気ですか？", translation: "Hola, ¿cómo estás?", pronunciation: "Konnichiwa, o-genki desu ka?" },
    latin: { phrase: "Salve, quid agis?", translation: "Hola, ¿cómo estás?", pronunciation: "Sal-ve, quid a-gis?" }
};

exports.getLanguagePhrase = (req, res) => {
    const languages = Object.keys(phrases);
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const phraseData = phrases[randomLang];
    res.json({ language: randomLang, ...phraseData });
};
