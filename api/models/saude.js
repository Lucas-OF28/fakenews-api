const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    "nome": {
        type: String,
        required : true
    },
    "url": {
        type: String,
        required : true
    },
    "agendaAdmVerifica": {
        type: Date,
        required : false
    },
    "descricao": {
        type: String,
        required : false
    }
},
{
    timestamps: { createdAt: 'data_criacao', updatedAt: 'data_edicao'}
})

const Saude = mongoose.model('Saude', schema)
module.exports = Saude