// Importando o useState para criar um estado para o contador
import { useState } from "react";

const Contador = () => {
    //Estados:
    // count: identificador do estado
    // setCount: função que altera o estado
    // useState(0): valor inicial do estado
    const [count, setCount] = useState(0);

    // variaveis não re-renderidam o componente, não atualizam a tela resumidamente
    let numero = 0;
    console.log(numero)

    return (
        <>
            <div>
                <br />
                <p>Contador: {count} </p>
                <button onClick={() => setCount(count + 1)}>Aumentar</button>
            </div>
        </>
    )
}

export default Contador;