module.exports = function getBaseURL() {
    // var base_url = window.location.origin;

var host = window.location.hostname;

var pathArray = host.split( '.' );
   
return pathArray[0];
  };