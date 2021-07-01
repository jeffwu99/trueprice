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



let inputAddress = '';
let queryInput = utils.addPlus(inputAddress);
let scrapedUrl = '';

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
let optionsTwo = {
  method: 'GET',
  headers: {
    'User-Agent': 'PostmanRuntime/7.28.0'
  }
}

//optionsThree is  request to url of REW listing's insights data 
let optionsThree = {
  method: 'GET',
  headers: {
    'User-Agent': 'PostmanRuntime/7.28.0'
  }
}


https.request(optionsOne, (res) =>{
  console.log("atleast it sent");
  // res.on("data", (chunk) => {
  //   console.log("this is the body" + chunk);
  //   let rawURL = "whatever the href to listing page is"
  //   scrapedUrlPath = do shit to rawURL with util
  // });
  console.log(res.statusCode);
  console.log(res.headers);
  console.log("completed");
}).end();


let responseResults = []; //parsed responce object stored here
const endOne = '';
const endTwo = '';

console.log("hello");

