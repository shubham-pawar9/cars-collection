import { useEffect, useState } from "react";

const Navigation = ({ data, setSelectBrand }) => {
  const [brandNames, setBrandNames] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueBrands = [...new Set(data.map((item) => item.brand))];
      setBrandNames(uniqueBrands);
    }
  }, [data]);
  const handleBrandSelect = (e) => {
    setSelectBrand(e.target.id);
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
