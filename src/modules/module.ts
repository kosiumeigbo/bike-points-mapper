import {BikePoint} from "./types";
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
}; */

export const getDataForAllBikePoints = async function (url: string) {
  try {
    const response = await fetch(url);
    const allBikePoints = (await response.json()) as BikePoint[];

    const bikePointsByArea = new Map<string, BikePoint[]>();

    console.log("bikePointsByArea", bikePointsByArea);

    for (const bikePoint of allBikePoints) {
      const area = bikePoint.commonName.split(",").at(-1)?.trim();
      if (area) {
        if (!bikePointsByArea.has(area)) {
          bikePointsByArea.set(area, []);
        }
        bikePointsByArea.get(area)?.push(bikePoint);
      }
    }

    console.log("bikePointsByArea", bikePointsByArea);
    console.log("bikePoints area entries", bikePointsByArea.entries());
    console.log(Array.from(bikePointsByArea.entries()));

    const result = Array.from(bikePointsByArea.entries()).map(
      ([name, bikePoints]) => {
        return {name, bikePoints};
      }
    );

    return result;
  } catch (e) {
    console.log(e);
  }
};
