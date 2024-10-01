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
      <div className="maxWidth mx-auto flex items-center gap-16 p-4 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg shadow-md text-center mt-10 cursor-pointer ${
              activeIndex === index ? "bg-[#46AEF7] text-white" : "bg-gray-300"
            }`}
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
