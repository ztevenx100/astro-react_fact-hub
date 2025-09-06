import React from 'react';
import MainHub from './MainHub';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../contexts/ThemeContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <FavoritesProvider>
                <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-white transition-colors duration-300">
                    {/* Header with Theme Toggle */}
                    <header className="fixed top-0 right-0 z-50 p-4">
                        <ThemeToggle />
                    </header>
                    
                    {/* Main Content */}
                    <main className="container mx-auto px-4 py-8 pt-20">
                        <MainHub />
                    </main>
                    
                    {/* Footer */}
                    <footer className="text-center text-gray-400 text-sm py-8 border-t border-dark-700/30">
                        <div className="space-y-2">
                            <p>🎯 <span className="font-medium">Fact Hub</span> - Tu fuente de conocimiento y curiosidades</p>
                            <p className="text-xs">Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS</p>
                        </div>
                    </footer>
                </div>
            </FavoritesProvider>
        </ThemeProvider>
    );
};

export default App;
