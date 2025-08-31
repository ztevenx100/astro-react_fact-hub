import React, { useState } from 'react';
import FactGenerator from './FactGenerator';
import LanguageGenerator from './LanguageGenerator';

type TabType = 'facts' | 'languages';

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
        label: 'Datos Curiosos',
        icon: '🎯',
        color: 'primary',
        description: 'Descubre conocimiento fascinante en diferentes categorías'
    },
    {
        id: 'languages',
        label: 'Frases del Mundo',
        icon: '🌍',
        color: 'emerald',
        description: 'Aprende frases útiles en 10 idiomas diferentes'
    }
];

const MainHub: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('facts');

    const getTabStyles = (tabId: TabType, isActive: boolean) => {
        const baseStyles = "relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4";
        
        if (tabId === 'facts') {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 focus:ring-primary-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-primary-500/30`;
        } else {
            return isActive 
                ? `${baseStyles} bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-500/50`
                : `${baseStyles} bg-dark-700/50 text-gray-300 hover:bg-dark-600/50 hover:text-white border border-dark-600 focus:ring-emerald-500/30`;
        }
    };

    const getCurrentGradient = () => {
        return activeTab === 'facts' 
            ? 'from-primary-400 via-primary-300 to-primary-500'
            : 'from-emerald-400 via-emerald-300 to-emerald-500';
    };

    const getCurrentAccentColor = () => {
        return activeTab === 'facts' ? 'text-primary-400' : 'text-emerald-400';
    };

    const getCurrentBadges = () => {
        if (activeTab === 'facts') {
            return [
                { text: '✨ Más de 20 datos únicos', color: 'bg-primary-600/10' },
                { text: '📚 6 categorías diferentes', color: 'bg-primary-600/10' },
                { text: '🎲 Totalmente aleatorio', color: 'bg-primary-600/10' }
            ];
        } else {
            return [
                { text: '🗣️ 50+ frases útiles', color: 'bg-emerald-600/10' },
                { text: '🌎 10 idiomas', color: 'bg-emerald-600/10' },
                { text: '🔊 Con pronunciación', color: 'bg-emerald-600/10' }
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
            <div className="max-w-2xl mx-auto">
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-2 shadow-xl">
                    <div className="grid grid-cols-2 gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={getTabStyles(tab.id, activeTab === tab.id)}
                            >
                                <div className="flex items-center justify-center space-x-3">
                                    <span className="text-2xl">{tab.icon}</span>
                                    <div className="text-left hidden sm:block">
                                        <div className="font-semibold">{tab.label}</div>
                                        <div className="text-xs opacity-75 font-normal">
                                            {tab.id === 'facts' ? '6 categorías' : '10 idiomas'}
                                        </div>
                                    </div>
                                    <div className="block sm:hidden">
                                        <div className="font-semibold text-sm">{tab.label}</div>
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
                    activeTab === 'languages' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'
                }`}>
                    {activeTab === 'languages' && <LanguageGenerator />}
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
