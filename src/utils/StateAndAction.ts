import { Path, ShortestPath } from "./typing";

type Route = {
  node: string;
  connectedNodes: { node: string; distance: number }[];
};

export type State = {
  isLoading: boolean;
  railwayGraph: Route[];
  path: Path;
};

export type Action =
  | { type: "https-request"; isLoading: State["isLoading"] }
  | { type: "update-railway-graph"; railwayGraph: State["railwayGraph"] }
  | {
      type: "update-path";
      origin: string;
      destination: string;
      isLoading: boolean;
      shortestPath: ShortestPath;
    }
  | { type: "clear-path"; shortestPath: null };

export const defaultState: State = {
  isLoading: false,
  railwayGraph: [],
  path: { origin: "", destination: "", shortestPath: null },
};
