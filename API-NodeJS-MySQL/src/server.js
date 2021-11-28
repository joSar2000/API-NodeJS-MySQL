const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8080);
const dbOptions = {
    host: 'by9femf1uqgkkhwsvred-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'u6ws421gfoyhazyq',
    password: 'aFj2qzfrIVWPCuNjr46p',
    database: 'by9femf1uqgkkhwsvred',
}

//Middleware
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcolme to API-Social-UTPL!');
});
app.use('/SocialApp', routes);

//Server Running
app.listen(app.get('port'), ()=> {
    console.log('Server levantado!', app.get('port'));
})