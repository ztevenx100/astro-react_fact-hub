const languages = [
    'espanol',
    'ingles', 
    'frances',
    'aleman',
    'italiano',
    'portugues',
    'japones',
    'chino',
    'ruso',
    'latin'
];

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    res.json({ 
        languages: languages.map(lang => ({
            id: lang,
            name: lang.charAt(0).toUpperCase() + lang.slice(1)
        }))
    });
};
