
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('sHello My Nouur!!!!!!!!!!');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
