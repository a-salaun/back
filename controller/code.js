const knex = require('../model/knex.js') 

async function getAllCode(id){

    const data = await knex.select('*')
    .from('code')
    
    return data
}

async function getOneCode(id){

    const data = await knex('code')
    .select('*')
    .where({id})
    return data
}

module.exports = {
    getAllCode,
    getOneCode
}