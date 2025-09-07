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
        },
        {
            phrase: "Lo siento",
            translation: "I'm sorry",
            pronunciation: "loh see-EN-toh"
        },
        {
            phrase: "¿Dónde está el baño?",
            translation: "Where is the bathroom?",
            pronunciation: "DOHN-deh ehs-TAH el BAH-nyoh"
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
        },
        {
            phrase: "I'm sorry",
            translation: "Lo siento",
            pronunciation: "ahym SOR-ee"
        },
        {
            phrase: "Where is the bathroom?",
            translation: "¿Dónde está el baño?",
            pronunciation: "wehr iz thuh BATH-room"
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
        },
        {
            phrase: "Je suis désolé",
            translation: "Lo siento",
            pronunciation: "zhuh swee day-zoh-LAY"
        },
        {
            phrase: "Où sont les toilettes?",
            translation: "¿Dónde están los baños?",
            pronunciation: "oo sohn lay twah-LET"
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
        },
        {
            phrase: "Es tut mir leid",
            translation: "Lo siento",
            pronunciation: "es toot meer lahyt"
        },
        {
            phrase: "Wo ist die Toilette?",
            translation: "¿Dónde está el baño?",
            pronunciation: "voh ist dee toy-LET-teh"
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
        },
        {
            phrase: "Mi dispiace",
            translation: "Lo siento",
            pronunciation: "mee dees-pee-AH-cheh"
        },
        {
            phrase: "Dov'è il bagno?",
            translation: "¿Dónde está el baño?",
            pronunciation: "doh-VEH eel BAH-nyoh"
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
        },
        {
            phrase: "Desculpe",
            translation: "Lo siento",
            pronunciation: "des-KOOL-peh"
        },
        {
            phrase: "Onde fica o banheiro?",
            translation: "¿Dónde está el baño?",
            pronunciation: "OHN-deh FEE-kah oh bahn-YAY-roh"
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
        },
        {
            phrase: "すみません",
            translation: "Lo siento",
            pronunciation: "soo-mee-mah-sen"
        },
        {
            phrase: "トイレはどこですか？",
            translation: "¿Dónde está el baño?",
            pronunciation: "toy-reh wah doh-koh des-kah"
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
        },
        {
            phrase: "对不起",
            translation: "Lo siento",
            pronunciation: "dway boo chee"
        },
        {
            phrase: "洗手间在哪里？",
            translation: "¿Dónde está el baño?",
            pronunciation: "shee show jahn tzigh nah lee"
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
        },
        {
            phrase: "Извините",
            translation: "Lo siento",
            pronunciation: "eez-vee-NEE-tyeh"
        },
        {
            phrase: "Где туалет?",
            translation: "¿Dónde está el baño?",
            pronunciation: "gdyeh too-ah-LYET"
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
        },
        {
            phrase: "Ignosce mihi",
            translation: "Lo siento",
            pronunciation: "eeg-NOHS-keh MEE-hee"
        },
        {
            phrase: "Ubi est latrina?",
            translation: "¿Dónde está la letrina?",
            pronunciation: "OO-bee est lah-TREE-nah"
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

    const { language } = req.query;
    
    if (!language) {
        res.status(400).json({ error: 'Language parameter is required' });
        return;
    }

    const languagePhrases = phrases[language.toLowerCase()];
    
    if (!languagePhrases) {
        res.status(404).json({ error: 'Language not found' });
        return;
    }

    const randomIndex = Math.floor(Math.random() * languagePhrases.length);
    const phraseData = languagePhrases[randomIndex];
    
    res.json({ language: language, ...phraseData });
};
