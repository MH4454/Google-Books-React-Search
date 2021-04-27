const express = require("express");
const router = express.Router();
const db = require("../models")


router.get("/books", (req, res) => {
    res.send("We are on saved")
});

router.post("/books", (req, res) => {
    console.log(req.body)
    db.Book.create(req.body)
    .then(savedBook => {
        res.json(savedBook);
    })
    .catch(err => {
        res.status(422).json(err);
    })
});

router.delete("/books/:id", (req, res) => {
    store
      .removeNote(req.params.id) // Selecting the :id param from the url
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });




module.exports = router;