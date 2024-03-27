import getUserData from './getData.js';

const data = getUserData(1);

console.log("Data: ", data.then((data) => console.log(data)));