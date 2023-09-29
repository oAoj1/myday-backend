const mongoose = require('mongoose')

const tarefaSchema = mongoose.Schema({
    id:String,
    tarefa:{type:String, require},
    descricao:{type:String, require},
    prioridade:{type:Boolean, require},
    concluido:{type:Boolean, require},
    data:{type:Date, require}
})

const tarefas = mongoose.model('tarefas', tarefaSchema)

module.exports = tarefas