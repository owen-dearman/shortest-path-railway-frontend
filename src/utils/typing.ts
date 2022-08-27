export type Path = {
  origin: string;
  destination: string;
  shortestPath: ShortestPath | null;
};

export type ShortestPath = {
  distance: number;
  nodes: string[];
  numTracks: number;
};
