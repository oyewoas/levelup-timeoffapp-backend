
exports.up = async (knex, Promise) => {
    try{
        const tableExists = await knex.schema.hasTable('employees');
        
        if(!tableExists){
            return knex.schema.createTable('employees', (table) => {
                table.increments();
                table.string('employee_id', 100).notNullable();
                table.string('first_name').notNullable();
                table.string('middle_name').nullable();
                table.string('last_name').notNullable();
                table.enum('gender', ['male', 'female', 'binary', 'undefined', 'n/a']);
                table.date('dob').nullable();
                table.string('phone', 15).notNullable();
                table.string('email', 100).nullable();
                table.string('department', 250);

                table.index('employee_id');
                table.index('first_name');
                table.index('last_name');
                table.unique('email');
                table.unique('employee_id');
            });
        } else {
            console.log('Table already exists');
            process.exit(1);
        }
    } catch(error){
        console.log(error);
    }
    
};

exports.down = async (knex, Promise) => {
  return knex.schema.dropTableIfExists('employees');
};
