var musicaModel = require("../models/musicaModel");

var sessoes = [];

function listar(req, res) {
    musicaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeMusica = req.body.nomeMusicaServer;
    
   

    // Faça as validações dos valores
    if (nomeMusica == undefined) {
        res.status(400).send("Seu nome Musica está undefined!");
    } 

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        musicaModel.cadastrar(nomeMusica,)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
   
    cadastrar,
    listar,
   
}