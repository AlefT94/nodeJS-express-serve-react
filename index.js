const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req,res)=>{
  //aqui é realizado o envio do index. caso o mesmo não seja carregado, a página não é crida e nenhuma das rotas poderá ser acessada
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//para que o códgo do get '/' seja executado, é necessário que essa configuração fique abaixo.
app.use('/',express.static(path.join(__dirname,'build')));

app.listen(3001,()=>{
  console.log(`Example app listening on port 3001`)
});