import { ShortestPath } from "../utils/typing";
import { TiplocTag } from "./TiplocTag";

interface PathResultsProps {
  data: ShortestPath;
}

export function PathResults({ data }: PathResultsProps): JSX.Element {
  const nodeList = data.nodes.map((tiploc) => (
    <TiplocTag key={data.nodes.indexOf(tiploc)} data={tiploc} />
  ));
  return (
    <section>
      <h3>Distance: {data.distance}</h3>
      <h3>Number Of Paths: {data.numTracks}</h3>
      <h3>Number Of TIPLOCS: {data.nodes.length}</h3>
      <div>{nodeList}</div>
    </section>
  );
}
