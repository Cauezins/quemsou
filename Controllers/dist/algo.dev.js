"use strict";

var _require = require('deta'),
    Deta = _require.Deta;

var deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
var db = deta.Base("quemsou_db");

function isValidUser(data) {
  return db.fetch([{
    "nome?contains": data
  }, {
    "curso?contains": data
  }]).then(function (result) {
    return result.items;
  })["catch"](function () {
    return false;
  });
}

function algo(data, res) {
  var valid;
  return regeneratorRuntime.async(function algo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(isValidUser(data));

        case 2:
          valid = _context.sent;
          res.json(valid);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  algo: algo
};