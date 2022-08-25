import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TiplocList } from "./TiplocList";
import { Homepage } from "./Homepage";
import { useReducer } from "react";
import { defaultState } from "../utils/StateAndAction";
import { reducer } from "../utils/reducer";

function App(): JSX.Element {
  const [{ isLoading }, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/tiplocs"
            element={<TiplocList dispatch={dispatch} isLoading={isLoading} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
