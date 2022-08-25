import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TiplocList } from "./TiplocList";
import { Homepage } from "./Homepage";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tiplocs" element={<TiplocList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
