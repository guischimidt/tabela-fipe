const express = require('express');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3001;

const app = express();

//Import Routes
const fipeRoutes = require('./routes/fipeRoutes');

//Import Controller 
const FipeController = require('./controllers/FipeController');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//receber resposta do body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//public path
app.use(express.static('public'));

//Routes
app.use('/', fipeRoutes);
app.get('/', (req, res) => {res.render('fipe/home');});

app.listen(port);
