import { db } from "../database/pgConnection.js";
import {stripHtml} from 'string-strip-html'; // remover as tags html

async function getGames(req,res){
   
    const name = req.query.name ? req.query.name : ""; //caso seja falso, string vazia
    
    try{
        const name=stripHtml(name).result.trim().toLowerCase();
        const gameList= await db.query(`
            SELECT games.*
            FROM games 
            `
        );
        res.sendStatus(200)

    }catch(err){
        res.sendStatus(500);
    }
}

async function createGame(req,res){
    const {name, image, stockTotal, pricePerDay} = req.body  

    try{
        const {rowCount} = await db.query('INSERT INTO games (name,image,"stockTotal","categoryId",  "pricePerDay") VALUES ($1,$2,$3,$4,$5)',[name, image, stockTotal, pricePerDay]);
        
        if(!rowCount){
            return res.status(500).send('[ERRO] Não foi possível adicionar um novo jogo')
        }
    res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
    }
}

export {getGames,createGame};