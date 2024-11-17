// /* eslint-disable jsx-a11y/role-supports-aria-props */
import { useState } from "react";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:gap-8 xl:gap-12 py-6 lg:py-8 px-5 lg:px-20 xl:px-36">
      <img src={logo} alt="Shortly" />

      <button
        aria-label="menu-btn"
        aria-controls="menu"
        aria-expanded={menuVisible}
        className="lg:hidden flex flex-col gap-[5.5px] w-9 h-8 p-1 focus:outline-2 focus:outline-offset-4 rounded-sm"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <span className="block w-full h-1 bg-neutral-gray rounded"></span>
        <span className="block w-full h-1 bg-neutral-gray rounded"></span>
        <span className="block w-full h-1 bg-neutral-gray rounded"></span>
      </button>

      <nav
        id="menu"
        className={`absolute lg:static top-20 right-5 left-5 sm:left-auto flex flex-col lg:flex-row lg:justify-between items-center sm:w-[360px] lg:w-full text-white lg:text-black font-medium py-6 px-5 lg:p-0 bg-primary-darkVoilet lg:bg-transparent rounded-xl lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-36 -translate-y-48"
      }
      `}
      >
      </nav>
    </header>
  );
};

export default Header;
