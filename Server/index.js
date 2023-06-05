const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./data/data");
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
    console.log("Servidor está ativo na porta 3001!");
});

process.on('SIGINT', () => {
    pool.end();
    process.exit();
});

let register = null;

app.post("/api/registerUser", async (req, res) => {
    try {
        register = await pool.connect();
        const { nome, email, senha } = req.body;
        await register.query(`INSERT INTO Users (id, nome, email, senha) VALUES (uuid_generate_v4(), '${nome}', '${email}', '${senha}')`);
        res.status(200).send("Cadastro realizado com sucesso!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    } finally {
        register.release();
    }
});

app.get('/api/getUsers', async(req, res) => {
    try {
        register = await pool.connect();
        const data = await register.query(`SELECT * FROM Users`);
        // console.log(data.rows);
        res.send(data.rows)
    } catch (error) {
        res.status(500).send('Erro na consulta')
    }
});

app.put('/api/putUser', async (req, res) => {
    try{
        register = await pool.connect();
        const { nome, email, senha } = req.body;
        console.log(nome, email, senha);
        const { rows } = await register.query(`UPDATE Users SET nome = '${nome}', senha = '${senha}' WHERE email='${email}'`);                                
        console.table(rows);
        res.status(200).send(`Usuário alterado com sucesso!`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    } finally {
        register.release();
    }
});

app.delete('/api/deleteUser', async (req, res) => {
    try{
        register = await pool.connect();
        const { email, senha } = req.body;
        const { rows } = await register.query (`DELETE FROM Users WHERE email='${email}'`);
        console.table(rows);
        res.status(200).send(`Usuário deletado com sucesso!`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Não conectou ao servidor");
    } finally {
        register.release();
    }
});

