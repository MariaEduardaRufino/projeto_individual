var express = require("express");
var router = express.Router();

var musicaController= require("../controllers/musicaController");

router.get("/listar", function (req, res) {
    musicaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
});
module.exports = router;