import React from "react";
import { Link }  from "react-router-dom";

function Navbar(){
    return(
        <>
            <header className="header">
                <div className="flex justify-center items-center">
                    <h1 className="Titulo">ConsumeApi</h1>
                </div>
                <nav>
                    <Link className="Titulo" to="/">Home</Link>

                </nav>
            </header>
        </>
    )
}

export default Navbar