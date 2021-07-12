
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

// classSearcher(string, string) -> number or float
// Searches for a tag with class with matching name as input string. 
exports.classSearcher = function(htmlRes, desire_field) {
  let stringMarker = '';
  let startLine = '';
  let beginIndex = '';
  let endIndex = '';
  let desiredString = '';
  switch(desire_field){
    case 'price': 
      stringMarker = '"listingheader-price"';
      startLine = htmlRes.indexOf(stringMarker);
      beginIndex = htmlRes.indexOf('">', startLine) + 3;
      endIndex = htmlRes.indexOf('</div>',beginIndex)
      desiredString = htmlRes.substring(beginIndex, endIndex);
      return parseFloat(desiredString.replace(/,/g, ''));
    
    case 'sqft':
      stringMarker = 'class="listingheader-details l-pipedlist">';
      startLine = htmlRes.indexOf(stringMarker);
      beginIndex = htmlRes.indexOf(' Bath</li>\n<li>', startLine) + 15;
      endIndex = htmlRes.indexOf('Sqft<', startLine);
      desiredString = htmlRes.substring(beginIndex, endIndex);
      return parseFloat(desiredString, 10);

    case 'bedrooms':
      stringMarker = 'class="listingheader-details l-pipedlist">';
      startLine = htmlRes.indexOf(stringMarker);
      beginIndex = htmlRes.indexOf('<li>', startLine) + 4;
      endIndex = htmlRes.indexOf('Bed</li>', startLine);
      desiredString = htmlRes.substring(beginIndex, endIndex);
      return parseFloat(desiredString, 10);

    case 'bathrooms':
      stringMarker = 'class="listingheader-details l-pipedlist">';
      startLine = htmlRes.indexOf(stringMarker);
      beginIndex = htmlRes.indexOf('Bed</li>\n<li>', startLine) + 13;
      endIndex = htmlRes.indexOf('Bath<', beginIndex);
      desiredString = htmlRes.substring(beginIndex, endIndex);
      return parseFloat(desiredString, 10);
    
    default:
      console.log('error: must specify in second argument the desired_field:\n"price"\n"sqft"\n"bedrooms"\n"bathrooms"')
  }
}

// scrapeSoldData(string, float) -> object
// grabs data of up to 5 neighboring houses within the distance specified by range
// htmlRes is the html response of the body
// range is the distance in kilometers from input address to a neighboring house 
exports.scrapeSoldData = function(htmlRes, range) {
  let stringMarker = 'previewcard previewcard--sold';
  let startLine = htmlRes.indexOf(stringMarker);
  let beginIndex = 0;
  let endIndex = 0;
  let desiredString = '';
  let rangeIndex = 0;
  let endRangeIndex = 0;
  let distance = 0;

  //implement a while loop for neighboring houses


  rangeIndex = htmlRes.indexOf('Distance', startLine) + 15;
  endRangeIndex = htmlRes.indexOf('</span>', rangeIndex);
  distance = parseFloat(htmlRes.substring(rangeIndex, endRangeIndex));
  console.log(distance);

  if (range >= distance) {
    //parsing through the unordered list for list items must be done in this order
    //should store in object
    beginIndex = htmlRes.indexOf('class="previewcard-title">$', startLine) + 27;
    endIndex = htmlRes.indexOf('</div>', beginIndex);
    desiredString = htmlRes.substring(beginIndex, endIndex);
    console.log(parseFloat(desiredString.replace(/,/g, ''))); //sold price obtained

    beginIndex = htmlRes.indexOf('<li>', beginIndex) + 4;
    endIndex = htmlRes.indexOf('bd</li>', beginIndex);
    console.log(Number(htmlRes.substring(beginIndex, endIndex))); //bedrooms obtained

    beginIndex = htmlRes.indexOf('<li>', endIndex) + 4;
    endIndex = htmlRes.indexOf('ba</li>', beginIndex);
    console.log(Number(htmlRes.substring(beginIndex, endIndex))); //bathrooms obtained

    beginIndex = htmlRes.indexOf('<li>', endIndex) + 4;
    endIndex = htmlRes.indexOf('</li>', beginIndex);
    console.log(parseFloat(htmlRes.substring(beginIndex, endIndex))); //sqft obtained
  }

}


// idSearcher(string, boolean) -> string OR object
// Searches for a tag id with matching name as input string. 
// Returns a string if boolean is false.
// Returns an object if boolean is true.
exports.idSearcher = function(string, bool) {
  return "wip"
}