export interface Plan {
  plans: PlansExtend[];
}

export interface PlansExtend {
  id: number;
  totalDistance: number;
  numberOfTracks: number;
  headings: number;
  swathWidth: number;
  grower: string;
  farm: string;
  operation: string;
  image: string
}
