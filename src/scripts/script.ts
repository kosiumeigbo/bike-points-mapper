import {getDataForAllBikePoints} from "../modules/module";

const bikePointsURL: string = "https://api.tfl.gov.uk/BikePoint/";
getDataForAllBikePoints(bikePointsURL).then((data) => console.log(data));

fetch("https://api.tfl.gov.uk/Journey/Meta/Modes")
  .then((res) => res.json())
  .then((data) => console.log(data));
