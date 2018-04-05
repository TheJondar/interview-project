const express = require('express');
const passport = require('passport');
const session = require('express-session');
const http = require('http');
const app = express();
const port = (process.env.PORT || '3000');
const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: false
}

const server = http.createServer(app);



//Settings
app.use('/static', express.static("public"));
app.set('view engine', 'pug');
app.use(session(sess));
app.use(passport.initialize());


app.get('/', (req, res) => {
  res.render('splash');
})

app.post('/login',
	passport.authenticate('local', { successRedirect: '/main', 
									failureRedirect: '/', 
									failureFlash: "Invalid Username or Password" }
));

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
	