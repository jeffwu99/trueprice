
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



// findCorrectUrl(string, string, instance) -> string
// given html response IN STRING, finds and returns desired url 
// stringOne is search criteria
// stringTwo is html
// instance is natural number of which occurence of stringOne is wanted
exports.findCorrectUrl = function(stringOne, stringTwo, instance) {
  return "wip"
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