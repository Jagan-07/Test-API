// FILMS API

const express = require('express');
const axios = require('axios').default;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`app is listening to http://localhost:${PORT}`);
})

app.get('/films', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films');
        res.status(200).json({Films: response.data});
    } catch (error) {
        res.status(500).json({message: 'something went wrong1'});
    }

});

// app.post('/films/:id', async (req, res) => {
//     const { id } = req.body.name;
//     try {
//         const response = await axios.get('https://swapi.dev/api/films');
//         res.status(200).json({Films: response.data});
//     } catch (error) {
//         res.status(500).json({message: 'something went wrong!'});
//     }
// });