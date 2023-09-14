import {getDataForAllBikePoints} from "../modules/module";
import {BikePoint} from "../modules/types";
import Chart from "chart.js/auto";

const bikePointsURL: string = "https://api.tfl.gov.uk/BikePoint/";

const barChartArea = document.getElementById("bar-chart");
const pieChartArea = document.getElementById("pie-chart");

const barChartConfigObj = {
  type: "bar",
};
const pieChartConfigObj = {
  type: "pie",
};

(async function () {
  try {
    const sortedBikePoints = (await getDataForAllBikePoints(bikePointsURL)) as {
      name: string;
      bikePoints: BikePoint[];
    }[];

    if (sortedBikePoints instanceof Error) {
      throw new Error("Could not get data from server");
    }

    const barChartDataObj = {
      labels: sortedBikePoints.map((area) => area.name),
      datasets: [
        {
          label: "Number of bikepoints",
          data: sortedBikePoints.map((area) => area.bikePoints.length),
        },
      ],
    };

    const pieChartDataObj = {
      labels: sortedBikePoints.map((area) => area.name),
      datasets: [
        {
          label: "Number of bikepoints",
          data: sortedBikePoints.map((area) => area.bikePoints.length),
        },
      ],
    };

    if (barChartArea && pieChartArea) {
      new Chart(barChartArea, {
        ...barChartConfigObj,
        data: barChartDataObj,
      });

      new Chart(pieChartArea, {
        ...pieChartConfigObj,
        data: pieChartDataObj,
      });
    }
  } catch (e) {
    console.log(e);
  }
})();
