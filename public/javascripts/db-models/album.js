//require
var mongoose = require('mongoose');

//Create album schema
var schema = mongoose.Schema({
    title: String,
    image: String
});
var Album = mongoose.model('Album', schema);

module.exports = {

    //Find all albums
    findAll : function(res) {

        Album.find(function (err, albums) {
            if (err) return console.error(err);
            else {
                res.render('index', { albums: albums });
                console.log(albums)
            }
        });
    },
    
    //Create an album
    saveAlbum: function (albumTitle, albumImage, res) {
        var album = new Album({title: albumTitle, image: albumImage});

        //Save the album
        album.save(function (err, albumSaved) {
            if(err) {
                res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
                return
            }
            res.redirect('/')
        });
    },

    //Delete an album
    deleteAlbum : function(id) {
        Album.remove({_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
};

