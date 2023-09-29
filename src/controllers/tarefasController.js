const tarefas = require('../model/tarefasModel.js')

async function lerTarefas(req,res){
    try{
        const exibirTarefas = await tarefas.find()
        res.send(exibirTarefas)

    }catch(error){
        console.log(error.message)
    }
}

async function lerTarefaID(req,res){
    try{
        const id = req.params.id
        const exibirTarefaID = await tarefas.findById(id)

        res.send(exibirTarefaID)

    }catch(error){
        console.log(error.message)
    }
}

async function criarTarefas(req,res){
    try{
        const novaTarefa = new tarefas(req.body)
        const salvarNovaTarefa = await novaTarefa.save()

        .then(() => {
            res.send(novaTarefa)
        })
        .catch((err) => {
            console.log(err)
        })  

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarTarefas(req,res){
    try{
        const id = req.params.id
        const value = {$set: req.body}
        const atualizandoTarefas = await tarefas.findByIdAndUpdate(id, value)

        .then(() => {
            res.send('Tarefa atualizada com sucesso')
        })
        .catch((err) => {
            res.send(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function deletarTarefas(req,res){
    try{
        const id = req.params.id
        const deletandoTarefa = await tarefas.findByIdAndDelete(id)

        .then(() => {
            res.send('Tarefa deletada com sucesso!')
        })
        .catch((err) => {
            res.send(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function deletarTodasTarefas(req,res){
    try{
        const deletandoTodasTarefas = await tarefas.deleteMany({})

        if(deletandoTodasTarefas){
            res.send('Todas tarefas excluidas!')
        }else{
            res.send('Erro ao excluir tarefas')
        }
    }catch(error){
        console.log(error.message)
    }
}

async function filtrarTarefa(req,res){
    try{
        const filtro = req.query.tarefa
        tarefas.find({tarefa: filtro})
            .then(tarefas => {
                res.json(tarefas)
            })
            .catch((err) => {
                res.send(err)
            })

    }catch(error){
        console.log(error.message);
    }
}

async function prioridadeTarefa(req,res){
    try{
        const id = req.params.id
        const prioridadeTarefa = await tarefas.findOne({_id: id})

        if(prioridadeTarefa.prioridade){
            prioridadeTarefa.prioridade = false
        }else{
            prioridadeTarefa.prioridade = true
        }
        
        await prioridadeTarefa.save()
        .then(() => {
            res.json(prioridadeTarefa)
        })
        .catch((err) => {
            res.send(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

async function concluirTarefa(req,res){
    try{
        const id = req.params.id
        const concluirTarefa = await tarefas.findOne({_id: id})

        if(concluirTarefa.concluido){
            concluirTarefa.concluido = false
        }else{
            concluirTarefa.concluido = true
            concluirTarefa.prioridade = false
        }
        
        await concluirTarefa.save()
        .then(() => {
            res.json(concluirTarefa)
        })
        .catch((err) => {
            res.send(err)
        })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerTarefas,
    lerTarefaID,
    criarTarefas,
    atualizarTarefas,
    deletarTarefas,
    filtrarTarefa,
    prioridadeTarefa,
    concluirTarefa,
    deletarTodasTarefas
}