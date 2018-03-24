const express = require('express');
const app = express();
const port = 3000;

//Settings
app.set('view engine', 'pug');
app.use('/static', express.static("public"));

app.get('/', (req, res) => {
  res.render('splash');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
	