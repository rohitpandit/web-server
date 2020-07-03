const request = require("postman-request");

const forecast = ( latitude,longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2547a2b4f33b86762fa19a78d7b8cf80&query=" +latitude+ "," +longitude+"&units=m";
  request({ url, json: true }, (error, response, {error: err, current}) => {
    if (error) {
      callback("Unable to connect to the server!", undefined);
    } else if (err) {
      callback("Cannot find location", undefined);
    } else {
      callback(undefined,
        `${current.weather_descriptions[0]}. There is ${current.temperature} degree, and it feel like ${current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
