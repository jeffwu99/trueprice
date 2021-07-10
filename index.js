const { SIGCHLD } = require('constants');
const https = require('https');
const utils = require('./utils');
const REWQUERYPATH = '/properties/search/results?initial_search_method=single_field&query='

//Various scraped data here:
let inputAddressData = {
  listingPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}
let neighborOne = {
  soldPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}
let neighborTwo = {
  soldPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}
let neighborThree = {
  soldPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}
let neighborFour = {
  soldPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}
let neighborFive = {
  soldPrice: 0,
  floorSpace: 0,
  lotSize: 0,
  yearBuilt: 0,
  yearRenovated: 0,  //this will be updated to yearBuilt if no renovations were made
}

let inputAddress = '3058 spuraway avenue'; //as example
let queryInput = utils.addPlus(inputAddress);
let body = ''; //will be clearing this in every get request and refilling

//optionsOne is first request to GET the url of address page
let optionsOne = {
  hostname: 'www.rew.ca',
  method: 'GET',
  path: REWQUERYPATH.concat(queryInput),
  headers: {
   'User-Agent': 'PostmanRuntime/7.28.0'
  }
}

//first get request
function getUrl(optionsOne) {
  return new Promise((resolve, reject) => {
    https.request(optionsOne, (res) =>{
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve(utils.findCorrectUrl(inputAddress, body));
      });
      console.log("first status code: " + res.statusCode);
    })
    .end()
    .on('error', (err) => {reject(err)});
    })
    .catch((err) => {
      console.log(err);
      console.log("first request errored");
    });
  }

//second get request
function getInputInfo(optionsTwo) {
  return new Promise((resolve, reject) => {
    https.request(optionsTwo, (res) => {
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve(utils.findPropertyInsightsUrl(body));
        //classSearcher function
        //missing resolve()
      })
      console.log("second status code: " + res.statusCode);
    })
    .end()
    .on('error', (err) => {reject(err)});
  })
  .catch((err) => {
    console.log(err);
    console.log("second request errored");
  });
}

//third get request
function getPropertyInsights(optionsThree) {
  return new Promise((resolve, reject) => {
    https.request(optionsThree, (res) => {
      body = ''; //resetting body variable from last request
      res.on('data', (chunk) => {
        body += chunk
      });
      res.on('end', () => {
        console.log(body.match(/data-login-link/g))
      })
      console.log("third status code: " + res.statusCode);
      resolve("42");
    })
    .end()
    .on('error', (err) => {reject(err)});
  })
  .catch((err) => {
    console.log(err);
    console.log("third request errored");
  });
}

async function execute() {
  var resolvedUrl = await getUrl(optionsOne);  
  body = ''; //clearing body variable here

  //second request options
  let optionsTwo = {
    hostname: 'www.rew.ca',
    method: 'GET',
    path: resolvedUrl, //variable
    headers: {
      'User-Agent': 'PostmanRuntime/7.28.0'
      }
  };
  ResolvedUrl = await getInputInfo(optionsTwo);
  body = ''; //clearing body variable here

  //third request options
  let optionsThree = {
    hostname: 'www.rew.ca',
    method: 'GET',
    path: ResolvedUrl,
    headers: {
      'User-Agent': 'PostmanRuntime/7.28.0'
    }
  }
  var respThree = await getPropertyInsights(optionsThree);
  console.log(respThree);
}

execute()

console.log("hello");