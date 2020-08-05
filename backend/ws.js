const express = require("express"),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http);


app.get('/', function (req, res) {
    
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    // console.log('a user connected!');
    // console.log(socket.on);
    socket.on('client_data', (data) => {
        console.log(data);
        return "Finished Executing";
    });

    socket.emit('client_data', (data) => {
        console.log(data);
        return "Finished Executing";
    });
    console.log("Event Names: ", socket.eventNames());
    // socket.once()
});



http.listen(3000, () => console.log("App Running: http://localhost:3000"));

