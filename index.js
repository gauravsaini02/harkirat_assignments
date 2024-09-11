const express = require("express");
const fs = require('fs')
const path = require('path')

const app = express();
const folder = path.join(process.cwd(),'files')



app.get('/filenames', function(req,res){

    fs.readdir(folder, function(err,files){
        res.json(files);

        });
    });



app.get('/filedata/:filenames', function(req,res){
    const filename = req.params.filenames;
    const filepath = path.join(folder,filename);

    fs.readFile(filepath,'utf-8', function(err,data){
        res.json(data);
    })

})





app.listen(3000)