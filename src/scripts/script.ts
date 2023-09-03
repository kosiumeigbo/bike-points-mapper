// window.document.addEventListener("DOMContentLoaded", function () {

import { ted } from "../modules/module";
console.log(ted)

fetch("https://api.tfl.gov.uk/BikePoint/")
  .then((res) => res.json())
  .then((data) => {
    console.log(`length of array is ${data.length}`);
    return fetch(
      `https://api.tfl.gov.uk/Occupancy/BikePoints/${data[1].id}`
    ).then((res) => res.json());
  })
  .then((data) => {
    const [pointData] = data;
    console.log(pointData);
    document.body.textContent = `${pointData.id}`;
  })
  .catch((err) => console.error(err));

// });
