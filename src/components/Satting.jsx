import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Satting = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active box

  return (
    <>
      <div className="maxWidth mx-auto">
        <div className="mt-10 flex gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-[428px] h-[46px] cursor-pointer ${
                activeIndex === index
                  ? "bg-[#46AEF7] text-white"
                  : "b text-[#46AEF7]"
              }`}
              onClick={() => setActiveIndex(index)} // Set active index on click
            >
              <span>
                <FaSearch className="w-4 h-4" />
              </span>{" "}
              <p>検索条件</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Satting;
