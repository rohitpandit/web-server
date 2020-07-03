const request = require("postman-request");

const geolocation = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1Ijoicm9oaXRwYW5kaXQwMzExIiwiYSI6ImNrYzMwYTZ3czBkMGYycm50bmsydDVhZ28ifQ.WAPvF5bG2Hg7q1cR8R7cZQ&limit=1";
  request({ url, json: true }, (error, response, {features}) => {
    if (error) {
      callback("Unable to connect to the server!", undefined);
    } else if (features.length === 0) {
      callback("No result found for this query", undefined);
    } else {
      callback(undefined, {
        longitude: features[0].center[0],
        latitude: features[0].center[1],
      });
    }
  });
};

module.exports = geolocation;
