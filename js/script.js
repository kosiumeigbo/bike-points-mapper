"use strict";
// window.document.addEventListener("DOMContentLoaded", function () {
fetch("https://api.tfl.gov.uk/BikePoint/")
    .then((res) => res.json())
    .then((data) => {
    console.log(`length of array is ${data.length}`);
    return fetch(`https://api.tfl.gov.uk/Occupancy/BikePoints/${data[1].id}`).then((res) => res.json());
})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
// });
