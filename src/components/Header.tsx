import { dateToday } from "../utils/dateToday";

export function Header(): JSX.Element {
  return (
    <header>
      <h1>Shortest Path Generator</h1>
      <h1>{dateToday()}</h1>
    </header>
  );
}
