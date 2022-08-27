import axios from "axios";
import { Dispatch, useState } from "react";
import { reqUrl } from "../utils/reqUrl";
import { Action } from "../utils/StateAndAction";
import { Path, ShortestPath } from "../utils/typing";
import { PathResults } from "./PathResults";

interface ShortestPathProps {
  dispatch: Dispatch<Action>;
  isLoading: boolean;
  path: Path;
}

export function ShortestPathPage({
  dispatch,
  isLoading,
  path,
}: ShortestPathProps): JSX.Element {
  const [parameters, setParameters] = useState<{
    origin: string;
    destination: string;
  }>({ origin: path.origin, destination: path.destination });

  async function getShortestPath(
    origin: string,
    destination: string
  ): Promise<void> {
    dispatch({ type: "https-request", isLoading: true });
    const res = await axios.get(reqUrl + `path/${origin}/${destination}`);
    const pathResults: ShortestPath = res.data;
    dispatch({
      type: "update-path",
      origin: origin,
      destination: destination,
      shortestPath: pathResults,
      isLoading: false,
    });
  }

  return (
    <div>
      <input
        value={parameters.origin}
        onChange={(e) =>
          setParameters({ ...parameters, origin: e.target.value })
        }
        placeholder="Origin"
      />
      <input
        value={parameters.destination}
        onChange={(e) =>
          setParameters({ ...parameters, destination: e.target.value })
        }
        placeholder="Destination"
      />
      <button
        onClick={() => {
          dispatch({ type: "clear-path", shortestPath: null });
          getShortestPath(parameters.origin, parameters.destination);
        }}
      >
        Calculate
      </button>
      {isLoading && <h1>Calculating Route...</h1>}
      {path.shortestPath && <PathResults data={path.shortestPath} />}
    </div>
  );
}
