const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

const http = require( 'http' );
const https = require( 'https' );
const fs = require( 'fs' );

const morgan = require('morgan');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

var Course = require('./models/course');

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

// mongo DB
mongoose.connect(
  process.env.MONGO_URI, 
  { 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false 
  }
)
.then( () => console.log("mongoDB Successfully connected") )

mongoose.connection.on("error", err => {
console.log(`mongoDB connection error: ${err.message}`)
});

//app.use( (req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "https://localhost"); // update to match the domain you will make the request from
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});



app.get('/course', (req, res) => {

    console.log("reading Course collection from mongodb....")

    Course.find()
    .then( result => {
        console.log("** course successfully retrieved : result --> ",result)
        res.status(200).json(
            {courses: result}
        )
    })
    .catch( err => {
        console.log("*** course save error --> ",err)
    })
})

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname+'/client/build/index.html'));
//});


var options = {
  key: fs.readFileSync( '../../keys/server_key.pem' ),
  cert: fs.readFileSync( '../../keys/server_crt.pem' )
};
const port = process.env.PORT || 5000;


var serverhttps = https.createServer( options, app )
.listen( port, () => {
    console.log( "https server stating on " + port + " ..." );
});

var serverhttp = http.createServer(  app )
.listen( 5001, () => {
    console.log( "http server stating on " + 5001 + " ..." );
});




//app.listen(port);

console.log(`Password generator listening on ${port}`);
