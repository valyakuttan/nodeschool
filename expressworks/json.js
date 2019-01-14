const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', function(req, res){
    const filename = process.argv[3];
    fs.readFile(filename, function(e, data) {
        if (e) {
            res.sendStatus(500);
            return;
        }

        try {
            books = JSON.parse(data);
            res.json(books);
        } catch (e) {
            res.sendStatus(500);
        }
    });
});

app.listen(process.argv[2]);

