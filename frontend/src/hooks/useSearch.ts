import { useState, useMemo } from 'react';

interface SearchableItem {
    id: string;
    content: string;
    category?: string;
    language?: string;
    translation?: string;
    type: 'fact' | 'phrase';
}

interface UseSearchResult<T> {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    filteredItems: T[];
    activeFilters: string[];
    setActiveFilters: (filters: string[]) => void;
    availableFilters: string[];
    clearSearch: () => void;
}

export function useSearch<T extends SearchableItem>(
    items: T[],
    searchFields: (keyof T)[] = ['content', 'category', 'language', 'translation']
): UseSearchResult<T> {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const availableFilters = useMemo(() => {
        const filters = new Set<string>();
        items.forEach(item => {
            if (item.category) filters.add(item.category);
            if (item.language) filters.add(item.language);
            if (item.type) filters.add(item.type);
        });
        return Array.from(filters).sort();
    }, [items]);

    const filteredItems = useMemo(() => {
        let result = items;

        // Aplicar filtros
        if (activeFilters.length > 0) {
            result = result.filter(item => {
                return activeFilters.some(filter => 
                    item.category === filter || 
                    item.language === filter || 
                    item.type === filter
                );
            });
        }

        // Aplicar búsqueda de texto
        if (searchTerm.trim()) {
            const lowerSearchTerm = searchTerm.toLowerCase();
            result = result.filter(item => {
                return searchFields.some(field => {
                    const value = item[field];
                    return value && 
                           typeof value === 'string' && 
                           value.toLowerCase().includes(lowerSearchTerm);
                });
            });
        }

        return result;
    }, [items, searchTerm, activeFilters, searchFields]);

    const clearSearch = () => {
        setSearchTerm('');
        setActiveFilters([]);
    };

    return {
        searchTerm,
        setSearchTerm,
        filteredItems,
        activeFilters,
        setActiveFilters,
        availableFilters,
        clearSearch
    };
}
