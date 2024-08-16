import React, { useState } from "react";
import { products } from "../data/Data";
import Heading from "../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = () => {
  const [menuItem, setMenuItem] = useState(products);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(products);
      return;
    }
    const newItems = products.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Categories"
        description="Explore our wide range of clothing categories tailored to suit everyone's style and needs."
      />
      <div className="flex justify-center mb-8">
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("Men")}
        >
          Men
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("Women")}
        >
          Women
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("Kids")}
        >
          Kids
        </button>
      </div>
      <div className="m-10 overflow-hidden text-center relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItem.map((item, index) => (
          <div key={index} className="relative group">
            <div className="m-4 relative">
              <img
                src={item.img}
                title={item.name}
                alt={item.name}
                className="mx-auto h-full w-full hover:shadow-md transition-all duration-300 bg-cover rounded-lg"
              />
              <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap flex-col p-2 mr-1 mt-1">
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white rounded"
                    title="Add to cart"
                    icon="shopping-cart"
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white rounded"
                    title="Add to wishlist"
                    icon="heart"
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white rounded"
                    title="Compare"
                    icon="balance-scale"
                  />
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white rounded"
                    title="View details"
                    icon="eye"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-semibold uppercase">{item.name}</div>
                <div className="font-semibold text-gray-600">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
