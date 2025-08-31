import React from 'react';

interface CategoryMenuProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    { value: 'matematicas', label: 'Matemáticas' },
    { value: 'ciencias', label: 'Ciencias' },
    { value: 'historia-politica', label: 'Historia/Política' },
    { value: 'tecnologia-innovacion', label: 'Tecnología/Innovación' },
    { value: 'diseño-ingenieria', label: 'Diseño/Ingeniería' },
    { value: 'supervivencia-medicina', label: 'Supervivencia/Medicina' },
];

const CategoryMenu: React.FC<CategoryMenuProps> = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div>
            <label htmlFor="category-select">Elige una categoría: </label>
            <select 
                id="category-select"
                value={selectedCategory} 
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                        {category.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryMenu;
