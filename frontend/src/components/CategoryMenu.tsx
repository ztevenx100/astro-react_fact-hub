import React, { useState } from 'react';

const categories = [
    { value: 'matematicas', label: 'Matemáticas' },
    { value: 'ciencias', label: 'Ciencias' },
    { value: 'historia-politica', label: 'Historia/Política' },
    { value: 'tecnologia-innovacion', label: 'Tecnología/Innovación' },
    { value: 'diseño-ingenieria', label: 'Diseño/Ingeniería' },
    { value: 'supervivencia-medicina', label: 'Supervivencia/Medicina' },
];

const CategoryMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

    return (
        <div>
            <label htmlFor="category-select">Elige una categoría: </label>
            <select 
                id="category-select" 
                data-category-selector
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
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
