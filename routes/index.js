const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/servicos", (req,res) => {
  const {taxaDesconto} = req.query;

  const listaServicosComDesconto = servicosController.compilarListaServicos(taxaDesconto);

  res.render("listaServicos", {listaServicosComDesconto});
})

module.exports = router;
