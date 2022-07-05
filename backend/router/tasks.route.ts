import { Router } from "express"
import { read, create, update, remove } from "../controller/tasks.controller"

const router = Router()

router.get('/', read)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)

export default router