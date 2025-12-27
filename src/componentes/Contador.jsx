import React, {useState} from 'react'

function Contador () {
    const [contador, setContador] = useState(0)

    function incrementarContador(){
        setContador(prevContador => prevContador + 1);
    };

    return (
        <>
        <div>
            <h1>Cliques Efetuados: {contador}</h1>
            <button onClick={incrementarContador}>Adicione 1 ao contador</button>
        </div>
        </>
    );
};

export default Contador;