import React from 'react';
import FavoriteButton from './FavoriteButton';

interface FactCardProps {
    fact: string;
    isLoading: boolean;
    category?: string;
}

const FactCard: React.FC<FactCardProps> = ({ fact, isLoading, category = 'matematicas' }) => {
    return (
        <div className="relative">
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl min-h-[200px] flex items-center justify-center">
                {isLoading ? (
                    <div className="text-center space-y-4">
                        {/* Spinner de carga */}
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-primary-600/30 border-t-primary-500 rounded-full animate-spin mx-auto"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        {/* Texto de carga */}
                        <div className="space-y-2">
                            <p className="text-primary-300 font-medium text-lg animate-pulse">
                                Generando dato curioso...
                            </p>
                            <div className="flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full">
                        {/* Icono decorativo */}
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-lg">
                                <span className="text-3xl">💡</span>
                            </div>
                        </div>

                        {/* Contenido del dato curioso */}
                        <div className="text-center space-y-4 animate-slide-up">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                    Dato Curioso
                                </h3>
                                {fact && fact !== 'Haz clic en el botón para generar un dato curioso.' && (
                                    <FavoriteButton 
                                        item={{ 
                                            content: fact, 
                                            type: 'fact' as const, 
                                            category 
                                        }} 
                                    />
                                )}
                            </div>
                            
                            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-100 leading-relaxed max-w-4xl mx-auto">
                                "{fact}"
                            </blockquote>
                        </div>

                        {/* Decoración inferior */}
                        <div className="mt-8 pt-6 border-t border-dark-700/50">
                            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span>Fact Hub</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-400/10 rounded-3xl opacity-50 blur-xl -z-10"></div>
        </div>
    );
};

export default FactCard;
