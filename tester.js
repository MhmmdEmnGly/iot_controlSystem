// server.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 

const firebaseCode = require("./firebaseCode");

//keep track of how times clients have clicked the button
var clickCount = 0;
var motorStatus=0;



app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(client) {  
	//when the server receives clicked message, do this
    console.log("client baglandı...  \nBaglanan client ID :",client.id)
    
    
    client.on('TurnOn', function(data) {
    	  clickCount++;
          motorStatus=1; 
          console.log("Turn On The Motor");
          console.log(motorStatus);

          //motorStatus u export ettik
         
            //firebaseCode.db.ref("MotorDurum").set(motorStatus)

		  //send a message to ALL connected clients
		  io.emit('btnOn', {"clickCount": clickCount, "motorStatus": motorStatus});

    });

    client.on('TurnOff',function(data2){
        clickCount++;
        motorStatus=0;
        console.log("Turn Off The Motor");
        console.log(motorStatus);

    
        
        io.emit('btnOff',clickCount);
    });


    exports.motorStatus;  // motorun durum verisini export ettik


});






//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
});




// aliye sor io.on ile  --- client.on un farkı ne 