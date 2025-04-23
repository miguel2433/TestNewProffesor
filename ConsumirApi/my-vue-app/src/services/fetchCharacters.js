const apiUrl = "https://dragonball-api.com/api/characters?limit=58";
const apiUrl2 = "https://dragonball-api.com/api/characters"

export const fetchAllCharacters = async () => {
    try{
    const response = await fetch(apiUrl)

    if (!response.ok) {
        throw new Error(`Error fetching characters: ${response.statusText}`);
    }

    const data  = await response.json(); // Extraer solo `data`
    console.log("Este es la data de los characters", data);
    return data; 
    }
    catch (error) {
        console.error("Error obteniendo personajes:", error);
        throw error;
    }
};


export const fetchCharacter = async (id) => {
    try {
        const response = await fetch(`${apiUrl2}/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching character: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Este es la data del character", data);
        return data;
    } catch (error) {
        console.error("Error obteniendo personaje:", error);
        throw error;
    }
};

