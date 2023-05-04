const express = require('express');
const app = express();
const path = require("path");

app.use(express.static("public"));


app.listen(process.env.PORT || 3000, () => console.log("SERVIDOR FUNCIONANDO EN EL PUERTO 3000 "));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
