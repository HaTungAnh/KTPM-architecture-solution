import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-10 py-16 xl:px-36 2xl:px-36 bg-neutral-darkViolet">
      <h1 className="text-3xl font-bold text-white">Shortly</h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-20 2xl:gap-28">
        <div className="flex gap-3">
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconFacebook} alt="facebook" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconTwitter} alt="twitter" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconPinterest} alt="pinterest" />
          </button>
          <button className="p-2 border-2 border-solid border-transparent hover:border-neutral-grayishViolet rounded-md transition-all">
            <img src={iconInstagram} alt="instagram" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
