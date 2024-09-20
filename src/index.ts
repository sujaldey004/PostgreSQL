import { Client } from "pg";

async function insertData(){
    const client = new Client({
        connectionString:"postgresql://playwithpostgres_owner:1MejS5qTucRp@ep-small-mouse-a5dw46qt.us-east-2.aws.neon.tech/playwithpostgres?sslmode=require"
    });

    try{
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username1', 'user1@gmail.com', 'password1234')";
        const res = await client.query(insertQuery);
        console.log("Insertion success : ", res);
    }catch(err){
        console.error("Error during insertion : ", err);
    }finally{
        await client.end();
    }
}


insertData();

