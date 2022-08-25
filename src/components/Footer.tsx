export function Footer(): JSX.Element {
  return (
    <footer>
      <h2>Created by @OwenDearman.</h2>
      <h3>
        This app sends requests to a node server at
        https://shortest-rail-route-server.herokuapp.com/
      </h3>
      <h3>
        A bespoke path-finding algorithm based upon Dijkstra's algorithm is used
        in the backend server. Details on this functionality can be found at
        https://github.com/owen-dearman/find-shortest-path
      </h3>
    </footer>
  );
}
