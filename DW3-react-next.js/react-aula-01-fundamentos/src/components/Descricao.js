const Descricao = (props) => { 
    return (
        <>
        <div>
            <p>A cidade do usuário é: {props.cidade}.</p>
            <p>A idade do usuário é: {props.idade} anos.</p>
        </div>
        </>
    )
}
export default Descricao;

//props são as propriedades que o componente recebe, basicamente você diz "este componente recebe estes dados de fora", utilizando props.(nome da propriedade). Na aula de hoje iremos fazer a DESESTRUTURAÇÃO da props

