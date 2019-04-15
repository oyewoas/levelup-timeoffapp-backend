const express = require('express');
// const employeeRouter = require('./app/routes/employees');
// const industryRouter = require('./app/routes/industries');
// const orgRouter = require('./app/routes/orgs');
// const userRouter = require('./app/routes/users');


module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // app.use('/employees', employeeRouter);
    // app.use('/industries', industryRouter);
    // app.use('/orgs', orgRouter);
    // app.use('/users', userRouter)

    return app;
}