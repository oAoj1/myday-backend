const express = require('express')
const router = express.Router()
const tarefasController = require('../controllers/tarefasController.js')

router.get('/tarefas', tarefasController.lerTarefas)
router.get('/tarefas/filtrar', tarefasController.filtrarTarefa)
router.post('/tarefas/prioridade/:id', tarefasController.prioridadeTarefa)
router.post('/tarefas/concluir/:id', tarefasController.concluirTarefa)
router.post('/tarefas', tarefasController.criarTarefas)
router.put('/tarefas/:id', tarefasController.atualizarTarefas)
router.delete('/tarefas/:id', tarefasController.deletarTarefas)
router.delete('/tarefas', tarefasController.deletarTodasTarefas)
router.get('/tarefas/:id', tarefasController.lerTarefaID)

module.exports = router