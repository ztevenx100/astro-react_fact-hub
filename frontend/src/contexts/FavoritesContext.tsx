import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoriteItem {
    id: string;
    type: 'fact' | 'phrase';
    content: string;
    category?: string;
    language?: string;
    translation?: string;
    pronunciation?: string;
    timestamp: number;
}

interface FavoritesContextType {
    favorites: FavoriteItem[];
    addFavorite: (item: Omit<FavoriteItem, 'id' | 'timestamp'>) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (content: string) => boolean;
    getFavoritesByType: (type: 'fact' | 'phrase') => FavoriteItem[];
    clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

interface FavoritesProviderProps {
    children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        // Cargar favoritos desde localStorage
        const savedFavorites = localStorage.getItem('fact-hub-favorites');
        if (savedFavorites) {
            try {
                setFavorites(JSON.parse(savedFavorites));
            } catch (error) {
                console.error('Error loading favorites:', error);
            }
        }
    }, []);

    useEffect(() => {
        // Guardar favoritos en localStorage
        localStorage.setItem('fact-hub-favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (item: Omit<FavoriteItem, 'id' | 'timestamp'>) => {
        const newFavorite: FavoriteItem = {
            ...item,
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            timestamp: Date.now()
        };

        setFavorites(prev => {
            // Evitar duplicados
            const exists = prev.some(fav => fav.content === item.content);
            if (exists) return prev;
            return [newFavorite, ...prev];
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites(prev => prev.filter(fav => fav.id !== id));
    };

    const isFavorite = (content: string) => {
        return favorites.some(fav => fav.content === content);
    };

    const getFavoritesByType = (type: 'fact' | 'phrase') => {
        return favorites.filter(fav => fav.type === type);
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite,
            getFavoritesByType,
            clearFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};
