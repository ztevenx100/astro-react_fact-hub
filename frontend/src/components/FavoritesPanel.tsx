import React, { useState } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { useSearch } from '../hooks/useSearch';
import SearchBar from './SearchBar';
import FavoriteButton from './FavoriteButton';

const FavoritesPanel: React.FC = () => {
    const { favorites, getFavoritesByType, clearFavorites } = useFavorites();
    const [activeFilter, setActiveFilter] = useState<'all' | 'fact' | 'phrase'>('all');
    
    const filteredFavorites = activeFilter === 'all' 
        ? favorites 
        : getFavoritesByType(activeFilter);

    const {
        searchTerm,
        setSearchTerm,
        filteredItems,
        clearSearch
    } = useSearch(filteredFavorites.map(fav => ({
        id: fav.id,
        content: fav.content,
        category: fav.category,
        language: fav.language,
        translation: fav.translation,
        type: fav.type
    })));

    if (favorites.length === 0) {
        return (
            <div className="max-w-4xl mx-auto text-center py-16 animate-fade-in">
                <div className="text-6xl mb-6">💝</div>
                <h3 className="text-2xl font-bold text-white mb-4">No tienes favoritos aún</h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explora los datos curiosos y frases, y guarda tus favoritos haciendo clic en el ❤️
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span>🎯</span>
                        <span>Datos curiosos</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span>🌍</span>
                        <span>Frases de idiomas</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">❤️ Mis Favoritos</h2>
                <p className="text-gray-400">
                    Tienes {favorites.length} {favorites.length === 1 ? 'favorito' : 'favoritos'} guardados
                </p>
            </div>

            {/* Controls */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    {/* Search */}
                    <div className="flex-1 w-full sm:max-w-md">
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            placeholder="Buscar en favoritos..."
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex items-center space-x-2">
                        {[
                            { id: 'all', label: 'Todos', icon: '📋' },
                            { id: 'fact', label: 'Datos', icon: '🎯' },
                            { id: 'phrase', label: 'Frases', icon: '🌍' }
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeFilter === filter.id
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                                }`}
                            >
                                <span className="mr-1">{filter.icon}</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Clear All */}
                    <button
                        onClick={clearFavorites}
                        className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors duration-200 text-sm font-medium"
                    >
                        🗑️ Limpiar todo
                    </button>
                </div>
            </div>

            {/* Results */}
            {filteredItems.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-400">
                        {searchTerm ? 'No se encontraron favoritos que coincidan con tu búsqueda' : 'No hay favoritos en esta categoría'}
                    </p>
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="mt-2 text-primary-400 hover:text-primary-300"
                        >
                            Limpiar búsqueda
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => {
                        const favorite = favorites.find(f => f.id === item.id)!;
                        return (
                            <div
                                key={favorite.id}
                                className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl">
                                            {favorite.type === 'fact' ? '🎯' : '🌍'}
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-400">
                                                {favorite.type === 'fact' ? favorite.category : favorite.language}
                                            </p>
                                        </div>
                                    </div>
                                    <FavoriteButton
                                        item={{
                                            type: favorite.type,
                                            content: favorite.content,
                                            category: favorite.category,
                                            language: favorite.language,
                                            translation: favorite.translation,
                                            pronunciation: favorite.pronunciation
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <p className="text-white leading-relaxed">
                                        {favorite.content}
                                    </p>
                                    
                                    {favorite.translation && (
                                        <div className="bg-emerald-900/20 rounded-lg p-3 border border-emerald-700/30">
                                            <p className="text-emerald-300 text-sm font-medium mb-1">
                                                📝 Traducción:
                                            </p>
                                            <p className="text-emerald-100">{favorite.translation}</p>
                                        </div>
                                    )}

                                    {favorite.pronunciation && (
                                        <p className="text-gray-400 text-sm">
                                            🔊 {favorite.pronunciation}
                                        </p>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="mt-4 pt-3 border-t border-dark-700/50">
                                    <p className="text-xs text-gray-500">
                                        Guardado {new Date(favorite.timestamp).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FavoritesPanel;
