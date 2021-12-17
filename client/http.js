const https = require('https');
 
https.get('https://dangerous-turtle-57.loca.lt/get/info', (resp) => {
 let data = '';
 
 // A chunk of data has been recieved.
 resp.on('data', (chunk) => {
  data += chunk;
 });
 
 // The whole response has been received. Print out the result.
 resp.on('end', () => {
  console.log(data);
 });
 
}).on("error", (err) => {
 console.log("Error: " + err.message);
});

