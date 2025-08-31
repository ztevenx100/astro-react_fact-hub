import React from 'react';

interface CategoryMenuProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    { value: 'matematicas', label: 'Matemáticas', icon: '🔢', color: 'from-blue-500 to-blue-600' },
    { value: 'ciencias', label: 'Ciencias', icon: '🧪', color: 'from-green-500 to-green-600' },
    { value: 'historia-politica', label: 'Historia/Política', icon: '🏛️', color: 'from-yellow-500 to-yellow-600' },
    { value: 'tecnologia-innovacion', label: 'Tecnología/Innovación', icon: '💻', color: 'from-purple-500 to-purple-600' },
    { value: 'diseño-ingenieria', label: 'Diseño/Ingeniería', icon: '⚙️', color: 'from-orange-500 to-orange-600' },
    { value: 'supervivencia-medicina', label: 'Supervivencia/Medicina', icon: '🏥', color: 'from-red-500 to-red-600' },
];

const CategoryMenu: React.FC<CategoryMenuProps> = ({ selectedCategory, onCategoryChange }) => {
    const selectedCategoryData = categories.find(cat => cat.value === selectedCategory);

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    📚 Selecciona una Categoría
                </h3>
                <p className="text-gray-400 text-sm">
                    Elige el tema que más te interese para descubrir datos fascinantes
                </p>
            </div>

            {/* Vista mobile: Select dropdown */}
            <div className="sm:hidden">
                <label htmlFor="category-select-mobile" className="block text-sm font-medium text-gray-300 mb-2">
                    Categoría actual:
                </label>
                <div className="relative">
                    <select 
                        id="category-select-mobile"
                        value={selectedCategory} 
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 appearance-none cursor-pointer"
                    >
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.icon} {category.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Vista desktop: Grid de categorías */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => onCategoryChange(category.value)}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/30 ${
                            selectedCategory === category.value
                                ? 'border-primary-500 bg-gradient-to-br from-primary-600/20 to-primary-500/10 shadow-lg shadow-primary-500/25'
                                : 'border-dark-600 bg-dark-700/50 hover:border-dark-500 hover:bg-dark-700/80'
                        }`}
                    >
                        <div className="text-center space-y-2">
                            <div className={`text-3xl transition-transform duration-300 ${
                                selectedCategory === category.value ? 'animate-bounce-gentle' : 'group-hover:animate-bounce-gentle'
                            }`}>
                                {category.icon}
                            </div>
                            <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
                                {category.label}
                            </div>
                        </div>
                        
                        {/* Indicador de selección */}
                        {selectedCategory === category.value && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Categoría seleccionada actual */}
            <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600/20 to-primary-500/20 rounded-full border border-primary-500/30">
                    <span className="text-2xl">{selectedCategoryData?.icon}</span>
                    <span className="text-primary-300 font-medium">
                        {selectedCategoryData?.label}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;
