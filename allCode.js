var express = require("express");
var app = express();
var http = require("http");
var firebase = require("firebase-admin");
const cors = require("cors");
const { Module } = require("module");

//const testerDosyasi = require("./tester.js");

app.use(express.json());
app.use(cors());
const server = http.createServer(app);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


const firebaseConfig = {
    apiKey: "AIzaSyCFMn8DVa6L7OXC1tbvKaSJm5opNNDdEp8",
    authDomain: "muhtas3-smarthomesystems.firebaseapp.com",
    databaseURL: "https://muhtas3-smarthomesystems-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "muhtas3-smarthomesystems",
    storageBucket: "muhtas3-smarthomesystems.appspot.com",
    messagingSenderId: "747475023900",
    appId: "1:747475023900:web:7e4a41486c961be6da07d9",
    measurementId: "G-FKPF11GN3S",
  credential:firebase.credential.cert(
    {
        "type": "service_account",
  "project_id": "muhtas3-smarthomesystems",
  "private_key_id": "56dec6ee034eaa69984f7e305b1c120b3533bf64",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDcPz8xr1I1FZ6p\n7wYd2KHd2oaS88TqS3aEl+Ks2EwD/SDSlph2o5qEY/YCiw+sjW7E38dm9Yiy2Xiq\nlwka4wtd4SRtzr+Hr/XiZQ987gMsSSxTWF7TfV0qRCtDeYXbNjZpWGF7AIWEAofh\nFaojUH0KunUleShgxKibCEwighGD0Wg+XnkUWTxWApqfH1xuIaZXIvL/6JCRdaig\n9SqG2Y8kfb56dopnEZf+GN557v5BM9sedTDWzDFVba4N21E4qTiTOFudTMDIv5n1\n2FsdvKuQk5zW3sZHphGUzM7Vms53h8rHGaR8ew5iv3QNjbOvL0uMwX55cwPpoXOi\nvXc7EQc7AgMBAAECggEABbptYdTt/ex0hnXtgkw2lYcP9fV6Gx/gUr2Ciz1K6NWm\nC2QYTgmeRLA230UPoMzC40LwtDhRmFk4nrMz7OuXyZbH9EUqzRQiAIPhXb3w/i9f\nBEHpoXWCvU0tlOEtvpBP5PiD/Id8cX0BXLTMCoQW5HcKAfH/P1kOC44xMLqSSwvU\nXTo2WXHaXEiNsWpyLxrWs3Xamy48IMSC43yVU8eDRLu5a/PVn/hv5bVrSj/Oi8aE\nH6rjjeGyRxnFi31SpeuuMBurbSByU+KRHVQWaYlS3JPc3gdjaSiCUxL+XuKZb6+Y\nYgHMtDFxuF/x9G4VN/ACseBjV2IvlJBv6x6ekwPCrQKBgQD46vdoi9Gw2h4iJkK2\n4riCGzidxF1oBxt7x2yQvoAGZjOo9CmED4axFX2RU1bu54UjOd98xpOtDXuNUmFI\nCHlSU8tq0hk8+WnDSvtfsZmAWQx6VBm1kLUy29NoJAgDp5bJExzvZbsAgJhX+vKE\nqw8MvtXL5fV2H/x/XX26qYgR7wKBgQDig3O+gXCrh3hWO7aiKFtHLv2fWLRW37b4\nNU3nc6qOCcLjon+NZIZXTfAVjg+RQL3T4Do0NeGISqROpsUvhn9VfucKW1QJuuza\n9q3cduppfFtJk6C6bE7kV5pWt29y+6RmKk9bDPcv7cSI+suZDDOs1gS/Jr+RbgaB\ncPLii+17dQKBgCQ77+/kCo438hL+hs+giUNHOyKcJwyxnCqUiRU45eIIlpSNlk2H\nBRBaFIFHJGx6f0L1dbbwIScbw1R7HXYi5aY6VG4kT1A07lRjYdw4OiQY0lwsSeHI\nQtg4b7nFJPWDO8vhYGDo6iPUlFiaSxtM20/7p5uayfR8C4Fu1pKJgyk5AoGBAJLv\ntNiCvST4Fw7RY5LjXPrbN7jzYODt9JIkeenHdX74RA1Ibze4WxEtRK2m3uBZwAo+\nbWNLBIdV7Cn9MvK2a8l5LcThI63ALT+JP5VBKqTM/6bF9kCYW8DyNvNDwS80oBuK\nHLoyufLEaXZ2QjaA3NCkcKXTK/faCKxVKaneHWq1AoGBAK3EUoqdJs9L57LeoHAm\nfu8LkEUSk++b8Vjzokz/zYt+CTafY506qpul9AedBWnck12NpZhQAmYWv9PuK6Sl\n/9heLgSjPBfxah29tFcA1zn73rjscUgUbhH2M87yTOpb10QZ6DGGCS68ntqhNjCf\n7P4WER23hNVDV7MjMJkY4iWp\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-n7ge5@muhtas3-smarthomesystems.iam.gserviceaccount.com",
  "client_id": "118326749158550226448",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n7ge5%40muhtas3-smarthomesystems.iam.gserviceaccount.com"
      }
      
  )
};

const appinit = firebase.initializeApp(firebaseConfig);

// Get a database reference to our posts
var db = firebase.database();

//-------------------------------- OLUSTURDUGUM DEGISKENLER --------------











//------------------------------------------------------    YAZDIGIM APILER -------------------------



app.get("/sensorler", (req, res) => {
  db.ref()
    .get()
    .then((data) => res.status(200).send(data.val()));
});








app.get("/deneme", (req, res) => {

  isim.on('value', (snapshot) => {
    var newName = snapshot.val()
    console.log("isim  : "+newName);
    
    res.write("Isim : "+newName);
    
    
    res.end()
  } ); 

});



app.get("/nem", (req, res) => {

  nem.on('value', (snapshot) => {
    let nem = snapshot.val()
    console.log("nem  : "+nem);
    
    res.write("nem : "+nem);
    
    
    res.end()
  } ); 

});


const port =process.env.PORT || 9000;
server.listen(port, () => console.log("App running on http://localhost:"+port));

//--------------------------------------- FIREBASE SENSOR VERILERINI CEKME -----------------------------------------------------

const sicaklik = db.ref('sicaklik');
const nem= db.ref('nem');
const fan= db.ref('fan');
const test= db.ref('test');
const password = db.ref('password');
var isim = db.ref("isim");


 


// Attach an asynchronous callback to read the data at our posts reference
sicaklik.on('value', (snapshot) => {
  console.log("sicaklik  : "+snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 

nem.on('value', (snapshot) => {
    console.log("nem durumu : "+snapshot.val());
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  }); 

  fan.on('value', (snapshot) => {
    console.log("fan yuzdesi : "+snapshot.val());
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  });

  password.on('value', (snapshot) => {
    console.log("Sifre  : "+snapshot.val());
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  });

  test.on('value', (snapshot) => {
    console.log("test degeri 1   : "+snapshot.val().float);
    console.log("test degeri 2  : "+snapshot.val().int);
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  });

  
 








//!! WEBSOCKET side ----------------------+


// server.js

var io = require('socket.io')(server); 



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
          db.ref("motor").set(motorStatus);
          

            //firebaseCode.db.ref("MotorDurum").set(motorStatus)

		  //send a message to ALL connected clients
		  io.emit('btnOn', {"clickCount": clickCount, "motorStatus": motorStatus});

    });

    client.on('TurnOff',function(data2){
        clickCount++;
        motorStatus=0;
        
        console.log("Turn Off The Motor");
        console.log(motorStatus);
        
        db.ref("motor").set(motorStatus);
    
        
        io.emit('btnOff',clickCount);
    });


    exports.motorStatus;  // motorun durum verisini export ettik


});






//start our web server and socket.io server listening
// server.listen(3000, function(){
//   console.log('listening on *:3000');
// }
// );




// aliye sor io.on ile  --- client.on un farkı ne 