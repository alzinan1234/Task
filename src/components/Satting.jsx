import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Satting = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active box

  return (
    <>
      <div className="maxWidth mx-auto p-4">
        <div className="mt-10 flex  gap-4 justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-full sm:w-[300px] lg:w-[428px] h-[46px] cursor-pointer rounded-md transition-colors duration-300 ${
                activeIndex === index
                  ? "bg-[#46AEF7] text-white"
                  : "bg-white border border-[#46AEF7] text-[#46AEF7]"
              }`}
              onClick={() => setActiveIndex(index)} // Set active index on click
            >
              <span>
                <FaSearch className="w-4 h-4 mr-2" />
              </span>
              <p>検索条件</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Satting;
