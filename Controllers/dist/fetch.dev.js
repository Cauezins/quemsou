"use strict";

var _require = require('deta'),
    Deta = _require.Deta;

var deta = Deta("b0x5Zhqf4asJ_q7hLTJqdeJjY6kBsR3J9N47NvFMG3jEf");
var db = deta.Base("quemsou_db");

function fetch(res) {
  var valid;
  return regeneratorRuntime.async(function fetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.fetch().then(function (result) {
            return result;
          })["catch"](function () {
            return false;
          }));

        case 2:
          valid = _context.sent;

          if (valid) {
            res.json({
              'status': 'success',
              'users': valid.items
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
  fetch: fetch
};