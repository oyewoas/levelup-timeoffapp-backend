const config = require('./knexfile');
const knex = require('knex')(config.development);


(async() => {
    try{
        const employee = {
            employee_id: 'LU-0002',
            first_name: 'Ayooluwa',
            last_name: 'Oyewo',
            gender: 'male',
            department: 'Software Engineering',
            email: 'oyewoayooluwa@gmail.com',
            dob: '2019-04-06',
            phone: '+2347030360670'
        };
        const result = await knex('employees').insert(employee);
        console.log(result);
        
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
})();