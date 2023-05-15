import { Router } from "express";
import { gameValidation } from "../middlewares/gameValidation.js";
import { getGames, createGame } from "../controllers/game.js";

const router=Router();


 router.get('/games',getGames); //Listar os Games
 router.post('/games',gameValidation,createGame); //Criar game

export default router;