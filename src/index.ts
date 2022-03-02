import express from "express";

const cors = require('cors');

const app = express();
const port = 8080; // default port to listen

// MIDDLE WARE
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', async (req, res) => {
    res.send({message: "hello world"})
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});