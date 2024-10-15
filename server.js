const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lista-tarefas.db');


db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY, tarefa TEXT)");
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});