const facts = {
    matematicas: "Un número primo es un número natural mayor que 1 que no tiene divisores positivos más que 1 y él mismo.",
    ciencias: "El cuerpo humano adulto tiene 206 huesos.",
    'historia-politica': "La Segunda Guerra Mundial comenzó en 1939.",
    'tecnologia-innovacion': "El primer programador de computadoras fue Ada Lovelace.",
    'diseño-ingenieria': "La Torre Eiffel fue diseñada por Gustave Eiffel.",
    'supervivencia-medicina': "La penicilina fue descubierta por Alexander Fleming en 1928."
};

exports.getFact = (req, res) => {
    const { category } = req.params;
    const fact = facts[category] || "Categoría no encontrada. Por favor, elige una de las categorías disponibles.";
    res.json({ fact });
};
