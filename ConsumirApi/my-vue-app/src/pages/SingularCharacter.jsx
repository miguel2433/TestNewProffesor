import React from "react";
import CharacterProfile from "../components/CharacterTransformations.jsx";

const CharacterTransformation = () => {
    return (
    <main className="p-8 min-h-[65vh] overflow-y-scroll">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Estos son todas las Transformaciones
        </h1>
        <CharacterProfile />
    </main>
    );
};

export default CharacterTransformation;
