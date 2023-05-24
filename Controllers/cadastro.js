const { Deta } = require('deta');
const deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
const db = deta.Base("quemsou_db");

function isValidUser(nome) {
    return db.fetch({"nome": nome})
      .then(result => result.items.length)
      .catch(() => 1);
}

async function cadastro(data, res) {
    const valid = await isValidUser(data.nome);
    
    if(valid == 1) {
        res.json({
            'status': 'error',
            'msg': 'usuario já cadastrado!'
        });

    }else {
        db.put({
            "nome": data.nome,
            "curso": data.curso,
            "interesse": data.interesse,
            "soft": data.soft,
            "hard": data.hard,
            "linkedin": data.linkedin,
            "img": data.img
        }).then(() => {
            res.json({
                'status': 'success',
                'msg': 'Cadastro efetuado com sucesso!'
            });
        }).catch(() => {
            res.json({
                'status': 'error',
                'msg': 'Erro ao cadastrar!'
            });
        });
    }
  }

module.exports = {
    cadastro
}