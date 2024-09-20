import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://playwithme_owner:e6xmPicO7ady@ep-late-frost-a5onfoo8.us-east-2.aws.neon.tech/playwithme?sslmode=require"
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