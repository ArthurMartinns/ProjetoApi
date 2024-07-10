const express = require("express");

const routes = require("./routes");

const app = express(); 
app.use(express.json());

app.use(routes)

const port = 3333; //SERVIDOR RODANDO NA PORTA 3333
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})
