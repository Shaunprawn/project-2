const express = require('express');
const methodOverride = require('method-override');
const session = require('session');
const cookieParser = require('cookie-parser');
const sha256 = require('sha256');

const db = require('./db');
const pg = require('pg');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.set('views',__dirname+'/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

require('./routes')(app)

const server = app.listen(3000,()=> console.log ('port 3000 ready to go'));
