type Route = {
  node: string;
  connectedNodes: { node: string; distance: number }[];
};

export type State = {
  isLoading: boolean;
  railwayGraph: Route[];
};

export type Action =
  | { type: "https-request"; isLoading: State["isLoading"] }
  | { type: "update-railway-graph"; railwayGraph: State["railwayGraph"] };

export const defaultState: State = {
  isLoading: false,
  railwayGraph: [],
};
