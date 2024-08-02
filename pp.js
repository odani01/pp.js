import express from 'express'
const servidor= express();

servidor.get('/calculador/somar/:n1/:n2' , (req, resp)=> {

let n1 = Number (req.params.n1);
let n2 = Number (req.params.n2);

let soma = n1 + n2

resp.send (`A soma e de ${soma}`);
})

servidor.listen (5050,()=>console.log('porta subiu'));