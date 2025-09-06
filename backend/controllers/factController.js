const facts = require('../data/facts');

exports.getFact = (req, res) => {
    const { category } = req.params;
    const categoryFacts = facts[category];

    if (categoryFacts && categoryFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryFacts.length);
        const fact = categoryFacts[randomIndex];
        res.json({ fact });
    } else {
        res.status(404).json({ fact: "Categoría no encontrada o no hay datos disponibles. Por favor, elige una de las categorías." });
    }
};

exports.getAllCategoriesFacts = (req, res) => {
    try {
        const allFacts = {};
        const categories = Object.keys(facts);

        categories.forEach(category => {
            const categoryFacts = facts[category];
            if (categoryFacts && categoryFacts.length > 0) {
                const randomIndex = Math.floor(Math.random() * categoryFacts.length);
                allFacts[category] = categoryFacts[randomIndex];
            }
        });

        res.json({ facts: allFacts });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos curiosos de todas las categorías." });
    }
};
