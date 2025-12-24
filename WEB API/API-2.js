//Pointer API

//Pointer API is Similar to Event like used to handles mouse, keyboard, and touch events.

const pointerCheck = document.getElementById("demo3");

pointerCheck.addEventListener("pointerdown", function () {
  console.log("Pointer Down");
});

pointerCheck.addEventListener("pointerup", function () {
  console.log("Pointer Up");
});

//Web Storage API
//Data are stored in key value pair.
//Two Types--->
//1>Local Storage --> Stores data in local machine./permanent data
//2>Session Storage --> Stores data in current session./Temporary data stored

localStorage.setItem("Name", "PRATHAM");
localStorage.setItem("Age", "22");
document.getElementById("demo4").innerHTML =
  "NAME:" +
  localStorage.getItem("Name") +
  "<br>AGE:" +
  localStorage.getItem("Age");

//Remove one item
localStorage.removeItem("Age");

//Remove all items
localStorage.clear();

//Session Storage
sessionStorage.setItem("Name", "PRATHAM");
sessionStorage.setItem("Age", "22");
document.getElementById("demo5").innerHTML =
  "NAME:" +
  sessionStorage.getItem("Name") +
  "<br>AGE:" +
  sessionStorage.getItem("Age");

//Validation API
//Validation API is used to check if the data is valid or not.
//The checkValidity() method is used to check if the data is valid or not.
//The reportValidity() method is used to report if the data is valid or not.
//The setCustomValidity() method is used to set the custom validity message.
//Properties
//rangeOverflow
//rangeUnderflow
//stepMismatch
//tooLong
//tooShort
//typeMismatch
//valueMissing

function myFunction3() {
  const inID = document.getElementById("demo6");
  if (!inID.checkValidity()) {
    document.getElementById("demo0").innerHTML = inID.validationMessage;
  } else {
    document.getElementById("demo0").innerHTML = "INPUT IS VALID";
  }
}

//WEB WORKER API
//A web worker is a JavaScript running in the background, without affecting the performance of the page.

let w;

function startWorker() {
  if (typeof w == "undefined") {
    w = new Worker("WorkerAPICheck.js");
  }
  w.onmessage = function (event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
