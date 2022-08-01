import express from 'express'
import router from './router/tasks.route'

const app = express()

const PORT = 3001

app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`)
)