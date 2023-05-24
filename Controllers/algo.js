const { Deta } = require('deta');
const deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
const db = deta.Base("quemsou_db");

function isValidUser(data) {
    return db.fetch([{ "nome?contains": data}, {"curso?contains": data}])
      .then(result => result.items)
      .catch(() => false);
}

async function algo(data, res) {
    const valid = await isValidUser(data);
    
    res.json(valid);
  }

module.exports = {
    algo
}