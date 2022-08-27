import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TiplocList } from "./TiplocList";
import { Homepage } from "./Homepage";
import { useReducer } from "react";
import { defaultState } from "../utils/StateAndAction";
import { reducer } from "../utils/reducer";
import { ShortestPathPage } from "./ShortestPathPage";

function App(): JSX.Element {
  const [{ isLoading, path }, dispatch] = useReducer(reducer, defaultState);
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
          <Route
            path="/path"
            element={
              <ShortestPathPage
                dispatch={dispatch}
                isLoading={isLoading}
                path={path}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
