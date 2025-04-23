import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { fetchCharacter } from '../services/fetchCharacters'; 

export default function CharacterProfile() {
    const { charId } = useParams();
    const [char, setChar] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const character = await fetchCharacter(charId);
                setChar(character);
            } catch (error) {
                console.error("Error al cargar el personaje:", error);
            }
        };

        fetchUser();
    }, [charId]);

    if (!char) return <p>Cargando personaje...</p>;

    return (
        <div className='w-[80%] flex justify-center items-center'>
            <div className="grid w-full text-black grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 p-4">
                    {char.transformations.length !== 0 ? (
                        char.transformations.map((transformation) => (
                            <div key={transformation.id} className="bg-white rounded-xl shadow-md p-4">
                                <img src={transformation.image} alt={transformation.name} className="duration-300 cursor-pointer hover:scale-125 w-full h-52 object-center object-contain rounded" />
                                <h2 className="text-xl font-bold mt-2">{transformation.name}</h2>
                                <p className="text-sm">Raza: {char.race}</p>
                                <p className="text-sm">Ki: {transformation.ki}</p>
                            </div>
                        ))
                    ) : (
                        <div key={char.id} className="bg-white rounded-xl shadow-md p-4">
                        <img src={char.image} alt={char.name} className="duration-300 cursor-pointer hover:scale-125 w-full h-52 object-center object-contain rounded" />
                        <h2 className="text-xl font-bold mt-2">{char.name}</h2>
                        <p className="text-sm">Raza: {char.race}</p>
                        <p className="text-sm">Ki: {char.ki}</p>
                    </div>
                    )}
            </div>
        </div>
    );
}
