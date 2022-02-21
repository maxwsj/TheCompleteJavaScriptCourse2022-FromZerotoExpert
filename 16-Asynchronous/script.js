'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// // https://restcountries.com/v2/

// // Our First AJAX Call: XMLHttpReques //

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// Get Data and Imediatelly Converts TO JSON
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${flag}" />
      <div class="country__data">
        <h3 class="country__name">${name}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// // Utilizando o getJSON()
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => {
//       [data] = data;
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('brazil');
// });
// getCountryData('australia');

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`${err.message} 💥`));
// };

// whereAmI(52.508, 13.381);

//// The Event Loop in Practice ////
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);

// // Allow us to build a promise, so to create a promise that is immediately resolved. One that immediately has a success value
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); // This callback function will get called with the resolved value, as an argument.

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

//// Building a Simple Promise ////

/** HOW TO  ENCAPSULATE AN ASYNCHRONOUS BEHAVIOR INTO A PROMISE **/
// Promises are essentially just a special kind of object in JavaScript
// The promise constructor takes one argument and it is called executor function.
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     // It will execute this function by passing in two other arguments.
//     // This function will contain the asynchronous behavior, where we try to handle with the promise
//     // Resolve
//     if (Math.random() >= 0.5) {
//       // fulfilled promise or resolve promise
//       resolve('You WIN');
//     } else {
//       // Reject
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// CONSUMING THE PROMISE
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying: Means to convert callback based asynchronous behavior to promise based.

// Promisifying the setTimeout
// const wait = function (seconds) {
//   // Fetch function its a function that returns a promise.
//   // Inside of this function we will actually create and return the promise. Creating a function and then from there returning a promise and this will encapsulate the asynchronous operation even further.
//   return new Promise(function (resolve) {
//     // Here we dont need the reject argument because it is impossible for the timer to fail

//     // In the case of timer it's also not really necessary to wait for some value
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// Crescente
// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 3 seconds'));

// // Decrescente
// wait(3)
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 seconds'));

// Creating a resolve promise imediatelly
// Promise.resolve('resolve promise imediatelly').then(x => console.log(x)); // static method on the promise  constructor

// // Creating a fulfilled/rejected promise imediatelly
// Promise.reject(new Error('rejected promise imediatelly')).catch(x =>
//   console.error(x)
// ); // static method on the promise  constructor

/// Promisifying the Geolocation API ///

// Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.prov}`);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.prov}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// // We need to create a global currentImg to use it on the next then()
// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2); // If we want to chain the next hen handler we need to return
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
// .catch(err => console.log(err));

//////// Consuming Promises with Async/Await ////////////

// O await faz com que a função espere o resultado da promise
// We can simply await until the value of the promise is returned.

// Async Function = A function that will basically keep  running in the background while perfoming the code that is inside of it, then when this function is done, it automatically returns a promise.
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   // Geolocation
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   // Reverse geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   // Country data
//   // Inside of a async function we can have o ne or more await statements
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo.country}`
//   ); // here we need a promise | await will stop the code execution at this point of the funtion until the promise is fulfilled. Until t he data has  been fetched.

//   const data = await res.json();
//   renderCountry(data[0]);
// };

// whereAmI();

/////////////////  Error Handling With try...catch      ///////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     // Country data
//     // Inside of a async function we can have o ne or more await statements
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     ); // here we need a promise | await will stop the code execution at this point of the funtion until the promise is fulfilled. Until t he data has  been fetched.

//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };

// whereAmI();

// Small example
// try {
//   let y = 1;
//   const x = 2;
//   x = y;
// } catch (err) {
//   // this catch block will access to whatever error occurred in the try block
//   alert(err.message);
// }

/////////// Returning Values from Async Functions //////////////
// // Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/alpha/${dataGeo.prov}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.prov}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//     // Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// // USING ASYNC IIFEs: immediately-invoked function expression
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

/////////////////////  Running Promises in Parallel  ///////////////////

// Getting the capital of cities
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('brazil', 'canada', 'japan');

/////////// Other Promise Combinators: race, allSettled and any //////////

//////////// Promise.race() //////////

// Promise.race() - Receives an array of promises and it also returns a promise.
// the promise returned by the it, is settled as soon as one of the input promises settles.
// settles = a value is available, but it doesn't matter if the promise got rejected or fulfilled.
// resuming: the first settled promise wins the race.
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/brazil`),
//     getJSON(`https://restcountries.com/v3.1/name/japan`),
//     getJSON(`https://restcountries.com/v3.1/name/canada`),
//   ]);

//   console.log(res[0]);
// })();

// We can create an automatically promise that rejects after some time.
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/canada`),
//   timeout(0.1),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//////////// Promise.allSettled() //////////

// It takes in an array of Promises and it will return an array of all the settled promises. Will never short circuits.
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Another Success'),
//   Promise.reject('ERROR'),
// ]).then(res => console.log(res));

//////////// Promise.any() //////////

// Will return the first fulfilled promise and will simply ignore rejected promises.

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

///// CODING CHALLENGE 3# /////

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
GOOD LUCK 😀
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// Making the three images load at the same time
// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// Returned array of promises:
