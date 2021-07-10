
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
  let hrefBegin = htmlRes.indexOf('/insights/', startLine);
  let hrefEnd = htmlRes.indexOf('">', hrefBegin);
  return htmlRes.substring(hrefBegin, hrefEnd)
}

// classSearcher(string, boolean) -> string OR object
// Searches for a tag with class with matching name as input string. 
// Returns a string if boolean is false.
// Returns an object if boolean is true.
exports.classSearcher = function(string, bool) {
  return "wip"
}

// idSearcher(string, boolean) -> string OR object
// Searches for a tag id with matching name as input string. 
// Returns a string if boolean is false.
// Returns an object if boolean is true.
exports.idSearcher = function(string, bool) {
  return "wip"
}