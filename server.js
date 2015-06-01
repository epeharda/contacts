var express = require('express'),
    app = express(),
    path = require('path'),
    publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir))
app.get('*', function(req, res){
    res.sendfile(path.join(publicDir, 'main.html'));
}).listen(3000);