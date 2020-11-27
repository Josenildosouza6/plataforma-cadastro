//Carregando Módulos
  const express = require('express')
  const handlebars = require('express-handlebars')
  const bodyParser = require('body-parser')
  const app = express()
  const admin = require("./rotas/admin")
  const path = require('path')
  const mongoose = require('mongoose')
  const session = require('express-session');
  const flash = require('connect-flash');

//Configurações

  //sessão
    app.use(session({
      secret:"Chave secreta",
      resave: true,
      saveUninitialized: true
    }))
    app.use(flash())
  //Middleware
    app.use((req, res, next) => {
      res.locals.success_msg = req.flash("success_msg")
      res.locals.error_msg = req.flash("error_msg")
      next()
    })
  //Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
  
  //Handlebars
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars');
  
  //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/goodHelpTest').then(() => {
      console.log("Conectando ao mongo");
    }).catch((err) => {
      console.log("Erro ao se conectar: "+err);
    })
  
      
  //public
    app.use(express.static(path.join(__dirname,"public")))
    
    app.use((req, res, next) => {
      console.log("OI EU SOU UM MIDDLEWARE!")
      next()
    })

//Rotas
  app.get('/', (req, res) => {
    res.send('Rota Principal')
  })

  app.get('/posts', (req, res) => {
    res.send('Lista de Posts')
  })
  app.use('/admin', admin)

//Outros
const PORT = 8081
app.listen(PORT,() => {
  console.log("Servidor rodando! ");
})
