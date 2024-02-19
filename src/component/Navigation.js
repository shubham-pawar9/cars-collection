import { useEffect, useState } from "react";

const Navigation = ({ data, setSelectBrand, setShowData }) => {
  const [brandNames, setBrandNames] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueBrands = [...new Set(data.map((item) => item.brand))];
      setBrandNames(uniqueBrands);
    }
  }, [data]);
  const handleBrandSelect = (e) => {
    setSelectBrand(e.target.id);
    let filteredData = data.filter((item) => item.brand === e.target.id);
    setShowData(filteredData);
    if (document.querySelector(`.filter-fuel.active`))
      document.querySelector(`.filter-fuel.active`).classList.remove("active");
    if (document.querySelector(`.filter-car.active`))
      document.querySelector(`.filter-car.active`).classList.remove("active");
  };
  return (
    <>
      <div className="nav-bar">
        <ul>
          {brandNames &&
            brandNames.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-list"
                  id={item}
                  onClick={handleBrandSelect}
                >
                  {item.toUpperCase()}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Navigation;
