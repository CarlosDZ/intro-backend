import express from 'express';

const port = process.env.PORT || process.env.SERVERPORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Saul es un filoetarra y el servidor esta encendido.")
});

app.listen(port, () => {
    console.log('Servidor encendido en el puerto ' + port +". Saul gitano albino.");
});