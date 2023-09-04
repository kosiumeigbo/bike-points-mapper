// window.document.addEventListener("DOMContentLoaded", function () {

import {ArrayOfBikePoints} from "../modules/module";
/*
fetch("https://api.tfl.gov.uk/BikePoint/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[1]);
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
*/
// });

ArrayOfBikePoints("https://api.tfl.gov.uk/BikePoint/").then((data) =>
  console.log(data)
);
