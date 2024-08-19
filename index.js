var request = require('request');
var fs = require('fs');


let response_counter = 0;
let redis_counter = 0;
let other_counter = 0;


// replace values in this array with the creatives you're looking to pull bid responses for
let pasteHere = [];


var obj = {
    bidResArr: []
}


async function getBidResponses(a) {
    for (let w = 0; w<a.length; w++){
        var options = {
          'method': 'GET',
          'url': `http://k8s-api-admanage-ec9a86a9e2-b2b9a77bec01c992.elb.us-east-1.amazonaws.com/admanager/creative?campaign=5f6413c9612b1a0015099993_170034|${a[w]}|dsp-5f6415539290720015d69d84|64a660e906d46a27ea43e666`,
          'headers': {
          }
        };
        try {
            var response = await request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(pasteHere[w]);
              if(response.body.length > 70) {
                  obj.bidResArr.push(JSON.stringify(response.body));
                  fs.writeFile(`WebServer/bid_responses/_br_${w}.json`,response.body,(err)=>{console.log(err)});
                  response_counter+=1;
                  fs.writeFile(`WebServer/bid_responses/br_${w}_${a[w]}.html`,`<html> <meta name="viewport" content="width=device-width, initial-scale=1" /> <script> function myFunction() {
                    // Get the text field
                    var copyText = document.getElementById("myInput").innerText;
                  
                     // Copy the text inside the text field
                    navigator.clipboard.writeText(${JSON.stringify(response.body)});
                  } </script <body> <!-- The text field -->
                  <p id="myInput"" style="display: none">${response.body} </p>
                  
                  <!-- The button used to copy the text -->
                  <button onclick="myFunction()">Copy text</button> </body></html>`,(err)=>{console.log(err)});
                  console.log(`Response counter is at ${response_counter} and Redis counter is at ${redis_counter}, while other counter is at ${other_counter}`);
                } 
                  else if (response.body === '{"msg":"failed to get bid response from Redis","code":200}') {
                      redis_counter+=1;
                      console.log(`Response counter is at ${response_counter} and Redis counter is at ${redis_counter}, while other counter is at ${other_counter}`);
                    }
                else {
                    other_counter+=1;
                    console.log(typeof(response.body));
                    console.log(`Response counter is at ${response_counter} and Redis counter is at ${redis_counter}, while other counter is at ${other_counter}`);
                }
            });
        } catch (e) {
            console.error(e)
        }
    }
}

getBidResponses(pasteHere).then((()=>{console.log('all done!')}));
    



