const Header = () => {
  return (
    <>
      <div className="maxWidth mx-auto flex justify-between items-center">
        <div className="flex gap-48">
          <h1 className="font-bold text-4xl">LOGO</h1>

          <div>
            <h1>フィギュア・ホビー＆生物に特化したオークションサイト</h1>
            <p className="text-[#46AEF7]">ログアウト</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-[#46AEF7]">ユーザー登録</p>
          <p>|</p>
          <p className="text-[#46AEF7]">ログイン</p>
        </div>
      </div>
    </>
  );
};

export default Header;
