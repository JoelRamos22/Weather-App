import { useState } from "react";

export default function Button({ array }) {
    const [selectedIndex, setSelectedIndex] = useState(0); // El primer botón (índice 0) es seleccionado por defecto.

    const handleButtonClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        array.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
                <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`rounded-xl px-7 text-lg py-3 text-center 
                        ${isSelected ? 'bg-[#E0B6FF] text-[#2E004E]' : 'bg-white text-black'}
                    `}
                >
                    {item.text}
                </button>
            );
        }) 
    );
}

