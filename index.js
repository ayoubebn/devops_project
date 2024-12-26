const express = require ('express');
const app = express();
const PORT = 4000 ;

app.get('/', (req, res) => {
    res.send('Hello hello hamdi  '); 
});

app.listen(PORT, () => {
    console.log ('App running on http://localhost:${PORT}');

});
