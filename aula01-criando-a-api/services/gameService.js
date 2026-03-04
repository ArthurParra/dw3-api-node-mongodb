// importando o Model
import Game from "../models/Game.js"

class gameService {
    //metodo (serviço) para buscar todos os registros no banco
    // funções assincronas são não bloqueantes
    async getAll() {
        //try trata o sucesso
        try{
            // .find() -> é o metodo do mongoose para buscar registros no banco
            const games = await Game.find()
            return games
            //catch trata a falha
        }catch (error){
            console.log(error)
        }
    }
}

//exportando a classe
export default new gameService()