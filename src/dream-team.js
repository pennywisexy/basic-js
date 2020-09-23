const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if( typeof(members) === 'object' && Array.isArray(members)) {
    members = members
                   .filter(a => typeof(a) === 'string')
                   .map(function(b){ b = b.trim().toUpperCase();return b[0]})
                   .sort()
                   .join('')
                   
  return members;
  }else return false;
};

