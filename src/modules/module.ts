import {BikePoint} from "./types";
import {Chart} from "chart.js/auto";
import L from "leaflet";

const noServerData: string = "Could not get data from server";

/* Leaflet Starts */
const minZoom: number = 0;
const maxZoom: number = 20;

const googleStreets: L.TileLayer = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    minZoom,
    maxZoom,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: "Google Maps",
  }
);

const googleHybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    minZoom,
    maxZoom,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: "Google Maps",
  }
);

const googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    minZoom,
    maxZoom,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: "Google Maps",
  }
);

const googleTerrain = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
  {
    minZoom,
    maxZoom,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: "Google Maps",
  }
);

const baseMaps = {
  "Google Street": googleStreets,
  "Google Hybrid": googleHybrid,
  "Google Satellite": googleSat,
  "Google Terrain": googleTerrain,
};

const initMapOptions: L.MapOptions = {
  zoom: 13,
  minZoom,
  maxZoom,
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  touchZoom: true,
  layers: [googleStreets],
  closePopupOnClick: false,
};

const myPopUpOptions: L.PopupOptions = {
  autoPan: false,
  closeButton: false,
  autoClose: false,
  maxWidth: 100,
};

const myZoomPanOptions: L.FitBoundsOptions = {
  easeLinearity: 0.6,
  duration: 0.25,
};

// Functions to get LatLngBounds for each selected area
const getSouthLat = function (
  arrBikePoints: BikePoint[],
  oldSouthLat: number
): number {
  let southLat: number | undefined = arrBikePoints[0]?.lat;
  if (southLat === undefined) return oldSouthLat;

  for (const bkPoint of arrBikePoints) {
    if (bkPoint.lat < southLat) {
      southLat = bkPoint.lat;
      continue;
    }
  }
  return southLat;
};

const getNorthLat = function (
  arrBikePoints: BikePoint[],
  oldNorthLat: number
): number {
  let northLat: number | undefined = arrBikePoints[0]?.lat;
  if (northLat === undefined) return oldNorthLat;

  for (const bkPoint of arrBikePoints) {
    if (bkPoint.lat > northLat) {
      northLat = bkPoint.lat;
      continue;
    }
  }
  return northLat;
};

const getWestLon = function (
  arrBikePoints: BikePoint[],
  oldWestLon: number
): number {
  let westLon: number | undefined = arrBikePoints[0]?.lon;
  if (westLon === undefined) return oldWestLon;

  for (const bkPoint of arrBikePoints) {
    if (bkPoint.lon < westLon) {
      westLon = bkPoint.lon;
      continue;
    }
  }
  return westLon;
};

const getEastLon = function (
  arrBikePoints: BikePoint[],
  oldEastLon: number
): number {
  let eastLon: number | undefined = arrBikePoints[0]?.lon;
  if (eastLon === undefined) return oldEastLon;

  for (const bkPoint of arrBikePoints) {
    if (bkPoint.lon > eastLon) {
      eastLon = bkPoint.lon;
      continue;
    }
  }
  return eastLon;
};
/* Leaflet Ends */

///////////////////////////////////////////////////////////////////

/* Chart JS Starts */
const handleResize = (chart: Chart) => {
  chart.resize();
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  onResize: handleResize,
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  onResize: handleResize,
};
/* Chart JS Ends */

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
): [
  {
    name: string;
    bikePoints: BikePoint[];
  },
  string[],
  number[],
  number[],
  number[]
] {
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
    const main: HTMLElement = document.createElement("main");

    // Page Title Heading
    main.insertAdjacentHTML("beforeend", fullPageTitle());

    // Label for dropdown list
    const label: HTMLLabelElement = document.createElement("label");
    label.setAttribute("for", "areas");
    label.textContent = "Choose an area:";
    main.insertAdjacentElement("beforeend", label);

    // Drop down list
    const dropDownList: HTMLSelectElement = document.createElement("select");
    dropDownList.id = "areas";
    const disabledOption: HTMLOptionElement = document.createElement("option");

    // Creating disabled option and starting it off with "Getting location" while map loads location
    disabledOption.textContent = "Getting location..." as string;
    disabledOption.setAttribute("selected", "");
    disabledOption.setAttribute("disabled", "");
    dropDownList.insertAdjacentElement("afterbegin", disabledOption);
    main.insertAdjacentElement("beforeend", dropDownList);

    // Div creation for map
    const mapDiv: HTMLDivElement = document.createElement("div");
    mapDiv.id = "map" as string;
    main.insertAdjacentElement("beforeend", mapDiv);

    // Bar Chart Container and Canvas
    const barChartContainer: HTMLDivElement = document.createElement("div");
    barChartContainer.id = "bar-chart-container" as string;
    barChartContainer.classList.add("hidden");

    const barChartCanvas: HTMLCanvasElement = document.createElement("canvas");
    barChartCanvas.id = "bar-chart" as string;

    barChartContainer.insertAdjacentElement("beforeend", barChartCanvas);
    main.insertAdjacentElement("beforeend", barChartContainer);

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
    pieChartContainerNbBikes.classList.add("pie-chart-area");
    pieChartContainerNbBikes.classList.add("hidden");

    pieChartContainerNbEmptyDocks.id =
      "pie-chart-container-nbemptydocks" as string;
    pieChartContainerNbEmptyDocks.classList.add("pie-chart-area");
    pieChartContainerNbEmptyDocks.classList.add("hidden");

    pieChartContainerNbDocks.id = "pie-chart-container-nbdocks" as string;
    pieChartContainerNbDocks.classList.add("pie-chart-area");
    pieChartContainerNbDocks.classList.add("hidden");

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
    pieChartContainerNbBikes.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbBikes
    );
    main.insertAdjacentElement("beforeend", pieChartContainerNbBikes);

    // Pie Chart Canvas NbEmptyDocks
    pieChartCanvasNbEmptyDocks.id = "pie-chart-nbemptydocks" as string;
    pieChartContainerNbEmptyDocks.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbEmptyDocks
    );
    main.insertAdjacentElement("beforeend", pieChartContainerNbEmptyDocks);

    // Pie Chart Canvas NbDocks
    pieChartCanvasNbDocks.id = "pie-chart-nbdocks" as string;
    pieChartContainerNbDocks.insertAdjacentElement(
      "beforeend",
      pieChartCanvasNbDocks
    );
    main.insertAdjacentElement("beforeend", pieChartContainerNbDocks);

    let myBarChart: Chart | unknown;
    let myPieChartNbBikes: Chart | unknown;
    let myPieChartNbEmptyDocks: Chart | unknown;
    let myPieChartNbDocks: Chart | unknown;

    // Initialise the array that will hold the map popups
    let toHoldPopUps: L.Popup[] = [];

    // Initialise values for latlng bounds to use as params in getSouthLat, getNorthLat, getWestLon and getEastLon
    let initSouthLat: number;
    let initNorthLat: number;
    let initWestLon: number;
    let initEastLon: number;

    // Initialise the map and center to current location
    let map: L.Map = L.map(mapDiv, initMapOptions);
    map.locate({setView: true});

    setTimeout(function () {
      map.invalidateSize();
    }, 0);

    // Event listener for when the user's location is found
    map.addEventListener("locationfound", function () {
      initSouthLat = map.getBounds().getSouth();
      initNorthLat = map.getBounds().getNorth();
      initWestLon = map.getBounds().getWest();
      initEastLon = map.getBounds().getEast();

      disabledOption.textContent = "Choose an area:" as string;
      sortedBikePointsArray.forEach((obj) => {
        dropDownList.insertAdjacentHTML(
          "beforeend",
          getSelectOptionDropDownList(obj)
        );
      });
    });

    // Event listener for when the users's location is not found
    map.addEventListener("locationerror", function () {
      map.panTo([51.5080964, -0.135468], myZoomPanOptions);
      disabledOption.textContent = "Could not get location" as string;
    });

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
        options: barChartOptions,
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
        options: pieChartOptions,
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
        options: pieChartOptions,
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
        options: pieChartOptions,
      });

      barChartContainer.classList.remove("hidden");
      pieChartContainerNbBikes.classList.remove("hidden");
      pieChartContainerNbEmptyDocks.classList.remove("hidden");
      pieChartContainerNbDocks.classList.remove("hidden");

      // barChartContainer.scrollIntoView({behavior: "smooth"});

      const selAreaBkPoints: BikePoint[] = selAreaObj.bikePoints;

      if (toHoldPopUps.length !== 0) {
        toHoldPopUps.forEach((bkPoint) => {
          bkPoint.remove();
        });
        toHoldPopUps = [];
      }

      toHoldPopUps = selAreaBkPoints.map((bkPoint) => {
        return L.popup(myPopUpOptions)
          .setLatLng([bkPoint.lat, bkPoint.lon])
          .setContent("Hello")
          .addTo(map);
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
