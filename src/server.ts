import express, { response } from "express";

const app = express()

app.get("/", (request, response) => {
    return response.json({
        message: 'hi',
    });
})

app.post("/", (request, response) => {
    return response.json({
        message: 'Salve Salve'
    })
})

app.listen(3000, () => console.log('Running on 3000'))

