import { useEffect, useState } from "react";

const SubNavigation = ({ data, setSelectFilter }) => {
  const [itemType, setItemType] = useState({
    car_type: [],
    fuel_type: [],
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqCarTypes = [...new Set(data.map((item) => item.type))];
      setItemType((prevItemType) => ({
        ...prevItemType,
        car_type: uniqCarTypes,
        fuel_type: ["petrol", "diesel", "ev", "cng"],
      }));
    }
  }, [data]);
  const handleSelectCarFilter = (e) => {
    setSelectFilter((prev) => ({
      ...prev,
      car_type: e.target.id,
    }));
    if (document.querySelector(`.filter-car.active`))
      document.querySelector(`.filter-car.active`).classList.remove("active");
    if (document.querySelector(`#${e.target.id}`))
      document.querySelector(`#${e.target.id}`).classList.add("active");
  };
  const handleSelectFuelFilter = (e) => {
    setSelectFilter((prev) => ({
      ...prev,
      fuel_type: e.target.id,
    }));
    if (document.querySelector(`.filter-fuel.active`))
      document.querySelector(`.filter-fuel.active`).classList.remove("active");
    if (document.querySelector(`#${e.target.id}`))
      document.querySelector(`#${e.target.id}`).classList.add("active");
  };
  return (
    <>
      <div className="sub-navigation">
        <div className="dropdown btn1">
          <button className="dropbtn">Car Type</button>
          <div className="dropdown-content">
            {itemType.car_type.map((item, index) => (
              <a
                key={index}
                className="filter-car"
                id={item}
                onClick={handleSelectCarFilter}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="dropdown btn1">
          <button className="dropbtn">Fuel Type</button>
          <div className="dropdown-content">
            {itemType.fuel_type.map((item, index) => (
              <a
                key={index}
                className="filter-fuel"
                id={item}
                onClick={handleSelectFuelFilter}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavigation;
