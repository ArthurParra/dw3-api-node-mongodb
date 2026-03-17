import gameService from '../services/gameService.js' // importando o Service
// importando ObjectId
import { ObjectId } from 'mongodb';

// função p/ tratar requisição de LISTAR TODOS OS JOGOS
const getAllGames = async (req,res) => {
    try{
        const games = await gameService.getAll() // chamando método no service
        res.status(200).json({games : games})
        // cod. 200 (OK) : requisição tratada com sucesso
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"Erro interno do servidor. Não foi possível listar os jogos."})
        // cod. 500 (SERVER ERROR)
    }
}

// função p/ tratar a requisição de CADASTRAR UM JOGO
const createGame = async(req, res) => {
    try {
        // desestruturação do corpo da requisição POST
        const {title, year, price, descriptions} = req.body
        // passando dados para camada Service
        await gameService.Create(title,year,price, descriptions)
        // res.sendStatus(201) envia apenas cod de status
        res.status(201).json({message:"O jogo foi cadastrado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor. Não foi possível cadastrar o jogo."})
    }
}

// FUNÇÃO PARA DELETAR UM JOGO
const deleteGame = async(req, res) => {
    try {
        //coletando a ID
        const id = req.params.id
        // validação do ID
        if (ObjectId.isValid(id)){
            await gameService.delete(id)
            res.status(204).json({ message: "O jogo foi excluido com sucesso!"}) //codigo 204 (no content)
        } else{
            res.status(400).json({ error: "Ocorreu um erro na validação do ID."}) //codigo 400 (bad request)
        }
    }catch (error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor. Não foi possível excluir o jogo." }) //codigo 500 (server error)
    }
}

// FUNCAO PARA ALTERAR UM JOGO
const updateGame = async (req, res) => {
    try {
        const id = req.params.id
        const {title, year, price, descriptions} = req.body

        if (ObjectId.isValid(id)){
            const game = await gameServices.Update(id, title, year, price, descriptions)
            res.status(200).json({message : "Jogo atualizado com sucesso!", game : game})
        } else {
            res.status(400).json({error: "Erro ao validar id para alterar o jogo"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}

// Função para buscar um jogo único
const getOneGame = async (req, res) => {
    try {
        const id = req.params.id
        if(ObjectId.isValid(id)){
            const game = await gameServices.getOne(id)

            // Verificando se o jogo foi encontrado
            if (!game) { // Jogo não encontrado
                res.status(404).json("Jogo buscado não foi encontrado")
            }else{ // Jogo encontrado;
                res.status(200).json({game})
            }
        } else {
            res.status(400).json({error : "A id informada é inválida"}) // Bad request
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}

// terminar na proxima aula

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame} // assim se exporta uma função