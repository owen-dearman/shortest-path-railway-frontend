import { useEffect, useState } from "react";
import axios from "axios";
import { reqUrl } from "../utils/reqUrl";
import { TiplocTag } from "./TiplocTag";

export function TiplocList(): JSX.Element {
  const [listOfTiplocs, setListOfTiplocs] = useState<string[]>([]);

  useEffect(() => {
    async function getListOfTiplocNames(): Promise<void> {
      //dispatch type - https request
      const response = await axios.get(reqUrl + "tiplocs/list");
      setListOfTiplocs(response.data);
    }
    getListOfTiplocNames();
  }, []);

  const arrOfJsxTiplocElements = listOfTiplocs.map((tiploc) => (
    <TiplocTag key={listOfTiplocs.indexOf(tiploc)} data={tiploc} />
  ));

  return <section>{arrOfJsxTiplocElements}</section>;
}
