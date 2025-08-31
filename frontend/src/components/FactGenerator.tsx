import React, { useState, useCallback } from 'react';
import CategoryMenu from './CategoryMenu';
import FactCard from './FactCard';
import { getFact } from '../services/api';

const FactGenerator = () => {
    const [category, setCategory] = useState('matematicas');
    const [fact, setFact] = useState('Haz clic en el botón para generar un dato curioso.');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateFact = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await getFact(category);
            setFact(data.fact);
        } catch (error) {
            console.error('Error fetching fact:', error);
            setFact('No se pudo cargar el dato curioso. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    }, [category]);

    return (
        <div>
            <CategoryMenu selectedCategory={category} onCategoryChange={setCategory} />
            <FactCard fact={fact} isLoading={isLoading} />
            <button onClick={handleGenerateFact} disabled={isLoading}>
                {isLoading ? 'Generando...' : 'Generar dato curioso'}
            </button>
        </div>
    );
};

export default FactGenerator;
