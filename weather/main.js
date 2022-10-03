let weather = require("weather-js");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let location = "";

rl.question(
  "In which country would you like to check the weather? ",
  function (country) {
    rl.question("In which city? ", function (city) {
      location = `${country}, ${city}`;
      checkTheWeather(location);
      rl.close();
    });
  }
);

function checkTheWeather(location) {
  weather.find({ search: location, degreeType: "C" }, function (err, result) {
    if (err) console.log(err);
    console.log(JSON.stringify(result[0].current, null, 2));
  });
}
