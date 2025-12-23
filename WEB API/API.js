//Fetch API

//The Fetch API interface allows web browser to make HTTP requests to web servers.
// No need for XMLHttpRequest anymore.
/*
step1:
let file = "WebAPI_Information.txt";
fetch(file)
  .then((response) => response.text())
  .then((data) => (document.getElementById("demo").innerHTML = data));
*/
//Since Fetch is based on async and await, the example above might be easier to understand like this

getText("WebAPI_Information.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}

//Web Geolocation API

//The Web Geolocation API provides a way to get the current location of a user.
//Geolocation is most accurate for devices with GPS like smartphones and tablets.

//Geoloaction API will only work on secure contexts such as HTTP

//Using Geolocation API

//The getCurrentPosition() method is used to return user position-->latitude and langitude..
//The watchPosition() method is used to watch user position--> latitude and langitude
//The clearWatch() method is used to clear watch-->
//The getWatchPosition() method is used to get watch position--> latitude and langitude

//Get Current Position
const x = document.getElementById("demo2");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br> Longitude: " +
    position.coords.longitude;
}

//Handling Error and rejections

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

//WEB HISTORY API

//BACK
function myFunction() {
  window.history.back();
}

//GO

function myFunction2() {
  window.history.go(1);
}
