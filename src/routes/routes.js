import { Router } from "express"
import game from "./game.js" //importando o router game
 

const router = Router()
router.use(game)


export default router