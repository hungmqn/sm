'use strict';
let hashPassword = (username, password) => {
  const crypto = require('crypto')
    , salt = username;

  let hash = crypto.createHmac('sha512', salt);

  hash.update(password);
  return hash.digest('hex');
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        username: 'amaithi',
        password: hashPassword('amaithi', '741852963'),
        role: 1,
      },
      {
        username: 'mmaihoang',
        password: hashPassword('smaihoang', '147258369'),
        role: 2,
      }
    ], {
      force: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};