// Sample local API


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app is listening to http://localhost:${PORT}`);
})

let movies_list = ["Star-wars", "Batman", "Superman", "botman"];

app.get('/movies', (req, res) => {
    try{
        res.status(201).json(movies_list);
    } catch (error) {
        res.status(500).json({messege: "something went wrong"});

    }
 });


 app.post('/movies/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { newMovie } = req.body;
        res.status(201).json(movies_list.push(newMovie));
    } catch (error) {
        res.status(500).json({messege: "something went wrong"});
    }
 });
