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
let scrapedUrlPath = '';

//optionsOne is first request to GET the url of address page
let optionsOne = {
  hostname: 'www.rew.ca',
  method: 'GET',
  path: REWQUERYPATH.concat(queryInput),
  headers: {
   'User-Agent': 'PostmanRuntime/7.28.0'
  }
}

//optionsTwo is actual request to url of listing & full data

//optionsThree is  request to url of REW listing's insights data 
let optionsThree = {
  method: 'GET',
  headers: {
    'User-Agent': 'PostmanRuntime/7.28.0'
  }
}

//first get request
function getUrl(optionsOne) {
  return new Promise((resolve, reject) => {
    https.request(optionsOne, (res) =>{
      if (res.statusCode < 200 || res.statusCode > 300) {
        reject("error in first request, status " + res.statusCode);
      }
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        scrapedUrlPath = utils.findCorrectUrl(inputAddress, body);
        resolve(scrapedUrlPath);
      });
      console.log(res.statusCode);
    }).end();
  })
}

//second get request
function getInputInfo(optionsTwo) {
  return new Promise((resolve, reject) => {
    https.request(optionsTwo, (res) => {
      body = ''; //resetting body variable from last request
      if (res.statusCode < 200 || res.statusCode > 300) {
        reject("error in first request, status " + res.statusCode);
      }
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        //resolve(body);
        //do something with full data
       let priceVar = utils.classSearcher(body,'sqft');
       console.log(priceVar);
      })
    }).end();
  })
}


async function execute() {
  var resp = await getUrl(optionsOne);
  let optionsTwo = {
    hostname: 'www.rew.ca',
    method: 'GET',
    path: resp,
    headers: {
      'User-Agent': 'PostmanRuntime/7.28.0'
    }
  }
  console.log(resp);
  var respTwo = await getInputInfo(optionsTwo);
  console.log(respTwo);
}

execute()

const endOne = '';
const endTwo = '';

console.log("hello");