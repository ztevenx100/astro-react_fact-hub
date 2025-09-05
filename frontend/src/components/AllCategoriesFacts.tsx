import React, { useState, useCallback } from 'react';
import { getAllCategoriesFacts } from '../services/api';

interface CategoryFacts {
    [key: string]: string;
}

const categoryInfo = {
    'matematicas': { name: 'Matemáticas', icon: '🔢', color: 'from-blue-600 to-blue-500' },
    'ciencias': { name: 'Ciencias', icon: '🧪', color: 'from-green-600 to-green-500' },
    'historia-politica': { name: 'Historia y Política', icon: '🏛️', color: 'from-purple-600 to-purple-500' },
    'tecnologia-innovacion': { name: 'Tecnología e Innovación', icon: '💻', color: 'from-orange-600 to-orange-500' },
    'diseño-ingenieria': { name: 'Diseño e Ingeniería', icon: '⚙️', color: 'from-red-600 to-red-500' },
    'supervivencia-medicina': { name: 'Supervivencia y Medicina', icon: '🏥', color: 'from-teal-600 to-teal-500' }
};

const AllCategoriesFacts = () => {
    const [facts, setFacts] = useState<CategoryFacts>({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleGenerateAllFacts = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await getAllCategoriesFacts();
            setFacts(data.facts);
            setHasGenerated(true);
        } catch (error) {
            console.error('Error fetching facts:', error);
            setFacts({});
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            {/* Botón principal */}
            <div className="text-center mb-8">
                <button 
                    onClick={handleGenerateAllFacts} 
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
                                <span>🎲</span>
                                <span>{hasGenerated ? 'Generar Nuevos Datos' : 'Generar Datos de Todas las Categorías'}</span>
                            </>
                        )}
                    </span>
                </button>
            </div>

            {/* Grid de hechos por categoría */}
            {hasGenerated && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(categoryInfo).map(([categoryKey, category]) => {
                        const fact = facts[categoryKey];
                        if (!fact) return null;

                        return (
                            <div 
                                key={categoryKey}
                                className="group bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:scale-[1.02] hover:border-primary-500/30"
                            >
                                {/* Header de la categoría */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-200">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido del hecho */}
                                <div className="space-y-4">
                                    {isLoading ? (
                                        <div className="animate-pulse space-y-3">
                                            <div className="h-4 bg-dark-600 rounded-lg"></div>
                                            <div className="h-4 bg-dark-600 rounded-lg w-4/5"></div>
                                            <div className="h-4 bg-dark-600 rounded-lg w-3/5"></div>
                                        </div>
                                    ) : (
                                        <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-200">
                                            {fact}
                                        </p>
                                    )}
                                </div>

                                {/* Indicador de categoría en la parte inferior */}
                                <div className="mt-4 pt-4 border-t border-dark-700/50">
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                                        <span className="mr-1">{category.icon}</span>
                                        {category.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Mensaje inicial */}
            {!hasGenerated && (
                <div className="text-center py-16">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Descubre Datos de Todas las Categorías</h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Haz clic en el botón para generar un dato curioso aleatorio de cada una de las 6 categorías disponibles.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllCategoriesFacts;
