import { Dispatch, useEffect, useState } from "react";
import axios from "axios";
import { reqUrl } from "../utils/reqUrl";
import { TiplocTag } from "./TiplocTag";
import { Action } from "../utils/StateAndAction";

interface TiplocListProps {
  isLoading: boolean;
  dispatch: Dispatch<Action>;
}

export function TiplocList({
  isLoading,
  dispatch,
}: TiplocListProps): JSX.Element {
  const [listOfTiplocs, setListOfTiplocs] = useState<string[]>([]);

  useEffect(() => {
    async function getListOfTiplocNames(): Promise<void> {
      dispatch({ type: "https-request", isLoading: true });
      const response = await axios.get(reqUrl + "tiplocs/list");
      setListOfTiplocs(response.data);
      dispatch({ type: "https-request", isLoading: false });
    }
    getListOfTiplocNames();
  }, [dispatch]);

  const arrOfJsxTiplocElements = listOfTiplocs.map((tiploc) => (
    <TiplocTag key={listOfTiplocs.indexOf(tiploc)} data={tiploc} />
  ));

  return (
    <>
      {isLoading ? (
        <h1>Loading Data...</h1>
      ) : (
        <section>
          <p>Number Of TIPLOCS: {listOfTiplocs.length}</p>
          <div>{arrOfJsxTiplocElements}</div>
        </section>
      )}
    </>
  );
}
