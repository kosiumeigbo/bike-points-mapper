export const ArrayOfBikePoints = async function (url: string) {
  const response = await fetch(url);
  const allBikePoints = await response.json();

  const bikePointArea = allBikePoints.map((bikepoint) =>
    bikepoint.commonName.split(", ").at(-1)
  );

  return new Set(bikePointArea);
};
