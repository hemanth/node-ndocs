#!/usr/bin/env node
var request = require('request');
var arguments = process.argv.splice(2);
if(!arguments){
  console.log("Usage : ndocs <module_name>; Ex : ndocs http");
  process.exit(1);
}
var api_url = "http://nodejs.org/api/"+arguments[0]+".json";
request(api_url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    //console.log(data.modules[0].methods[0].name);
    //console.log(data.modules[0].methods[0].desc);
    for(var res in data.modules[0].methods){
      console.log(data.modules[0].methods[res].name+ " => " +data.modules[0].methods[res].textRaw);
    }
  }
 else{
   console.log("Sorry, no such API");
   console.log("Usage : ndocs <module_name>; Ex : ndocs http");
   process.exit(1);
 }
})
