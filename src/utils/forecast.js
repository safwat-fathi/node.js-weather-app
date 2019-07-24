const request = require("request");

const forecast = (location, callback) => {
  const url = `https://api.darksky.net/forecast/5fdca6101403c767ac3057d8c0945f20/${location}?units=si`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, `Temperature is: ${body.currently.temperature}`);
    }
  });
};

module.exports = forecast;
