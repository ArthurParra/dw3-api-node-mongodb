// importando o service
import gameService from "../services/gameService.js";

// função para tratar a requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try{ 
        const games = await gameService.getAll()
        res.status(200).json({games : games})
        // cod. 200 (ok) : Requisição feita com sucesso
    } catch (error){
        console.log(error)
        res.status(500).json({message : "Erro interno do servidor"})
    }
}

export default { getAllGames}