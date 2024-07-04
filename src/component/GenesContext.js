
import React, { createContext, useState } from 'react';

const GenesContext = createContext();

const GenesProvider = ({ children }) => {
    const [genes, setGenes] = useState('');
    

    return (
        <GenesContext.Provider value={{ genes, setGenes }}>
            {children}
        </GenesContext.Provider>
    );
};

export { GenesContext, GenesProvider };
