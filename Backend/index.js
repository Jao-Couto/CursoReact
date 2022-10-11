// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Tasks = require('./modules/Tasks')

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/add', async (req, res) => {
    const { titulo, descricao, data, executada } = res.req.body
    const task = {
        titulo,
        descricao,
        data,
        executada
    }
    await Tasks.create(task)
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.get('/get', async (req, res) => {
    await Tasks.find()
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.get('/getOne/:titulo', async (req, res) => {
    const titulo = req.params.titulo
    await Tasks.findOne({ titulo })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.put('/update', async (req, res) => {
    const { titulo, descricao, data, executada, id } = res.req.body
    await Tasks.updateOne({ _id: id }, {
        $set: {
            titulo,
            descricao,
            data,
            executada
        }
    })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await Tasks.deleteOne({ _id: id })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

mongoose.connect('mongodb+srv://admin:adminJoaoRafael@expresssecomp2022.o7wdbuy.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('conectado ao mongoose');
        app.listen(9000, () => console.log('Express started at http://localhost:9000'));
    }).catch((err) => {
        console.log('erro ao conectar no mongoose: ', err);
    })

// o servidor irá rodar dentro da porta 9000


