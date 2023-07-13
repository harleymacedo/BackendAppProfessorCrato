//Imports gerais
const comissaoRouter = require('express').Router();
const mongoose = require('mongoose')
const comissao = require('../models/comissaoModel')

//Rota para obter todas as comissões
comissaoRouter.get('/comissao/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const comissoesBuscadas = await comissao.find()
        res.json({comissoes: comissoesBuscadas})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

//Rota para obter uma comissão pelo id
comissaoRouter.get('/comissao/porId/:id', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const comissaoBuscada = await comissao.findById(req.params.id)
        res.json({comissao: comissaoBuscada})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

module.exports = comissaoRouter