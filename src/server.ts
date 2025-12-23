import express from "express";

const app = express();

const PORT = process.env.PORT;

app.get('/api/v1/health', (request, response) => {
    response
        .status(200)
        .send({
            status: 'ok'
        })
})

app.listen(
    PORT,
    () => {
        console.log(`server started on port : ${PORT}`)
    }
);