import React, { useState } from 'react';
import FactGenerator from './FactGenerator';
import LanguageGenerator from './LanguageGenerator';
import AllCategoriesFacts from './AllCategoriesFacts';
import AllLanguagesPhrases from './AllLanguagesPhrases';

type TabType = 'facts' | 'languages' | 'all-facts' | 'all-languages';

interface Tab {
    id: TabType;
    label: string;
    icon: string;
    color: string;
    description: string;
}

const tabs: Tab[] = [
    {
        id: 'facts',
        label: 'Datos por Categoría',
        icon: '🎯',
        color: 'primary',
        description: 'Elige una categoría específica para datos curiosos'
    },
    {
        id: 'all-facts',
        label: 'Todas las Categorías',
        icon: '🎲',
        color: 'purple',
        description: 'Genera datos curiosos de las 6 categorías simultáneamente'
    },
    {
        id: 'languages',
        label: 'Frases por Idioma',
        icon: '🌍',
        color: 'emerald',
        description: 'Aprende frases útiles eligiendo un idioma específico'
    },
    {
        id: 'all-languages',
        label: 'Todos los Idiomas',
        icon: '🗺️',
        color: 'teal',
        description: 'Descubre frases de los 10 idiomas disponibles al mismo tiempo'
    }
];

const MainHub: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('facts');

    const getTabStyles = (tabId: TabType, isActive: boolean) => {
        const baseStyles = "relative px-2 sm:px-3 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 text-xs sm:text-sm";
        
        if (tabId === 'facts') {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 focus:ring-primary-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-primary-500/30`;
        } else if (tabId === 'all-facts') {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25 focus:ring-purple-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-purple-500/30`;
        } else if (tabId === 'languages') {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-emerald-500/30`;
        } else {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-500/25 focus:ring-teal-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-teal-500/30`;
        }
    };

    const getCurrentGradient = () => {
        if (activeTab === 'facts') return 'from-primary-400 via-primary-300 to-primary-500';
        if (activeTab === 'all-facts') return 'from-purple-400 via-purple-300 to-purple-500';
        if (activeTab === 'languages') return 'from-emerald-400 via-emerald-300 to-emerald-500';
        return 'from-teal-400 via-teal-300 to-teal-500';
    };

    const getCurrentAccentColor = () => {
        if (activeTab === 'facts') return 'text-primary-400';
        if (activeTab === 'all-facts') return 'text-purple-400';
        if (activeTab === 'languages') return 'text-emerald-400';
        return 'text-teal-400';
    };

    const getCurrentBadges = () => {
        if (activeTab === 'facts') {
            return [
                { text: '✨ Más de 20 datos únicos', color: 'bg-primary-600/10' },
                { text: '📚 6 categorías diferentes', color: 'bg-primary-600/10' },
                { text: '🎯 Selección específica', color: 'bg-primary-600/10' }
            ];
        } else if (activeTab === 'all-facts') {
            return [
                { text: '🎲 Datos de las 6 categorías', color: 'bg-purple-600/10' },
                { text: '⚡ Generación simultánea', color: 'bg-purple-600/10' },
                { text: '🎯 Vista completa', color: 'bg-purple-600/10' }
            ];
        } else if (activeTab === 'languages') {
            return [
                { text: '🗣️ 50+ frases útiles', color: 'bg-emerald-600/10' },
                { text: '🌎 10 idiomas', color: 'bg-emerald-600/10' },
                { text: '🔊 Con pronunciación', color: 'bg-emerald-600/10' }
            ];
        } else {
            return [
                { text: '🌍 Frases de 10 idiomas', color: 'bg-teal-600/10' },
                { text: '🔊 Pronunciación incluida', color: 'bg-teal-600/10' },
                { text: '📝 Traducción completa', color: 'bg-teal-600/10' }
            ];
        }
    };

    const activeTabData = tabs.find(tab => tab.id === activeTab)!;

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Principal */}
            <div className="text-center space-y-6">
                <div className="space-y-4">
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${getCurrentGradient()} bg-clip-text text-transparent animate-pulse-soft`}>
                        {activeTabData.icon} Fact Hub
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {activeTabData.description}
                        <span className={`${getCurrentAccentColor()} font-medium`}> ¡Todo en un solo lugar!</span>
                    </p>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 text-sm text-gray-500">
                    {getCurrentBadges().map((badge, index) => (
                        <span key={index} className={`px-3 py-1 ${badge.color} rounded-full`}>
                            {badge.text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Navegación por Pestañas */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-2 shadow-xl">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={getTabStyles(tab.id, activeTab === tab.id)}
                            >
                                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                                    <span className="text-base sm:text-lg">{tab.icon}</span>
                                    <div className="text-left">
                                        <div className="font-semibold text-xs sm:text-sm">{tab.label}</div>
                                        <div className="text-xs opacity-75 font-normal hidden sm:block">
                                            {tab.id === 'facts' ? '6 categorías' : 
                                             tab.id === 'all-facts' ? 'Todos juntos' : 
                                             tab.id === 'languages' ? '10 idiomas' : 'Vista global'}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Indicador de pestaña activa */}
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contenido de las Pestañas */}
            <div className="min-h-[600px]">
                <div className={`transition-all duration-500 transform ${
                    activeTab === 'facts' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'
                }`}>
                    {activeTab === 'facts' && <FactGenerator />}
                </div>
                
                <div className={`transition-all duration-500 transform ${
                    activeTab === 'all-facts' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'
                }`}>
                    {activeTab === 'all-facts' && <AllCategoriesFacts />}
                </div>
                
                <div className={`transition-all duration-500 transform ${
                    activeTab === 'languages' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'
                }`}>
                    {activeTab === 'languages' && <LanguageGenerator />}
                </div>
                
                <div className={`transition-all duration-500 transform ${
                    activeTab === 'all-languages' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'
                }`}>
                    {activeTab === 'all-languages' && <AllLanguagesPhrases />}
                </div>
            </div>

            {/* Información adicional */}
            <div className="text-center text-gray-400 text-sm space-y-2 animate-pulse-soft">
                <p>💡 <span className="font-medium">Consejo:</span> Alterna entre las pestañas para explorar diferentes tipos de contenido</p>
                <p>🚀 Contenido actualizado regularmente con nuevos datos curiosos y frases</p>
            </div>
        </div>
    );
};

export default MainHub;
