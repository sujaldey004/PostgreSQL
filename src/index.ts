import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://playwithpostgres_owner:1MejS5qTucRp@ep-small-mouse-a5dw46qt.us-east-2.aws.neon.tech/playwithpostgres?sslmode=require"
})



async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAP
        );
    `)
    console.log(result);
}

createUsersTable();