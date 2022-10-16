const mongoose = require('mongoose')

const Tasks = mongoose.model('Task', {
    titulo: String,
    descricao: String,
    data: Date,
    executada: Boolean,
    excluida: { type: Boolean, default: false }
})

module.exports = Tasks