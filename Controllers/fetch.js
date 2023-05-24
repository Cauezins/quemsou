const { Deta } = require('deta');
const deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
const db = deta.Base("quemsou_db");

async function fetch(res) {
    const valid = await db.fetch()
    .then(result => result)
    .catch(() => false);

    if (valid) {
        res.json({
            'status': 'success',
            'users': valid.items
        });
    }
    
    
}

module.exports = {
    fetch
}