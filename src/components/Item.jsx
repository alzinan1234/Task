import { useState } from "react";

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active item
  const items = [
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
    { text: "ウォッチリスト" },
  ];

  return (
    <>
      <div className="maxWidth mx-auto flex flex-wrap items-center justify-center gap-4 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md text-center cursor-pointer transition-colors duration-300 ${
              activeIndex === index ? "bg-[#46AEF7] text-white" : "bg-gray-300"
            } hover:bg-[#46AEF7] hover:text-white w-full sm:w-auto sm:min-w-[150px]`}
            onClick={() => setActiveIndex(index)} // Set active index on click
          >
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Item;
