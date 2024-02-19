import { useEffect, useState } from "react";
import Category from "./Category";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";

const Main = () => {
  const [data, setData] = useState([]);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectFilter, setSelectFilter] = useState([]);
  const fetchjson = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const jsonData = await fetch("data.json");
        const data = jsonData.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchjson().then((res) => setData(res));
  }, []);
  // console.log(selectFilter);
  return (
    <>
      <Navigation data={data} setSelectBrand={setSelectBrand} />
      {selectBrand.length > 0 && (
        <SubNavigation data={data} setSelectFilter={setSelectFilter} />
      )}
      <Category
        data={data}
        selectBrand={selectBrand}
        selectFilter={selectFilter}
      />
    </>
  );
};
export default Main;
