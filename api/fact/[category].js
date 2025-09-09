const facts = {
    matematicas: [
        "El número cero fue inventado por los antiguos matemáticos indios alrededor del siglo V.",
        "La secuencia de Fibonacci aparece frecuentemente en la naturaleza, como en las espirales de las conchas.",
        "π (pi) es un número irracional que ha sido calculado con más de 31 billones de dígitos decimales.",
        "El problema de los cuatro colores, que pregunta si cualquier mapa puede ser coloreado con solo cuatro colores, fue resuelto usando computadoras."
    ],
    ciencia: [
        "El ADN humano es 99.9% idéntico entre todas las personas.",
        "Un rayo puede alcanzar temperaturas de hasta 30,000 grados Celsius, cinco veces más caliente que la superficie del Sol.",
        "Los pulpos tienen tres corazones y sangre azul.",
        "El agua puede hervir y congelarse al mismo tiempo bajo condiciones específicas de presión."
    ],
    historia: [
        "Cleopatra vivió más cerca en el tiempo de la llegada del hombre a la Luna que de la construcción de las pirámides de Giza.",
        "Los vikingos llegaron a América del Norte 500 años antes que Cristóbal Colón.",
        "La Gran Muralla China no es visible desde el espacio a simple vista, contrario a la creencia popular.",
        "El primer computer bug fue literalmente un insecto: una polilla atrapada en una computadora en 1947."
    ],
    espacio: [
        "Un día en Venus dura más que un año venusiano.",
        "Júpiter tiene más de 70 lunas conocidas.",
        "El espacio exterior no está completamente vacío; contiene aproximadamente un átomo por centímetro cúbico.",
        "Si pudieras conducir un auto directamente hacia arriba, llegarías al espacio en aproximadamente una hora."
    ],
    naturaleza: [
        "Los hongos son más cercanos evolutivamente a los animales que a las plantas.",
        "Un solo árbol puede absorber hasta 22 kilos de CO2 por año.",
        "Los delfines tienen nombres específicos (silbidos únicos) que usan para identificarse.",
        "Las medusas han existido por más de 650 millones de años, mucho antes que los dinosaurios."
    ],
    tecnologia: [
        "El primer mensaje de correo electrónico fue enviado en 1971.",
        "Hay más de 5 mil millones de usuarios de internet en el mundo.",
        "El primer video subido a YouTube fue 'Me at the zoo' en abril de 2005.",
        "La primera cámara digital fue inventada en 1975 y pesaba 3.6 kilos."
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

    const { category } = req.query;
    const categoryFacts = facts[category];

    if (categoryFacts && categoryFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryFacts.length);
        const fact = categoryFacts[randomIndex];
        res.json({ fact });
    } else {
        res.status(404).json({ 
            fact: "Categoría no encontrada o no hay datos disponibles. Por favor, elige una de las categorías disponibles." 
        });
    }
};
