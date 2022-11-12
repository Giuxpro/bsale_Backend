const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const port = process.env.PORT || 3001;

require('./db.js');
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '50mb'}));
/* This is a middleware function that is used to allow the server to accept requests from any domain. */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://bsale-front-giux.vercel.app/"); //giving access to the front domain it will make a request
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
});

app.use('/', routes);

/* This is a middleware function that is used to catch errors. */
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || status;
    console.log(err);
    res.status(status).send(message);
});

/* This is a callback function that is called when the server is listening on the port. */
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});


