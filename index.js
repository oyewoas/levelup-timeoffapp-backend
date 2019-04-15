const config = require('./knexfile');
const knex = require('knex')(config.development);


(async() => {
    try{
        const version = await knex.raw('SELECT VERSION()');
        console.log(version);
        
    }
    catch(error){
        console.log(error)
    }
})();