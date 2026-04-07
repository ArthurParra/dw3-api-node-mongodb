import { useState } from "react";

const Form = () => {
    //Criando os estados:
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");

    //criando a função que ira lidar com a submissão do formulario

    const handleSubmit = (event) => {

        event.preventDefault();
        // aqui os dados serão enviados.
        console.log(nome);
        console.log(sobrenome);
        console.log(email);

        // Aqui sera enviado uma requisição POST para a API com as informacoes a serem cadfastradas.
        
    }

    return (
        <>
        <br />
        <h3>Formuláario de cadastro:</h3>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="insira seu nome" 
            value={nome}
            //quando o valor do input mudar, pega o novo valor (oevent.target.value) e atualiza o estado com este valor. E assim pros outros inputs tambem.
            onChange={(event) => setNome(event.target.value)} />
            <br />

            <input type="text" 
            placeholder="insira seu sobrenome" 
            value={sobrenome}
            onChange={(event) => setSobrenome(event.target.value)} />
            <br />

            <input type="text" 
            placeholder="insira seu email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
            <br />
            <button type="submit">Enviar</button>

        </form>
        <br />
        {nome} <br />
        {sobrenome} <br />
        {email} <br />
        </>
    )
}
export default Form;

// OBS: o event do handleSubmit e o event do onChange são coisas diferentes. mas que representam um evento em si.