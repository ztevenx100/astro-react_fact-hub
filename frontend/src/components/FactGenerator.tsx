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
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Selector de categoría */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <CategoryMenu selectedCategory={category} onCategoryChange={setCategory} />
            </div>

            {/* Tarjeta del dato curioso */}
            <div className="transform transition-all duration-500 hover:scale-[1.02]">
                <FactCard fact={fact} isLoading={isLoading} category={category} />
            </div>

            {/* Botón principal */}
            <div className="text-center">
                <button 
                    onClick={handleGenerateFact} 
                    disabled={isLoading}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-lg hover:from-primary-500 hover:to-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
                >
                    <span className="relative flex items-center space-x-3">
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Generando...</span>
                            </>
                        ) : (
                            <>
                                <span className="text-2xl">🎲</span>
                                <span>Generar Dato Curioso</span>
                            </>
                        )}
                    </span>
                    
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                </button>
            </div>

            {/* Información adicional */}
            <div className="text-center space-y-2 text-gray-400 text-sm animate-pulse-soft">
                <p>💡 <span className="font-medium">Tip:</span> Cambia la categoría para explorar diferentes tipos de datos curiosos</p>
                <p>🎯 Más de 20 datos curiosos disponibles en 6 categorías diferentes</p>
            </div>
        </div>
    );
};

export default FactGenerator;
