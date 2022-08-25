import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
