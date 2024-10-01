import footer from "../assets/Group 3344.png";

const Footer = () => {
  return (
    <div className="maxWidth mx-auto">
      <div className="flex justify-between items-center mt-5 mb-10">
        <div>
          <p>合計 0 1 件中 0 1 - 10 件を表示</p>
        </div>
        <div>
          📲
          <img className="w-10 h-5" src={footer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
