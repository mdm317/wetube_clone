import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const upload = multer({ dest: 'uploads/' })
const app = express();
app.set("view engine", "pug");
//app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req,res)=>res.render('home'));
app.post("/upload",  upload.single('txtFile'), (req,res)=> {
    const {file:{path}} = req;
    console.log(path);
    fs.readFile( path, 'utf8', function(err, data) {
        res.render('read', {content:data});
    });

});
// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
