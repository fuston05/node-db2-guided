const knex = require('knex');
const knexFile= require('../knexfile');

const knexCongif = knexFile.development;
//connection to DB
module.exports= knex(knexCongif);