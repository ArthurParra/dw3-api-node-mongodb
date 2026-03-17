import mongoose from 'mongoose'

//o campo description sera um documento aninhado
const descriptionSchema = new mongoose.Schema({
    genre: String,//genero
    plataform: String,//plataforma
    rating: String,//classificacao de idade

});

// criando estrutura da coleção
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema

    //definindo campo como array
    // description: [descriptionSchema]
});

// cria model de coleção 'Game' com a estrutura de gameSchema
const Game = mongoose.model('Game', gameSchema) 

// exporta model
export default Game