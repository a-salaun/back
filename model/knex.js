const knex = require('knex')({
    client: 'pg',
    connection: 'postgresql://postgres:5jFtaILuTs1LCIZhVPZh@containers-us-west-55.railway.app:7245/railway',
    searchPath: ['knex', 'public'],
  });
  
module.exports = knex