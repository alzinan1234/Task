import image4 from "../assets/Rectangle 193.png";
import image1 from "../assets/Rectangle 119.png";
import image2 from "../assets/Rectangle 119 (1).png";
import image3 from "../assets/Rectangle 119 (2).png";
import { FaBell } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="maxWidth mx-auto ">
        <div className="flex flex-col ">
          <div className="flex justify-between mt-5">
            <div className="flex gap-9">
              <div className="flex gap-2">
                <img className="w-[80px] h-[80px]" src={image1} alt="" />
                <p className="text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p>2023-07-13 12：52</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-11">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[160px] rounded-md p-1">
                <p className="text-center">- フォローをやめる</p>
              </div>
              <div className="bg-[#46AEF7] text-white flex flex-col item-center w-[46px] h-[46px] rounded justify-center">
                <p className="flex flex-col justify-center items-center">
                  <FaBell w-4 h-4 /> <span>ON</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-top"></div>
          <div className="flex justify-between mt-5">
            <div className="flex gap-9">
              <div className="flex gap-2">
                <img className="w-[80px] h-[80px]" src={image1} alt="" />
                <p className="text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p>2023-07-13 12：52</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <p>ユーザーのオークションの商品はありません</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-11">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[160px] rounded-md p-1">
                <p className="text-center">- フォローをやめる</p>
              </div>
              <div className="bg-[#46AEF7] text-white flex flex-col item-center w-[46px] h-[46px] rounded justify-center">
                <p className="flex flex-col justify-center items-center">
                  <FaBell w-4 h-4 /> <span>ON</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-top"></div>
          <div className="flex justify-between mt-5">
            <div className="flex gap-9">
              <div className="flex gap-2">
                <img className="w-[80px] h-[80px]" src={image1} alt="" />
                <p className="text-sm">
                  USERNAME <br />
                  評価：10
                </p>
              </div>
              <div>
                <p>2023-07-13 12：52</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
                <img className="w-[80px] h-[80px]" src={image4} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-11">
              <div className="bg-[#F7466F] flex items-center h-[40px] w-[160px] rounded-md p-1">
                <p className="text-center">- フォローをやめる</p>
              </div>
              <div className="bg-[#46AEF7] text-white flex flex-col item-center w-[46px] h-[46px] rounded justify-center">
                <p className="flex flex-col justify-center items-center">
                  <FaBell w-4 h-4 /> <span>ON</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-top"></div>
          <div className="mt-6 border-top"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
