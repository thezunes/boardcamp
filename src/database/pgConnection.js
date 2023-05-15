import pg from "pg"

const { Pool } = pg
const configDatabase = {
    connectionString: process.env.DATABASE_URL
}

const db = new Pool(configDatabase)

export default db; 
