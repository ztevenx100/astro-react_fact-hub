const phrases = {
    espanol: [
        {
            phrase: "¡Hola! ¿Cómo estás?",
            translation: "Hello! How are you?",
            pronunciation: "OH-lah KOH-moh ehs-TAHS"
        },
        {
            phrase: "Por favor",
            translation: "Please",
            pronunciation: "por fah-VOR"
        },
        {
            phrase: "Gracias",
            translation: "Thank you",
            pronunciation: "GRAH-see-ahs"
        }
    ],
    ingles: [
        {
            phrase: "Hello! How are you?",
            translation: "¡Hola! ¿Cómo estás?",
            pronunciation: "HEH-loh haw ar yu"
        },
        {
            phrase: "Please",
            translation: "Por favor",
            pronunciation: "pleez"
        },
        {
            phrase: "Thank you",
            translation: "Gracias",
            pronunciation: "thangk yu"
        }
    ],
    frances: [
        {
            phrase: "Bonjour! Comment allez-vous?",
            translation: "¡Hola! ¿Cómo está usted?",
            pronunciation: "bon-ZHOOR ko-mahn-tah-lay VOO"
        },
        {
            phrase: "S'il vous plaît",
            translation: "Por favor",
            pronunciation: "seel voo PLEH"
        },
        {
            phrase: "Merci",
            translation: "Gracias",
            pronunciation: "mer-SEE"
        }
    ],
    aleman: [
        {
            phrase: "Hallo! Wie geht es Ihnen?",
            translation: "¡Hola! ¿Cómo está usted?",
            pronunciation: "HAH-loh vee gayt es EE-nen"
        },
        {
            phrase: "Bitte",
            translation: "Por favor",
            pronunciation: "BIT-teh"
        },
        {
            phrase: "Danke",
            translation: "Gracias",
            pronunciation: "DAHN-keh"
        }
    ],
    italiano: [
        {
            phrase: "Ciao! Come stai?",
            translation: "¡Hola! ¿Cómo estás?",
            pronunciation: "chah-oh KOH-meh stah-ee"
        },
        {
            phrase: "Per favore",
            translation: "Por favor",
            pronunciation: "per fah-VOH-reh"
        },
        {
            phrase: "Grazie",
            translation: "Gracias",
            pronunciation: "GRAH-tsee-eh"
        }
    ],
    portugues: [
        {
            phrase: "Olá! Como está?",
            translation: "¡Hola! ¿Cómo está?",
            pronunciation: "oh-LAH KOH-moo ehs-TAH"
        },
        {
            phrase: "Por favor",
            translation: "Por favor",
            pronunciation: "por fah-VOR"
        },
        {
            phrase: "Obrigado",
            translation: "Gracias",
            pronunciation: "oh-bree-GAH-doo"
        }
    ],
    japones: [
        {
            phrase: "こんにちは！元気ですか？",
            translation: "¡Hola! ¿Cómo estás?",
            pronunciation: "kon-nee-chee-wah gen-kee des-kah"
        },
        {
            phrase: "お願いします",
            translation: "Por favor",
            pronunciation: "oh-neh-gah-ee-shee-mahs"
        },
        {
            phrase: "ありがとう",
            translation: "Gracias",
            pronunciation: "ah-ree-gah-toh"
        }
    ],
    chino: [
        {
            phrase: "你好！你好吗？",
            translation: "¡Hola! ¿Cómo estás?",
            pronunciation: "nee hah-oh nee hah-oh mah"
        },
        {
            phrase: "请",
            translation: "Por favor",
            pronunciation: "cheeng"
        },
        {
            phrase: "谢谢",
            translation: "Gracias",
            pronunciation: "sheh-sheh"
        }
    ],
    ruso: [
        {
            phrase: "Привет! Как дела?",
            translation: "¡Hola! ¿Cómo van las cosas?",
            pronunciation: "pree-VYET kahk dee-LAH"
        },
        {
            phrase: "Пожалуйста",
            translation: "Por favor",
            pronunciation: "pah-ZHAH-loo-stah"
        },
        {
            phrase: "Спасибо",
            translation: "Gracias",
            pronunciation: "spah-SEE-boh"
        }
    ],
    latin: [
        {
            phrase: "Salve! Quid agis?",
            translation: "¡Hola! ¿Qué haces?",
            pronunciation: "SAHL-weh kweed AH-gees"
        },
        {
            phrase: "Quaeso",
            translation: "Por favor",
            pronunciation: "KWAH-eh-soh"
        },
        {
            phrase: "Gratias",
            translation: "Gracias",
            pronunciation: "GRAH-tee-ahs"
        }
    ]
};

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

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
