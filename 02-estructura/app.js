import express from 'express';

const port = 80;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Saul es un filoetarra.")
});

app.listen(port, () => {
    console.log('Servidor encendido en el puerto ' + port );
});