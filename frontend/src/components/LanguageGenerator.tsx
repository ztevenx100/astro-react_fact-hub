import React, { useState, useCallback } from 'react';
import { getLanguagePhrase } from '../services/api';

// Definimos el tipo para los idiomas disponibles
type Language = 'espanol' | 'ingles' | 'frances' | 'aleman' | 'italiano' | 'portugues' | 'japones' | 'chino' | 'ruso' | 'latin' | 'error';

// Definimos la interfaz para los datos de idioma
interface LanguageData {
    language: string;
    phrase: string;
    translation: string;
    pronunciation: string;
}

const LanguageGenerator = () => {
    const [languageData, setLanguageData] = useState<LanguageData>({
        language: 'espanol',
        phrase: 'Haz clic en el botón para generar una frase en un idioma aleatorio.',
        translation: 'Click the button to generate a phrase in a random language.',
        pronunciation: 'Pulsa el botón...'
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGeneratePhrase = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await getLanguagePhrase();
            setLanguageData(data);
        } catch (error) {
            console.error('Error fetching language phrase:', error);
            setLanguageData({
                language: 'error',
                phrase: 'No se pudo cargar la frase.',
                translation: 'Could not load the phrase.',
                pronunciation: 'Error'
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getLanguageFlag = (language: string): string => {
        const flags: Record<Language, string> = {
            espanol: '🇪🇸',
            ingles: '🇺🇸',
            frances: '🇫🇷',
            aleman: '🇩🇪',
            italiano: '🇮🇹',
            portugues: '🇵🇹',
            japones: '🇯🇵',
            chino: '🇨🇳',
            ruso: '🇷🇺',
            latin: '🏛️',
            error: '❌'
        };
        return flags[language as Language] || '🌍';
    };

    const getLanguageDisplayName = (language: string): string => {
        const names: Record<Language, string> = {
            espanol: 'Español',
            ingles: 'Inglés',
            frances: 'Francés',
            aleman: 'Alemán',
            italiano: 'Italiano',
            portugues: 'Portugués',
            japones: 'Japonés',
            chino: 'Chino',
            ruso: 'Ruso',
            latin: 'Latín',
            error: 'Error'
        };
        return names[language as Language] || language.charAt(0).toUpperCase() + language.slice(1);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Botón principal */}
            <div className="text-center">
                <button 
                    onClick={handleGeneratePhrase} 
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
                                <span className="text-2xl">🎲</span>
                                <span>Generar Frase Aleatoria</span>
                            </>
                        )}
                    </span>
                    
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                </button>
            </div>

            {/* Tarjeta principal de la frase */}
            <div className="relative transform transition-all duration-500 hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                    {isLoading ? (
                        <div className="text-center space-y-6 py-8">
                            {/* Spinner de carga */}
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-emerald-600/30 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-emerald-300 font-medium text-lg animate-pulse">
                                    Buscando una frase fascinante...
                                </p>
                                <div className="flex justify-center space-x-1">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-slide-up">
                            {/* Header con bandera e idioma */}
                            <div className="text-center">
                                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 rounded-2xl border border-emerald-500/30">
                                    <span className="text-4xl animate-bounce-gentle">
                                        {getLanguageFlag(languageData.language)}
                                    </span>
                                    <h2 className="text-2xl font-bold text-emerald-300">
                                        {getLanguageDisplayName(languageData.language)}
                                    </h2>
                                </div>
                            </div>
                            
                            {/* Contenido de la frase */}
                            <div className="space-y-6 text-center">
                                {/* Frase principal */}
                                <div className="space-y-2">
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                        📝 Frase Original
                                    </h3>
                                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-100 leading-relaxed">
                                        "{languageData.phrase}"
                                    </blockquote>
                                </div>
                                
                                {/* Traducción */}
                                <div className="space-y-2 pt-4 border-t border-dark-700/50">
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                        🔄 Traducción al Español
                                    </h3>
                                    <p className="text-lg sm:text-xl text-gray-300 italic">
                                        "{languageData.translation}"
                                    </p>
                                </div>
                                
                                {/* Pronunciación */}
                                <div className="space-y-2 pt-4 border-t border-dark-700/50">
                                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                        🔊 Pronunciación Aproximada
                                    </h3>
                                    <p className="text-base sm:text-lg text-emerald-300 font-mono bg-dark-800/50 px-4 py-2 rounded-xl inline-block">
                                        {languageData.pronunciation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Efecto de brillo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-emerald-400/10 rounded-3xl opacity-50 blur-xl -z-10"></div>
            </div>

            {/* Información adicional */}
            <div className="text-center space-y-4 text-gray-400 text-sm animate-pulse-soft">
                <div className="bg-dark-800/30 rounded-2xl p-6 border border-dark-700/30">
                    <p className="mb-3">
                        💡 <span className="font-medium text-emerald-300">Tip:</span> Cada clic te mostrará una frase aleatoria en un idioma diferente
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-lg">🇪🇸 Español</span>
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-lg">🇺🇸 Inglés</span>
                        <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-lg">🇫🇷 Francés</span>
                        <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded-lg">🇩🇪 Alemán</span>
                        <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded-lg">🇮🇹 Italiano</span>
                        <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-lg">🇵🇹 Portugués</span>
                        <span className="px-2 py-1 bg-pink-600/20 text-pink-300 rounded-lg">🇯🇵 Japonés</span>
                        <span className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-lg">🇨🇳 Chino</span>
                        <span className="px-2 py-1 bg-indigo-600/20 text-indigo-300 rounded-lg">🇷🇺 Ruso</span>
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-lg">🏛️ Latín</span>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default LanguageGenerator;
