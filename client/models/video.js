const mongoose=require('mongoose');
const schema = mongoose.Schema;
const videoSchema=new mongoose.Schema({
    srNo:Number,
    title:String,
        releaseYear:Number,
        genre:String,
        cast:String,
        producedBy:String,
        video:String
    
});

module.exports=mongoose.model('video',videoSchema,'videosDb');