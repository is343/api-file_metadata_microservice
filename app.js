const express = require("express"),
          app = express(),
       multer = require("multer"),
       upload = multer();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('index');
});


app.post('/', upload.single('userFile'), function(req, res){
    // userFile name comes from the the form in the html
    res.json({
        size: req.file.size
    });
});



// LISTEN FOR REQUESTS
var listener = app.listen(process.env.PORT, function () {
  console.log('App is listening on port ' + listener.address().port);
});
