import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import Font Awesome for bars icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="maxWidth mx-auto flex justify-between items-center p-4 bg-[#20E1BA] md:bg-transparent">
        {/* Logo and Header Text */}
        <div className="flex items-center justify-between w-full md:w-auto md:flex-row flex-col md:gap-48">
          <h1 className="font-bold text-3xl md:text-4xl">LOGO</h1>

          <div className="md:block hidden">
            <h1 className="text-base md:text-lg">
              フィギュア・ホビー＆生物に特化したオークションサイト
            </h1>
            <p className="text-[#46AEF7] cursor-pointer">ログアウト</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex gap-2 items-center">
          <p className="text-[#46AEF7] cursor-pointer">ユーザー登録</p>
          <p>|</p>
          <p className="text-[#46AEF7] cursor-pointer">ログイン</p>
        </div>

        {/* Bars Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 p-4 bg-[#20E1BA]">
          <p className="text-[#46AEF7] cursor-pointer">ユーザー登録</p>
          <p className="text-[#46AEF7] cursor-pointer">ログイン</p>
          <p className="text-[#46AEF7] cursor-pointer">ログアウト</p>
        </div>
      )}
    </>
  );
};

export default Header;
