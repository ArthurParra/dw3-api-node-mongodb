import Game from '../models/Game.js' // importando Model

// a camada de services possui os métodos que chamam a Model

class gameService{
    async getAll(){ // função assíncrona que retorna todos os jogos (função não bloqueante)
        // try trata sucesso
        try{
            // .find() é o método do mongoose p/ buscar registros no banco
            // await faz a função esperar a consulta
            const games = await Game.find() 
            return games
        } 
        // catch trata falha
        catch(error){
            console.log(error)
        }
    }

    // método de cadastro de Game
    async Create(title, year, price, descriptions){
        try{
            const newGame = new Game({ // instanciando módulo de Games
                // técnica do JS de desestruturação : ao invés de atribuir os parâmetros, coloca o mesmo nome
                title,
                year,
                price,
                descriptions
            }) 
            // gravando no banco com método mongoose .save()
            await newGame.save()
        }catch(error){
            console.log(error)
        }
    }
    //METODO PARA EXCLUIR UM JOGO
    async delete(id){
        try{
            //excluindo o jogo pela id
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)
        }catch(error){
            console.log(error)
        }
    }

    // METODO PARA ALTERAR O JOGO
    async Update(id, title, year, price, descriptions){
        try{
            await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions
            })
            console.log(`O jogo com a id: ${id} foi alterado.`)
        }catch(error){
            console.log(error)
            
        }
    }
}

export default new gameService() // assim se exporta uma classe