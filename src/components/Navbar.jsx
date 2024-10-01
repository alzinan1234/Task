import image1 from "../assets/人物の無料素材.png";
import image2 from "../assets/レトロなカメラのフリーイラスト1.png";
import image3 from "../assets/ブックマークのアイコン6 (1).png";
import image4 from "../assets/クリスマスベルの無料アイコン2.png";
import React, { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全てのカテゴリ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = ["全てのカテゴリ", "全てのカテゴリ", "Books"];

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here with the query and category
    console.log(`Searching for ${query} in ${category}`);
  };
  return (
    <>
      <div className="maxWidth mx-auto flex justify-between items-center mt-2">
        <div className="flex gap-8 items-center justify-center">
          <div>
            <div className="flex items-center justify-center border border-gray-400 rounded-md overflow-hidden w-[600px] h-[38px]">
              <form onSubmit={handleSearch} className="flex w-full h-full">
                {/* Search input */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="何かお探しですか？"
                  className="w-full p-2 outline-none text-gray-700"
                />

                {/* Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    className="bg-gray-200 p-2 flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {category}
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 right-0 bg-white shadow-lg border rounded-md mt-1 z-10">
                      {categories.map((cat, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Search button */}
                <button type="submit" className="bg-gray-800 text-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="flex items-center gap-4 ">
              <div>
                <p>保存した検索条件</p>
              </div>
              <div className="flex gap-2 text-[#46AEF7]">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  -mt-5">
            <p className="text-center">条件指定+</p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-5 border">
          <div className="border flex justify-center items-center flex-col ">
            <img
              className="w-[28px] h-[28px]"
              src={image1}
              alt="人物の無料素材"
            />
            <p>人物の無料素材</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-[28px] h-[28px]"
              src={image2}
              alt="人物の無料素材"
            />
            <p>人物の無料素材</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-[28px] h-[28px]"
              src={image3}
              alt="人物の無料素材"
            />
            <p>人物の無料素材</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-[28px] h-[28px]"
              src={image4}
              alt="人物の無料素材"
            />
            <p>人物の無料素材</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
