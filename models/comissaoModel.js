const mongoose = require('mongoose')

const comissaoModel = mongoose.Schema({
    nome: String,
    descricao: String,
    inicio: Date,
    fim: Date,
    portaria: String,
    coordenadorId: String
})

module.exports = mongoose.model('Comissao', comissaoModel)