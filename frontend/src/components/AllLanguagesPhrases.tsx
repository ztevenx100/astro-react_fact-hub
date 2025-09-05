import React, { useState, useCallback } from 'react';
import { getAllLanguagesPhrases } from '../services/api';

interface LanguagePhrase {
    language: string;
    phrase: string;
    translation: string;
    pronunciation: string;
}

interface AllLanguagesPhrases {
    [key: string]: LanguagePhrase;
}

const languageInfo = {
    'espanol': { name: 'Español', flag: '🇪🇸', color: 'from-red-600 to-red-500' },
    'ingles': { name: 'English', flag: '🇺🇸', color: 'from-blue-600 to-blue-500' },
    'frances': { name: 'Français', flag: '🇫🇷', color: 'from-indigo-600 to-indigo-500' },
    'aleman': { name: 'Deutsch', flag: '🇩🇪', color: 'from-gray-600 to-gray-500' },
    'italiano': { name: 'Italiano', flag: '🇮🇹', color: 'from-green-600 to-green-500' },
    'portugues': { name: 'Português', flag: '🇧🇷', color: 'from-yellow-600 to-yellow-500' },
    'japones': { name: '日本語', flag: '🇯🇵', color: 'from-pink-600 to-pink-500' },
    'coreano': { name: '한국어', flag: '🇰🇷', color: 'from-purple-600 to-purple-500' },
    'chino': { name: '中文', flag: '🇨🇳', color: 'from-orange-600 to-orange-500' },
    'ruso': { name: 'Русский', flag: '🇷🇺', color: 'from-cyan-600 to-cyan-500' }
};

const AllLanguagesPhrases = () => {
    const [phrases, setPhrases] = useState<AllLanguagesPhrases>({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleGenerateAllPhrases = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await getAllLanguagesPhrases();
            setPhrases(data.phrases);
            setHasGenerated(true);
        } catch (error) {
            console.error('Error fetching phrases:', error);
            setPhrases({});
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            {/* Botón principal */}
            <div className="text-center mb-8">
                <button 
                    onClick={handleGenerateAllPhrases} 
                    disabled={isLoading}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl shadow-lg hover:from-emerald-500 hover:to-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
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
                                <span>🌍</span>
                                <span>{hasGenerated ? 'Generar Nuevas Frases' : 'Generar Frases de Todos los Idiomas'}</span>
                            </>
                        )}
                    </span>
                </button>
            </div>

            {/* Grid de frases por idioma */}
            {hasGenerated && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Object.entries(languageInfo).map(([languageKey, language]) => {
                        const phraseData = phrases[languageKey];
                        if (!phraseData) return null;

                        return (
                            <div 
                                key={languageKey}
                                className="group bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-[1.02] hover:border-emerald-500/30"
                            >
                                {/* Header del idioma */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${language.color} flex items-center justify-center text-2xl shadow-lg`}>
                                        {language.flag}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                                            {language.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido de la frase */}
                                <div className="space-y-4">
                                    {isLoading ? (
                                        <div className="animate-pulse space-y-3">
                                            <div className="h-4 bg-dark-600 rounded-lg"></div>
                                            <div className="h-4 bg-dark-600 rounded-lg w-4/5"></div>
                                            <div className="h-3 bg-dark-600 rounded-lg w-3/5"></div>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Frase original */}
                                            <div className="bg-dark-700/50 rounded-xl p-4 border border-dark-600/50">
                                                <p className="text-white font-medium text-base mb-2 leading-relaxed">
                                                    {phraseData.phrase}
                                                </p>
                                                <p className="text-gray-400 text-sm italic">
                                                    🔊 {phraseData.pronunciation}
                                                </p>
                                            </div>

                                            {/* Traducción */}
                                            <div className="bg-emerald-900/20 rounded-xl p-4 border border-emerald-700/30">
                                                <p className="text-emerald-300 text-sm font-medium">
                                                    📝 Traducción:
                                                </p>
                                                <p className="text-emerald-100 font-medium mt-1">
                                                    {phraseData.translation}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Indicador de idioma en la parte inferior */}
                                <div className="mt-4 pt-4 border-t border-dark-700/50">
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${language.color} text-white shadow-lg`}>
                                        <span className="mr-1">{language.flag}</span>
                                        {language.name}
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
                    <div className="text-6xl mb-6">🌍</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Descubre Frases de Todos los Idiomas</h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Haz clic en el botón para generar una frase útil aleatoria de cada uno de los 10 idiomas disponibles, 
                        con pronunciación y traducción incluida.
                    </p>
                    <div className="mt-6 flex justify-center flex-wrap gap-2">
                        {Object.entries(languageInfo).map(([key, lang]) => (
                            <span key={key} className="inline-flex items-center px-3 py-1 bg-dark-700/50 rounded-full text-sm text-gray-300">
                                <span className="mr-1">{lang.flag}</span>
                                {lang.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllLanguagesPhrases;
