const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  const query = `SELECT * FROM movies WHERE "id" = ${req.params.id}`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error GETing one movie', err);
      res.sendStatus(500)
    })

});

module.exports = router;
