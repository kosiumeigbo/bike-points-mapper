import {buildPage} from "../modules/module";

const bikePointsURL: string = "https://api.tfl.gov.uk/BikePoint/";

window.addEventListener("DOMContentLoaded", function () {
  buildPage(bikePointsURL).then((mainSection) =>
    document.body.insertAdjacentElement("beforeend", mainSection as HTMLElement)
  );
});
