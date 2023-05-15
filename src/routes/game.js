import { Router } from "express";
import { gameSchema } from "../schemas/gameSchema.js";
import { getGames, createGame } from "../controllers/gameController.js";
import { validateSchema } from "../middlewares/validationSchema.js";


const router=Router();

 router.get('/games',getGames); //Listar os Games
 router.post('/games',validateSchema(gameSchema),createGame); //Criar game

export default router;