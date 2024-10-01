const OtherSection = () => {
  return (
    <>
      <div className="maxWidth mx-auto p-4">
        <div className="mt-10">
          <div>
            <p className="border-l-4 pl-2 border-[#46aef7] text-lg">
              フォローリスト
            </p>
          </div>

          {/* Responsive buttons with totals */}
          <div className="flex  gap-4 mt-6 items-center  text-center">
            <div>
              <p className="b bg-[#46aef7] w-full sm:w-[158px] h-[32px] text-[#fff] flex items-center justify-center rounded-md">
                アーティスト
              </p>
              <p className="text-xs mt-2">
                TOTAL <span className="text-[#46aef7]">100</span>
              </p>
            </div>
            <div>
              <p className="b w-full sm:w-[158px] h-[32px] text-[#46aef7] border border-[#46aef7] flex items-center justify-center rounded-md">
                アーティスト
              </p>
              <p className="text-xs mt-2">
                TOTAL <span className="text-[#46aef7]">100</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-500"></div>

        {/* Responsive usernames */}
        <div className="flex flex-wrap gap-4 text-center items-center mx-28 mt-5">
          <p className="w-full sm:w-auto">ユーザーネーム</p>
          <p className="w-full sm:w-auto">ユーザーネーム</p>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-500"></div>
      </div>
    </>
  );
};

export default OtherSection;
