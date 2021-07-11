
// addPlus(string) -> string
// Adds replaces " " with "+" in a string.
exports.addPlus = function(string) {
  return string.replace(/ /g, "+")
}

// addHyphen(string) -> string
// replaces " " with "-" in a string.
exports.addHyphen = function(string) {
  return string.replace(/ /g, "-")
}

// capitalizeAddress(string) -> string
// capitalizes the first letter of each word of the address
let capitalizeIt = exports.capitalizeAddress = function(string) {
  let arr = string.split(" ");
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ")
}

// findCorrectUrl(string, string) -> string
// ONLY Use this function for finding input address url from the initial get request
// given html response IN STRING, finds and returns desired url path
// stringOne is search criteria (with spaces)
// stringTwo is html response
exports.findCorrectUrl = function(stringOne, stringTwo) {
  let capitalized = capitalizeIt(stringOne);
  let startLine = stringTwo.indexOf('title="' + capitalized);
  let pathBegin = stringTwo.indexOf('/', startLine);
  let pathEnd = stringTwo.indexOf('"', pathBegin);
  return stringTwo.substring(pathBegin, pathEnd)
}


// findPropertyInsightsUrl(string) -> string
// ONLY use this function for finding the url for property insights of a specific listing on REW
// given html response IN STRING, finds and returns desired url
// htmlRes is html response
exports.findPropertyInsightsUrl = function(htmlRes) {
  let stringMarker = 'data-ga-tracking="propertyInsightsClick"';
  let startLine = htmlRes.indexOf(stringMarker);
  let hrefBegin = htmlRes.indexOf('href="', startLine) + 6; //add 6 indexOf starts at 'h' and has 6 additional characters before url
  let hrefEnd = htmlRes.indexOf('">', hrefBegin);
  return htmlRes.substring(hrefBegin, hrefEnd);
}

// classSearcher(string, boolean) -> string OR object
// Searches for a tag with class with matching name as input string. 
// Returns a string if boolean is false.
// Returns an object if boolean is true.
// switch case
exports.classSearcher = function(htmlRes, desire_field) {
  //use switch statements.
  // let stringMarker = '';
  // let startLine = 
  // switch(desire_field){
  //   case 'price': 
  //     let stringMarker = '"listingheader-price"';
  //     let startLine = htmlRes.indexOf(stringMarker);
  //     let beginIndex = htmlRes.indexOf('">', startLine) + 3;
  //     let endIndex = htmlRes.indexOf('</div>',beginIndex)
  //     let priceString = htmlRes.substring(beginIndex, endIndex);
  //     return parseFloat(priceString.replace(/,/g, ''));
    
  //   case 'sqft':
  //     let stringMarker = 'class="listingheader-details l-pipedlist">';
  //     let startLine = htmlRes.indexOf(stringMarker);
  //     let beginIndex = htmlRes.indexOf(' Bath</li>\n<li>', startLine) + 15;
  //     let endIndex = htmlRes.indexOf('Sqft<', startLine);
  //     let sqftString = htmlRes.substring(beginIndex, endIndex);
  //     return parseFloat(sqftString, 10);

  // }
  if (desire_field == 'price'){
    let stringMarker = '"listingheader-price"';
    let startLine = htmlRes.indexOf(stringMarker);
    let beginIndex = htmlRes.indexOf('">', startLine) + 3;
    let endIndex = htmlRes.indexOf('</div>',beginIndex)
    let priceString = htmlRes.substring(beginIndex, endIndex);
    return parseFloat(priceString.replace(/,/g, ''));

  }
  if (desire_field == 'sqft'){
    let stringMarker = 'class="listingheader-details l-pipedlist">';
    let startLine = htmlRes.indexOf(stringMarker);
    let beginIndex = htmlRes.indexOf(' Bath</li>\n<li>', startLine) + 15;
    let endIndex = htmlRes.indexOf('Sqft<', startLine);
    let sqftString = htmlRes.substring(beginIndex, endIndex);
    return parseFloat(sqftString, 10);
  }
  if (desire_field == 'bedrooms'){
    let stringMarker = 'class="listingheader-details l-pipedlist">';
    let startLine = htmlRes.indexOf(stringMarker);
    let beginIndex = htmlRes.indexOf('<li>', startLine) + 4;
    let endIndex = htmlRes.indexOf('Bed</li>', startLine);
    return htmlRes.substring(beginIndex, endIndex);
  }
  if (desire_field == 'bathrooms'){
    let stringMarker = 'class="listingheader-details l-pipedlist">';
    let startLine = htmlRes.indexOf(stringMarker);
    let beginIndex = htmlRes.indexOf('Bed</li>\n<li>', startLine) + 13;
    let endIndex = htmlRes.indexOf('Bath<', beginIndex);
    return htmlRes.substring(beginIndex, endIndex);
  }
}

// idSearcher(string, boolean) -> string OR object
// Searches for a tag id with matching name as input string. 
// Returns a string if boolean is false.
// Returns an object if boolean is true.
exports.idSearcher = function(string, bool) {
  return "wip"
}