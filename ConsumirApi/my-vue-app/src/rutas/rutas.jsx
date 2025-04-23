import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from '../pages/home.jsx'
import CharacterTransformation from '../pages/SingularCharacter.jsx'
import Edit from '../pages/EditCharacter.jsx'


function RoutesPages (){
    return(
        <>
            <Routes>
                <Route path="/Edit" element={<Edit />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/characters/:charId" element={<CharacterTransformation />} />
            </Routes>
        </>
    )
}

export default RoutesPages