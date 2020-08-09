const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const List = require('../models/video');

const db = 'mongodb://localhost:27017/Leisure';
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.err("Error!!" + err);
    }
    else
        console.log("connected successfully to mongodb on port : " + db);
});



router.get('/videos', function (req, res) {
    console.log("get req for all videos");
    List.find({})
        .exec(function (err, videosDb) {
            if (err) {
                console.log("Error retrieving data" + err);
            }
            else res.json(videosDb);
        });
});
router.get('/videos/:srNo/', function (req, res) {
    var srNo = req.params.srNo;
    console.log("get req for serial no. video");
    List.find({ srNo })
        .exec(function (err, video) {
            if (err) {
                console.log("Error retrieving data" + err);
            }
            else {
                res.json(video);
            }
        });
});
router.post('/video/', function (req, res) {
    console.log("Post video");    
    var newList = new List();

    newList.srNo = req.body.srNo;
    newList.title = req.body.title;
    newList.releaseYear = req.body.releaseYear;
    newList.genre = req.body.genre;
    newList.cast = req.body.cast;
    newList.producedBy = req.body.producedBy;
    newList.video = req.body.video;
    newList.save(function (err, insertedVideo) {

        if (err) {
            console.log("Error saving data" + err);
        }
        else {
            console.log("inserted new", insertedVideo);
            res.json(insertedVideo);
        }
    });
});


router.put('/video/:srNo', function (req, res) {
    var srNo1 = req.params.srNo;
    console.log("Update video");
    List.findOneAndUpdate(srNo1,
        {
            $set: {
                srNo: req.body.srNo,
                releaseYear: req.body.releaseYear,
                title: req.body.title,
                genre: req.body.genre,
                cast: req.body.cast,
                producedBy: req.body.producedBy,
                video: req.body.video
            }
        },
        { new: true },

        // var newList = new List();

        function (err, updatedVideo) {
            if (err) {
                res.send("error updating video")
                console.log("Error saving data" + err);
            }
            else {
                console.log("inserted new", updatedVideo);
                res.json(updatedVideo);
            }
        });
});

router.delete('/video/:srNo', function (req, res) {
    var srNo = req.params.srNo;
    console.log("deleting a video");
    List.findOneAndDelete(srNo, function (err, deletedVideo) {
        if (err) {
            res.send("error deleting video")
        }
        else res.send(deletedVideo);
    })
})
module.exports = router;