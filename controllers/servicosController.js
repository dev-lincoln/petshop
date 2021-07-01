const servicosModel = require('../models/servicosModel')

exports.compilarListaServicos = taxaDesconto => {
    const listaServicos = servicosModel.retornarListaServicos();

    return listaServicos.map(itemDeServico => ({
        ...itemDeServico, preco: itemDeServico.preco * (1 - taxaDesconto)
    }))
}