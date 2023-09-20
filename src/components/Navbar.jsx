import PropTypes from "prop-types";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  function toggleTheme() {
    let htmlClass = document.querySelector("html");
    if (htmlClass.classList != "dark") {
      htmlClass.className = "dark";
    } else {
      htmlClass.classList.remove("dark");
    }
  }
  return (
    <header className="text-[#B9B4C7] dark:text-[#DCD7C9] body-font">
      <div className=" mx-auto flex flex-wrap px-5 pt-5 flex-col md:flex-row items-center my-2 ">
        <NavLink to="/TextMod" className="flex -ml-3 font-medium items-center  text-[#352F44] dark:text-[#A27B5C] mb-4 md:mb-0 h-fit w-[100px] overflow-hidden">
          <div className="hover:-translate-x-24 hover:duration-500 hover:delay-100 hover:transition-all cursor-pointer">
            <span className="ml-3 text-xl">{props.title}</span>
            <span className="ml-3 text-xl font-bold text-[#B9B4C7] dark:text-[#DCD7C9]">
             {props.title}
            </span>
          </div>
        </NavLink>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <NavLink to="/TextMod" id="home" className=" mr-5 hover:text-[#352F44] active:hover:text-[#352F44] dark:hover:text-[#A27B5C]  cursor-pointer">
            {props.firstLink}
          </NavLink>
          <NavLink to="/about" id="about" className="mr-5 hover:text-[#352F44]  dark:hover:text-[#A27B5C] cursor-pointer">
            {props.secondLink}
          </NavLink>
        </nav>

        <Toggle onClick={toggleTheme} />

        <button className="inline-flex text-[#B9B4C7] dark:text-[#DCD7C9] items-center bg-[#352F44] dark:bg-[#A27B5C] border-0 py-1 px-3 focus:outline-none hover:bg-[#B9B4C7] hover:text-[#352F44] dark:hover:bg-[#DCD7C9] dark:hover:text-[#A27B5C] rounded text-base mt-4 md:mt-0">
          <NavLink to="/contact">{props.btn}</NavLink>
        </button>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "TextMod",
  firstLink: "Home",
  secondLink: "About",
  btn: "Contact Us",
};
