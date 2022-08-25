import { Action, State } from "./StateAndAction";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "https-request":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "update-railway-graph":
      return {
        ...state,
        railwayGraph: action.railwayGraph,
      };
  }
}
