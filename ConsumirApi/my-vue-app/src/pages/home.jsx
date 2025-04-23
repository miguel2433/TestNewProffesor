import React from "react";
import CardCharacter from "../components/CharacterCard.jsx";

const HomePage = () => {
    return (
    <main className="p-8 min-h-[65vh] overflow-y-scroll">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Estos son todos los personajes
        </h1>
        <CardCharacter />
    </main>
    );
};

export default HomePage;
