import { Router } from "express"
import { read, create, update, remove } from "../controller/tasks.controller"
import corsMiddleware from "../middleware/cors.middleware"

const router = Router()

router.get('/', corsMiddleware, read)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)

export default router