import {BikePoint} from "./types";
import {Chart} from "chart.js/auto";
import L from "leaflet";

const noServerData: string = "Could not get data from server";

/* 
export const getDataForAllBikePoints = async function (url: string) {
  try {
    const response = await fetch(url);
    const allBikePoints = (await response.json()) as BikePoint[];

    const bikePointArea = allBikePoints.map((bikepoint: any) =>
      bikepoint.commonName.split(",").at(-1).trim()
    );

    const uniqueBikePoints = Array.from(new Set<string>(bikePointArea));

    const result = uniqueBikePoints.map((bikePoint) => {
      const name = bikePoint;
      const bikePoints = allBikePoints.filter((bkPoint) =>
        bkPoint.commonName.includes(name)
      );

      return {name, bikePoints};
    });

    return result;
  } catch (e) {
    console.log(e);
  }
};
*/

export const getDataForAllBikePoints = async function (url: string) {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw Error(noServerData);
    }
    const allBikePoints = (await response.json()) as BikePoint[];

    const bikePointsByArea = new Map<string, BikePoint[]>();

    for (const bikePoint of allBikePoints) {
      const area = bikePoint.commonName.split(",").at(-1)?.trim();
      if (area) {
        if (!bikePointsByArea.has(area)) {
          bikePointsByArea.set(area, []);
        }
        bikePointsByArea.get(area)?.push(bikePoint);
      }
    }

    const result = Array.from(bikePointsByArea.entries()).map(
      ([name, bikePoints]) => {
        return {name, bikePoints};
      }
    );

    return result;
  } catch (e) {
    return e as Error;
  }
};

export const fullPageErrorHTML = function (msg: string): string {
  return `
  <div class="page-error">
    <h1>PAGE ERROR</h1>
    <p>${msg}</p>
  </div>
  `;
};

export const fullPageTitle = function (): string {
  return `
  <h1 class="heading">
    BIKEPOINTS IN LONDON<br />
    <span>according to TfL</span>
  </h1>
  `;
};

export const getSelectOptionDropDownList = function (bikePoint: {
  name: string;
  bikePoints: BikePoint[];
}): string {
  return `
  <option value="${bikePoint.name}">${bikePoint.name}</option>
  `;
};

export const getDataForCharts = function (
  selArea: string,
  sortedArr: {
    name: string;
    bikePoints: BikePoint[];
  }[]
): (
  | string[]
  | {
      name: string;
      bikePoints: BikePoint[];
    }
  | number[]
)[] {
  const selectAreaObj = sortedArr.find(
    (areaObj) => selArea === areaObj.name
  ) as {
    name: string;
    bikePoints: BikePoint[];
  };

  const labelNamesArray = selectAreaObj?.bikePoints.map((bkPoint) =>
    bkPoint.commonName.split(",")[0]?.trim()
  ) as string[];

  const selectAreaNbBikes = selectAreaObj?.bikePoints.map(
    (bkPoint: BikePoint) => {
      const bkPointAdditionalProps = bkPoint.additionalProperties;
      return Number(
        bkPointAdditionalProps.find((obj) => obj.key === "NbBikes")?.value
      );
    }
  ) as number[];

  const selectAreaNbEmptyDocks = selectAreaObj?.bikePoints.map(
    (bkPoint: BikePoint) => {
      const bkPointAdditionalProps = bkPoint.additionalProperties;
      return Number(
        bkPointAdditionalProps.find((obj) => obj.key === "NbEmptyDocks")?.value
      );
    }
  ) as number[];

  const selectAreaNbDocks = selectAreaObj?.bikePoints.map(
    (bkPoint: BikePoint) => {
      const bkPointAdditionalProps = bkPoint.additionalProperties;
      return Number(
        bkPointAdditionalProps.find((obj) => obj.key === "NbDocks")?.value
      );
    }
  ) as number[];

  return [
    selectAreaObj,
    labelNamesArray,
    selectAreaNbBikes,
    selectAreaNbEmptyDocks,
    selectAreaNbDocks,
  ];
};

/* ----------------- Build Page Function ---------------- */

export const buildPage = async function (url: string) {
  try {
    const sortedBikePointsArray = (await getDataForAllBikePoints(url)) as
      | {
          name: string;
          bikePoints: BikePoint[];
        }[]
      | Error;
    if (sortedBikePointsArray instanceof Error) {
      throw sortedBikePointsArray;
    }
    // console.log(sortedBikePointsArray);

    // Main page content container
    const main = document.createElement("main");

    // Page Title Heading
    main.insertAdjacentHTML("beforeend", fullPageTitle());

    // Label for dropdown list
    const label = document.createElement("label");
    label.setAttribute("for", "areas");
    label.textContent = "Choose an area:";
    main.insertAdjacentElement("beforeend", label);

    // Drop down list
    const dropDownList = document.createElement("select");
    dropDownList.id = "areas";

    const disabledOption = document.createElement("option");
    disabledOption.textContent = "Choose an option" as string; // Creating disabled option
    disabledOption.setAttribute("selected", "");
    disabledOption.setAttribute("disabled", "");
    dropDownList.insertAdjacentElement("afterbegin", disabledOption);

    sortedBikePointsArray.forEach((obj) => {
      dropDownList.insertAdjacentHTML(
        "beforeend",
        getSelectOptionDropDownList(obj)
      );
    });
    main.insertAdjacentElement("beforeend", dropDownList);

    // Bar Chart Container and Canvas
    const barChartContainer = document.createElement("div");
    barChartContainer.id = "bar-chart-container" as string;

    const barChartCanvas = document.createElement("canvas");
    barChartCanvas.id = "bar-chart" as string;
    barChartCanvas.classList.add("chart-area");

    barChartContainer.insertAdjacentElement("beforeend", barChartCanvas);
    main.insertAdjacentElement("beforeend", barChartContainer);

    // Container for all pie charts
    const allPieChartsContainer = document.createElement("div");
    allPieChartsContainer.classList.add("pie-charts-container");

    // Pie Chart Containers and Canvas
    const [
      pieChartContainerNbBikes,
      pieChartContainerNbEmptyDocks,
      pieChartContainerNbDocks,
    ] = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];

    pieChartContainerNbBikes.id = "pie-chart-container-nbbikes" as string;
    pieChartContainerNbEmptyDocks.id =
      "pie-chart-container-nbemptydocks" as string;
    pieChartContainerNbDocks.id = "pie-chart-container-nbdocks" as string;

    const [
      pieChartCanvasNbBikes,
      pieChartCanvasNbEmptyDocks,
      pieChartCanvasNbDocks,
    ] = [
      document.createElement("canvas"),
      document.createElement("canvas"),
      document.createElement("canvas"),
    ];

    // Pie Chart Canvas NbBikes
    pieChartCanvasNbBikes.id = "pie-chart-nbbikes" as string;
    pieChartCanvasNbBikes.classList.add("chart-area");

    pieChartContainerNbBikes.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbBikes
    );
    allPieChartsContainer.insertAdjacentElement(
      "beforeend",
      pieChartContainerNbBikes
    );

    // Pie Chart Canvas NbEmptyDocks
    pieChartCanvasNbEmptyDocks.id = "pie-chart-nbemptydocks" as string;
    pieChartCanvasNbEmptyDocks.classList.add("chart-area");

    pieChartContainerNbEmptyDocks.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbEmptyDocks
    );
    allPieChartsContainer.insertAdjacentElement(
      "beforeend",
      pieChartContainerNbEmptyDocks
    );

    // Pie Chart Canvas NbDocks
    pieChartCanvasNbDocks.id = "pie-chart-nbdocks" as string;
    pieChartCanvasNbDocks.classList.add("chart-area");

    pieChartContainerNbDocks.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbDocks
    );
    allPieChartsContainer.insertAdjacentElement(
      "beforeend",
      pieChartContainerNbDocks
    );

    main.insertAdjacentElement("beforeend", allPieChartsContainer);

    let myBarChart: Chart | any;
    let myPieChartNbBikes: Chart | any;
    let myPieChartNbEmptyDocks: Chart | any;
    let myPieChartNbDocks: Chart | any;

    // Event Listener for when an option is selected
    dropDownList.addEventListener("change", function () {
      const [
        selAreaObj,
        selLabelNamesArr,
        selAreaNbBikes,
        selAreaNbEmptyDocks,
        selAreaNbDocks,
      ] = getDataForCharts(dropDownList.value, sortedBikePointsArray);

      console.clear();
      console.log(selAreaObj);
      console.log(selLabelNamesArr);
      console.log(selAreaNbBikes);
      console.log(selAreaNbEmptyDocks);
      console.log(selAreaNbDocks);

      if (
        myBarChart instanceof Chart &&
        myPieChartNbBikes instanceof Chart &&
        myPieChartNbDocks instanceof Chart &&
        myPieChartNbEmptyDocks instanceof Chart
      ) {
        myBarChart.destroy();
        myPieChartNbBikes.destroy();
        myPieChartNbDocks.destroy();
        myPieChartNbEmptyDocks.destroy();
      }

      myBarChart = new Chart(barChartCanvas, {
        type: "bar",
        data: {
          labels: selLabelNamesArr as string[],
          datasets: [
            {
              label: "Number of NbBikes",
              data: selAreaNbBikes,
            },
            {
              label: "Number of NbEmptyDocks",
              data: selAreaNbEmptyDocks,
            },
            {
              label: "Number of NbDocks",
              data: selAreaNbDocks,
            },
          ],
        },
      });

      myPieChartNbBikes = new Chart(pieChartCanvasNbBikes, {
        type: "pie",
        data: {
          labels: selLabelNamesArr as string[],
          datasets: [
            {
              label: "Number of NbBikes",
              data: selAreaNbBikes,
            },
          ],
        },
      });

      myPieChartNbEmptyDocks = new Chart(pieChartCanvasNbEmptyDocks, {
        type: "pie",
        data: {
          labels: selLabelNamesArr as string[],
          datasets: [
            {
              label: "Number of NbDocks",
              data: selAreaNbEmptyDocks,
            },
          ],
        },
      });

      myPieChartNbDocks = new Chart(pieChartCanvasNbDocks, {
        type: "pie",
        data: {
          labels: selLabelNamesArr as string[],
          datasets: [
            {
              label: "Number of NbDocks",
              data: selAreaNbDocks,
            },
          ],
        },
      });
    });

    return main;
  } catch (e) {
    const main = document.createElement("main");
    main.insertAdjacentHTML(
      "afterbegin",
      fullPageErrorHTML((e as Error).message)
    );
    return main;
  }
};
