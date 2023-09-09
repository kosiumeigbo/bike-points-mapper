export interface BikePoint {
  $type: string;
  id: string;
  url: string;
  commonName: string;
  placeType: string;
  additionalProperties: AdditionalProperty[];
  children: any[];
  childrenUrls: any[];
  lat: number;
  lon: number;
}

interface AdditionalProperty {
  $type: string;
  category: string;
  key: string;
  sourceSystemKey: string;
  value: string;
  modified: string;
}
