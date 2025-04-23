import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchAllCharacters } from "../services/fetchCharacters.js";

export default function CardCharacter() {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const loadCharacters = async () => {
        try {
        const data = await fetchAllCharacters();
        setCharacters(data.items); // accdememos a los items que tiene todos los persoanjes         
    } catch (error) {
        console.error("Error cargando personajes:", error);
        }
    };
    loadCharacters();
    }, []);

    return (
    <div className="text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        {characters.map((char) => (
        <div key={char.id} className="bg-white rounded-xl shadow-md p-4">
            <img src={char.image} alt={char.name} className="duration-300 cursor-pointer hover:scale-125 w-full h-52 object-center object-contain rounded" onClick={() => navigate(`/characters/${char.id}`)} />
            <h2 className="text-xl font-bold mt-2">{char.name}</h2>
            <p className="text-sm">Raza: {char.race}</p>
            <p className="text-sm">Ki: {char.ki}</p>
            <p className="text-sm">Gender: {char.gender}</p>
        </div>
        ))}
    </div>
    );
}
