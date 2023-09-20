/* eslint-disable react/prop-types */
import dark from "../assests/night-mode.png";
import light from "../assests/brightness.png";

export default function Toggle({ onClick }) {
  return (
    <label
      htmlFor="check"
      className={`h-9 w-9 relative left-0 md:mr-7 md:-mt-2 rounded-full`}
    >
      <input
        onClick={onClick}
        type="checkbox"
        id="check"
        className="sr-only peer"
      />
      <span className={` w-9 h-9 rounded-full absolute left-1 top-[4px] `}>
        <img
          className="absolute md:right-[5px] top-[5px] dark:hidden h-6 hover:rotate-[360deg] hover:duration-1000"
          src={dark}
          alt="dark"
        />
        <img
          className="absolute md:right-[6px] top-[6px] hidden dark:block h-6 hover:rotate-[360deg] hover:duration-1000"
          src={light}
          alt="dark"
        />
      </span>
    </label>
  );
}
