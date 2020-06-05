const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

//configurando las demas carpetars
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/js', express.static(path.join(__dirname, './js')));

//configurando lo que se va a mostrar en la web
app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, './index.html');

    res.sendFile(indexPath);
});

app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto 3000');
});
