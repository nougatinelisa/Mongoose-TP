var express = require('express');
var album = require('../public/javascripts/db-models/album');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    album.findAll(res)
});

router.post('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var albumTitle = req.body.albumTitle;
    var albumImage = req.body.albumImage;

    if (albumTitle === undefined || albumTitle === "" || albumImage === undefined || albumImage === "") {
        res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
        return
    }
    album.saveAlbum(albumTitle, albumImage, res);
});

router.delete('/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var id = req.params.id;

    if (id === undefined || id === "") {
        res.send(JSON.stringify({status: "error", value: "UUID undefined"}));
        return
    }
    album.deleteAlbum(id);
});

module.exports = router;
