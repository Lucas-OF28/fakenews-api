const Saude = require('../models/saude')

module.exports.getAll = async function(req, res){
    let limite = parseInt(req.query.limite) || 1
    let pagina = parseInt(req.query.pagina) || 1
    let resultado = await Saude.find().limit(limite * 1).skip((pagina - 1) * limite).exec();
    let count = await Saude.countDocuments();
    if(!count){
        res.statusCode = 204
        throw new Error("Lista vazia")
    }else if (!resultado){
        res.statusCode = 500
        throw new Error("Erro desconhecido")
    }else{
        res.json({
            resultado,
            totalPaginas: Math.ceil(count / limite),
            paginaAtual: pagina
        })
    }
}

module.exports.getOne = async function(req, res){
    try{
        let resultado = await Saude.findById(req.params.id)
        if(!resultado){
            res.statusCode = 404
            throw new Error("Objeto não encontrado")
        }else{
            res.json(resultado)
        }
    }catch(err){
        res.statusCode = 500
        throw new Error("Erro Desconhecido")
    }
}

module.exports.save = async function(req, res){
    const saude = new Saude(req.body)
    try{
        let retornoSave = await saude.save()
        res.json(retornoSave)
    }catch(err){
        res.statusCode = 500
        throw new Error("Erro Desconhecido")
    }
}

module.exports.update = async function(req, res){
    let id = req.params.id
    let body = req.body
    try{
        let resultado = await Saude.findByIdAndUpdate(id, body)
        if(!resultado){
            res.statusCode = 404
            throw new Error("Objeto não encontrado")
        }else{
            res.send("Site: '"+resultado.url +"' atualizado com sucesso")
        }
    }catch(err){
        res.statusCode = 500
        throw new Error("Erro Desconhecido")
    }
    
}

module.exports.delete = async function(req, res){
    let id = req.params.id
    try{
        let resultado = await Saude.findByIdAndDelete(id)
        if(!resultado){
            res.statusCode = 404
            throw new Error("Objeto não encontrado")
        }else{
            res.send("Site: '"+resultado.url +"' excluído com sucesso")
        }
    }catch(err){
        res.statusCode = 500
        throw new Error("Erro Desconhecido")
    }
    
    
}