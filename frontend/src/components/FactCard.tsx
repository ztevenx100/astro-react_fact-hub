import React from 'react';

interface FactCardProps {
    fact: string;
    isLoading: boolean;
}

const FactCard: React.FC<FactCardProps> = ({ fact, isLoading }) => {
    return (
        <div>
            {isLoading ? <p>Cargando...</p> : <p>{fact}</p>}
        </div>
    );
};

export default FactCard;
