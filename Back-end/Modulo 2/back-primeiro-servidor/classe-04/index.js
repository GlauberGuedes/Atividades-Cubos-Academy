const express = require("express");

const app = express();

app.get("/somar", (req, res) => {
    console.log(req.query);
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(String(num1 + num2));
});

app.get("/subtrair", (req, res) => {
    console.log(req.query);
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(String(num1 - num2));
});

app.get("/multiplicar", (req, res) => {
    console.log(req.query);
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(String(num1 * num2));
});

app.get("/dividir", (req, res) => {
    console.log(req.query);
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.send(String(num1 / num2));
});

app.listen(8000);