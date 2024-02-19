import { useEffect, useState } from "react";
import Category from "./Category";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";

const Main = () => {
  const [data, setData] = useState([]);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectFilter, setSelectFilter] = useState([]);
  const [showData, setShowData] = useState([]);
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
  // console.log(selectBrand);
  return (
    <>
      <Navigation
        data={data}
        setSelectBrand={setSelectBrand}
        setShowData={setShowData}
      />
      {selectBrand.length > 0 && (
        <SubNavigation data={data} setSelectFilter={setSelectFilter} />
      )}
      <Category
        data={data}
        selectBrand={selectBrand}
        selectFilter={selectFilter}
        showData={showData}
        setShowData={setShowData}
      />
    </>
  );
};
export default Main;
