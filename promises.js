// promises.js

//Promise-->
// 1. Pending
// 2. Fulfilled
// 3. Rejected

//Promise means to promise that something will be done in future

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("First promise execute ");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Then Promise one resolved");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "P", email: "abc@gmail.com" });
  }, 1000);
});

promiseTwo.then(function (user) {
  console.log("User data received:", user);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "abc", password: "abc@gmail.com" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

promiseThree
  .then((user) => {
    console.log("Promise three resolved:", user);
  })
  .catch((error) => {
    console.log("Promise three rejected:", error);
  })
  .finally(() => {
    console.log("Promise three completed (either resolved or rejected)");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "abc", password: "abc@gmail.com" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async used in try , catch

async function getAllusers(params) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getAllusers();

// fetch is used to fetch data from api
// it returns promise

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
