import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

interface FavoriteButtonProps {
    item: {
        type: 'fact' | 'phrase';
        content: string;
        category?: string;
        language?: string;
        translation?: string;
        pronunciation?: string;
    };
    className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ item, className = "" }) => {
    const { addFavorite, removeFavorite, isFavorite, favorites } = useFavorites();
    const isItemFavorite = isFavorite(item.content);

    const handleToggleFavorite = () => {
        if (isItemFavorite) {
            const favoriteItem = favorites.find(fav => fav.content === item.content);
            if (favoriteItem) {
                removeFavorite(favoriteItem.id);
            }
        } else {
            addFavorite(item);
        }
    };

    return (
        <button
            onClick={handleToggleFavorite}
            className={`group relative p-2 rounded-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${
                isItemFavorite 
                    ? 'text-red-400 hover:text-red-300' 
                    : 'text-gray-400 hover:text-red-400'
            } ${className}`}
            aria-label={isItemFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            title={isItemFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
            {/* Heart Icon */}
            <svg 
                className={`w-6 h-6 transition-all duration-300 ${
                    isItemFavorite ? 'fill-current' : 'stroke-current fill-none'
                }`}
                viewBox="0 0 24 24" 
                strokeWidth={2}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
            </svg>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {isItemFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </div>

            {/* Animation Effect */}
            {isItemFavorite && (
                <div className="absolute inset-0 rounded-lg bg-red-400 bg-opacity-20 animate-ping"></div>
            )}
        </button>
    );
};

export default FavoriteButton;
