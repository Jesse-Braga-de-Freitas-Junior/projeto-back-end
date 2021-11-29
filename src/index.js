const express = require('express');

const server = express();

server.use(express.json());

const registro = ['id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'cor'];

// CRUD -- CREATE, READ, UPDATE, DELETE

// Retorna um registro
server.get('/registro/:index',(req, res)=> {
    const { index} = req.params;

    return res.json(registro[index]);
});

// Retornar todos os pedidos
server.get('/registro', (req, res)=> {
    return res.json(registro);
});

// Criar um novo registro
server.post('/registro', (req, res)=> {
    const { name } = req.body;
    registro.push(name);

    return res.json(registro);
});

// Atualizar um registro
server.put('/registro/:index', (req,res)=> {
    const { index } = req.params;
    const { name } = req.body;

    registro[index] = name;

    return res.json(registro);
});

// Deletar um registro
server.delete('/registro/:index', (req, res)=> {
    const { index } = req.params;

    registro.splice(index, 1);
    return res.json({message: "O registro foi deletado"});
});


server.listen(3000);