"use strict";

var _require = require('deta'),
    Deta = _require.Deta;

var deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
var db = deta.Base("quemsou_db");

function isValidUser(nome) {
  return db.fetch({
    "nome": nome
  }).then(function (result) {
    return result.items.length;
  })["catch"](function () {
    return 1;
  });
}

function cadastro(data, res) {
  var valid;
  return regeneratorRuntime.async(function cadastro$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(isValidUser(data.nome));

        case 2:
          valid = _context.sent;

          if (valid == 1) {
            res.json({
              'status': 'error',
              'msg': 'usuario já cadastrado!'
            });
          } else {
            db.put({
              "nome": data.nome,
              "curso": data.curso,
              "interesse": data.interesse,
              "soft": data.soft,
              "hard": data.hard,
              "linkedin": data.linkedin,
              "img": data.img
            }).then(function () {
              res.json({
                'status': 'success',
                'msg': 'Cadastro efetuado com sucesso!'
              });
            })["catch"](function () {
              res.json({
                'status': 'error',
                'msg': 'Erro ao cadastrar!'
              });
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  cadastro: cadastro
};