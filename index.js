const express = require('express');
const app = express();

const mysql = require('mysql2');

// Middleware essencial para ler o JSON vindo do formulário (POST)
app.use(express.json());

// Serve a pasta 'site' onde estão os arquivos estáticos (HTML, CSS, JS)
app.use(express.static('site'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "ifsp",
    database: "temp"
});

db.connect((erro) =>{
    if (erro){
        console.log(erro);
    }
    else{
        console.log('conectou!');
    }
    }
);

// Rota GET: Devolve a lista inteira para a página principal
app.get('/api/lista', (req, res) => {
    db.query('SELECT * FROM nao sei',(erro,resultados) => {
        if (erro){
            console.log(erro);
            return res.status(500).json({erro : 'erro ao buscar dados'});
        }
        res.json(resultados);
    });
    res.json(lista);
});

// Rota POST: Recebe uma nova obra do formulário e guarda no Array
app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.json({ status: "sucesso" });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor escutando em http://localhost:3000");
});
