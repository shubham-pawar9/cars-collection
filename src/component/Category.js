import { useEffect, useState } from "react";

const Category = ({
  data,
  selectBrand,
  selectFilter,
  showData,
  setShowData,
}) => {
  useEffect(() => {
    if (data) {
      let filteredData = data.filter((item) => item.brand === selectBrand);
      if (selectFilter.car_type && selectFilter.car_type.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectFilter.car_type.includes(item.type)
        );
      }
      if (selectFilter.fuel_type && selectFilter.fuel_type.length > 0) {
        filteredData = filteredData.filter((item) =>
          item.fuel_type.some((fuelType) =>
            selectFilter.fuel_type.includes(fuelType)
          )
        );
      }
      setShowData(filteredData);
    }
  }, [data, selectBrand, selectFilter]);

  const handleItemClicked = () => {
    // Implement your handleItemClicked function logic here
  };

  return (
    <>
      <div className="category-div">
        {showData.map((item, index) => (
          <div className="item-div" key={index}>
            <img
              className="item-img"
              src={`${process.env.PUBLIC_URL}/images/${item.brand}/${item.id}.png`}
              alt="item-image"
              onClick={handleItemClicked}
            />
            <div className="item-info">
              <span className="item-name">{`${item.brand} ${item.name}`}</span>
            </div>
          </div>
        ))}
        {showData.length == 0 && (
          <div className="data-item-div">
            <div className="data-not-found">
              <span className="item-name">No Data Found</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
