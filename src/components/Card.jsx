import image4 from "../assets/Rectangle 193.png";
import image1 from "../assets/Rectangle 119.png";
import image2 from "../assets/Rectangle 119 (1).png";
import image3 from "../assets/Rectangle 119 (2).png";
import { FaBell } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="maxWidth mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* First card */}
          <div className="flex flex-wrap justify-between mt-5">
            <div className="flex gap-4 sm:gap-9 ">
              <div className="flex gap-2 ">
                <img
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  "
                  src={image1}
                  alt="user profile"
                />
                <p className="text-xs sm:text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm">2023-07-13 12：52</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center mt-4 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover"
                  src={image4}
                  alt="product"
                />
              ))}
            </div>

            <div className="flex gap-6 sm:gap-11 items-center justify-center mt-4 sm:mt-0">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[140px] sm:w-[160px] rounded-md p-1">
                <p className="text-xs sm:text-sm text-center">
                  - フォローをやめる
                </p>
              </div>
              <div className="bg-[#46AEF7] text-white flex items-center w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] rounded-md justify-center">
                <FaBell className="w-4 h-4" />
                <span className="text-xs">ON</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t border-gray-600"></div>

          {/* Second card */}
          <div className="flex flex-wrap justify-between mt-5">
            <div className="flex gap-4 sm:gap-9 ">
              <div className="flex gap-2 ">
                <img
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] "
                  src={image1}
                  alt="user profile"
                />
                <p className="text-xs sm:text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm">2023-07-13 12：52</p>
              </div>
            </div>

            <div className="flex  gap-2 sm:gap-3 mt-4 sm:mt-0">
              <p className="text-xs sm:text-sm">
                ユーザーのオークションの商品はありません
              </p>
            </div>

            <div className="flex gap-6 sm:gap-11 items-center justify-center mt-4 sm:mt-0">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[140px] sm:w-[160px] rounded-md p-1">
                <p className="text-xs sm:text-sm text-center">
                  - フォローをやめる
                </p>
              </div>
              <div className="bg-[#46AEF7] text-white flex items-center w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] rounded-md justify-center">
                <FaBell className="w-4 h-4" />
                <span className="text-xs">ON</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t border-gray-500"></div>

          {/* Third card */}
          <div className="flex flex-wrap justify-between mt-5">
            <div className="flex gap-4 sm:gap-9 ">
              <div className="flex gap-2 ">
                <img
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] "
                  src={image1}
                  alt="user profile"
                />
                <p className="text-xs sm:text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm">2023-07-13 12：52</p>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 items-center  mt-4 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] "
                  src={image4}
                  alt="product"
                />
              ))}
            </div>

            <div className="flex gap-6 sm:gap-11 items-center justify-center mt-4 sm:mt-0">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[140px] sm:w-[160px] rounded-md p-1">
                <p className="text-xs sm:text-sm text-center">
                  - フォローをやめる
                </p>
              </div>
              <div className="bg-[#46AEF7] text-white flex items-center w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] rounded-md justify-center">
                <FaBell className="w-4 h-4" />
                <span className="text-xs">ON</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t border-gray-400"></div>
          <div className="mt-6 border-t border-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
