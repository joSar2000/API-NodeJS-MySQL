const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('SELECT * FROM Publications', (err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.json(rows);
                }
            });
        }
    });
});

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('INSERT INTO Publications set ?',  [req.body],(err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send('Publication Added');
                }
            });
        }
    });
});

routes.delete('/:idPublications', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('DELETE FROM Publications WHERE idPublications = ?',  [req.params.idPublications],(err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send('Publication deleted');
                }
            });
        }
    });
});

routes.put('/:idPublications', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('UPDATE Publications set ? WHERE idPublications = ?',  [req.body, req.params.idPublications],(err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send('Publication edited');
                }
            });
        }
    });
});


module.exports = routes;