const phrases = {
    espanol: [
        { phrase: "Hola, ¿cómo estás?", translation: "Hello, how are you?", pronunciation: "O-la, ko-mo es-tas?" },
        { phrase: "Buenos días", translation: "Good morning", pronunciation: "Bue-nos di-as" },
        { phrase: "Gracias por todo", translation: "Thank you for everything", pronunciation: "Gra-ci-as por to-do" },
        { phrase: "¿Dónde está el baño?", translation: "Where is the bathroom?", pronunciation: "Don-de es-ta el ba-ño?" },
        { phrase: "Me gusta mucho", translation: "I like it a lot", pronunciation: "Me gus-ta mu-cho" }
    ],
    ingles: [
        { phrase: "Hello, how are you?", translation: "Hola, ¿cómo estás?", pronunciation: "He-llo, how are you?" },
        { phrase: "Good morning", translation: "Buenos días", pronunciation: "Good mor-ning" },
        { phrase: "Thank you very much", translation: "Muchas gracias", pronunciation: "Thank you ve-ry much" },
        { phrase: "What time is it?", translation: "¿Qué hora es?", pronunciation: "What time is it?" },
        { phrase: "Have a nice day", translation: "Que tengas un buen día", pronunciation: "Have a nice day" }
    ],
    frances: [
        { phrase: "Bonjour, comment allez-vous?", translation: "Hola, ¿cómo estás?", pronunciation: "Bon-zhur, ko-mahn ta-lay voo?" },
        { phrase: "Merci beaucoup", translation: "Muchas gracias", pronunciation: "Mer-see bo-koo" },
        { phrase: "Où est la gare?", translation: "¿Dónde está la estación?", pronunciation: "Oo eh la gar?" },
        { phrase: "Je ne comprends pas", translation: "No entiendo", pronunciation: "Zhuh nuh kom-prahn pah" },
        { phrase: "Parlez-vous anglais?", translation: "¿Hablas inglés?", pronunciation: "Par-lay voo ahn-gleh?" }
    ],
    aleman: [
        { phrase: "Guten Tag, wie geht es Ihnen?", translation: "Hola, ¿cómo estás?", pronunciation: "Goo-ten tahk, vee gayt es ee-nen?" },
        { phrase: "Vielen Dank", translation: "Muchas gracias", pronunciation: "Fee-len dahnk" },
        { phrase: "Wo ist der Bahnhof?", translation: "¿Dónde está la estación?", pronunciation: "Vo ist der bahn-hof?" },
        { phrase: "Ich verstehe nicht", translation: "No entiendo", pronunciation: "Ikh fer-shtay-uh nikht" },
        { phrase: "Sprechen Sie Englisch?", translation: "¿Habla inglés?", pronunciation: "Shpre-khen zee eng-lish?" }
    ],
    italiano: [
        { phrase: "Ciao, come stai?", translation: "Hola, ¿cómo estás?", pronunciation: "Chao, ko-me stai?" },
        { phrase: "Grazie mille", translation: "Muchas gracias", pronunciation: "Gra-tsie mi-lle" },
        { phrase: "Dov'è la stazione?", translation: "¿Dónde está la estación?", pronunciation: "Do-veh la sta-tsio-ne?" },
        { phrase: "Non capisco", translation: "No entiendo", pronunciation: "Non ka-pis-ko" },
        { phrase: "Parla inglese?", translation: "¿Habla inglés?", pronunciation: "Par-la in-gle-se?" }
    ],
    portugues: [
        { phrase: "Olá, como está?", translation: "Hola, ¿cómo estás?", pronunciation: "O-la, ko-mo es-ta?" },
        { phrase: "Muito obrigado", translation: "Muchas gracias", pronunciation: "Mui-to o-bri-ga-do" },
        { phrase: "Onde fica a estação?", translation: "¿Dónde está la estación?", pronunciation: "On-de fi-ka a es-ta-sao?" },
        { phrase: "Não entendo", translation: "No entiendo", pronunciation: "Nao en-ten-do" },
        { phrase: "Fala inglês?", translation: "¿Habla inglés?", pronunciation: "Fa-la in-gles?" }
    ],
    japones: [
        { phrase: "こんにちは、お元気ですか？", translation: "Hola, ¿cómo estás?", pronunciation: "Konnichiwa, o-genki desu ka?" },
        { phrase: "ありがとうございます", translation: "Muchas gracias", pronunciation: "Arigatou gozaimasu" },
        { phrase: "駅はどこですか？", translation: "¿Dónde está la estación?", pronunciation: "Eki wa doko desu ka?" },
        { phrase: "わかりません", translation: "No entiendo", pronunciation: "Wakarimasen" },
        { phrase: "英語を話せますか？", translation: "¿Habla inglés?", pronunciation: "Eigo wo hanasemasu ka?" }
    ],
    chino: [
        { phrase: "你好，你好吗？", translation: "Hola, ¿cómo estás?", pronunciation: "Nǐ hǎo, nǐ hǎo ma?" },
        { phrase: "谢谢", translation: "Gracias", pronunciation: "Xiè xiè" },
        { phrase: "火车站在哪里？", translation: "¿Dónde está la estación?", pronunciation: "Huǒchē zhàn zài nǎlǐ?" },
        { phrase: "我不明白", translation: "No entiendo", pronunciation: "Wǒ bù míngbái" },
        { phrase: "你会说英语吗？", translation: "¿Hablas inglés?", pronunciation: "Nǐ huì shuō yīngyǔ ma?" }
    ],
    ruso: [
        { phrase: "Привет, как дела?", translation: "Hola, ¿cómo estás?", pronunciation: "Pri-vyet, kak de-la?" },
        { phrase: "Спасибо большое", translation: "Muchas gracias", pronunciation: "Spa-si-bo bol-sho-ye" },
        { phrase: "Где вокзал?", translation: "¿Dónde está la estación?", pronunciation: "Gde vok-zal?" },
        { phrase: "Я не понимаю", translation: "No entiendo", pronunciation: "Ya ne po-ni-ma-yu" },
        { phrase: "Вы говорите по-английски?", translation: "¿Habla inglés?", pronunciation: "Vy go-vo-ri-te po-ang-li-ski?" }
    ],
    latin: [
        { phrase: "Salve, quid agis?", translation: "Hola, ¿cómo estás?", pronunciation: "Sal-ve, quid a-gis?" },
        { phrase: "Gratias tibi ago", translation: "Te doy las gracias", pronunciation: "Gra-ti-as ti-bi a-go" },
        { phrase: "Ubi est statio?", translation: "¿Dónde está la estación?", pronunciation: "U-bi est sta-ti-o?" },
        { phrase: "Non intellego", translation: "No entiendo", pronunciation: "Non in-tel-le-go" },
        { phrase: "Loquerisne Anglice?", translation: "¿Hablas inglés?", pronunciation: "Lo-que-ris-ne An-gli-ce?" }
    ]
};

module.exports = phrases;
