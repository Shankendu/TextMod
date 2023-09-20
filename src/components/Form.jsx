import { useState } from "react";
import deletepng from "../assests/delete.png";
import copypng from "../assests/copy.png";
import copyDark from "../assests/copy-dark.png";
import deleteDark from "../assests/delete-dark.png";
import Alert from "./Alert";

export default function Form() {
  const [text, setText] = useState("");
  const [isalert, setAlert] = useState();
  let popUp = document.getElementById("pop-up");

  function showMessage(msg) {
    setAlert(msg);
  }
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showMessage("Success: Converted to Uppercase.");
    popUp.classList.remove("opacity-0");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showMessage("Success: Converted to Lowercase.");
    popUp.classList.remove("opacity-0");
  };

  const handleClear = () => {
    let c = "";
    setText(c);
    showMessage("Success: Text Deleted!!");
    popUp.classList.remove("opacity-0");
  };

  const handleCopy = () => {
    let message = document.getElementById("message");
    message.select();
    navigator.clipboard.writeText(message.value);
    document.getSelection().removeAllRanges();
    showMessage("Success: Text Copied!!");
    popUp.classList.remove("opacity-0");
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const close = () => {
    popUp.classList.add("opacity-0");
  };
  return (
    <div>
      <div className="p-5 w-full flex flex-col">
        <div id="pop-up" className="h-16 opacity-0">
          <Alert message={isalert} onClick={close} />
        </div>

        <label
          htmlFor="message"
          className="sm:text-3xl text-2xl md:text-left text-center font-medium title-font mb-4 text-[#352F44] dark:text-[#A27B5C]"
        >
          Message
        </label>
        <textarea
          id="message"
          className="w-full placeholder-[#B9B4C7] dark:placeholder-[#A27B5C] bg-gray-100 dark:bg-[#DCD7C9] bg-opacity-50 rounded border border-gray-300 focus:border-[#352F44] dark:border-[#A27B5C] focus:bg-gray-50 dark:focus:bg-[#faeecd] focus:ring-2 focus:ring-[#B9B4C7] dark:focus:ring-[#DCD7C9] h-52 text-base outline-none text-[#352F44] dark:text-[#A27B5C] dark:selection:text-[#DCD7C9] dark:selection:bg-[#5e5232] selection:text-purple-50 selection:bg-purple-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out break-all"
          value={text}
          onChange={changeText}
          placeholder="Enter your text here."
        ></textarea>
      </div>
      <div className="md:flex w-screen md:flex-row flex-col">
        <div className="py-2 px-5 w-full flex space-x-2 mb-7 md:justify-start justify-center">
          <button
            disabled={text.length == 0}
            onClick={handleUpperCase}
            className="flex text-[#B9B4C7] dark:text-[#DCD7C9] bg-[#352F44] dark:bg-[#A27B5C] border-0 py-2 px-8 focus:outline-none hover:bg-[#5C5470] dark:hover:bg-[#d9a77e] rounded text-lg hover:transform hover:scale-110 hover:ease-in-out hover:delay-100"
          >
            UpperCase
          </button>
          <button
            disabled={text.length == 0}
            onClick={handleLowerCase}
            className="flex text-[#B9B4C7] dark:text-[#DCD7C9] bg-[#352F44] dark:bg-[#A27B5C] border-0 py-2 px-8 focus:outline-none hover:bg-[#5C5470] dark:hover:bg-[#d9a77e] rounded text-lg hover:transform hover:scale-110 hover:ease-in-out hover:delay-100"
          >
            LowerCase
          </button>
        </div>
        <div className="py-2 px-5 w-full flex mb-7 space-x-5 md:justify-end justify-center">
          <button
            disabled={text.length == 0}
            onClick={handleClear}
            id="clear"
            className="flex py-2"
          >
            <img
              className="h-6 hover:transform hover:scale-125 hover:ease-in-out hover:delay-100 dark:hidden"
              src={deletepng}
              alt="delete"
            />
            <img
              className="h-6 hover:transform hover:scale-125 hover:ease-in-out hover:delay-100 hidden dark:block"
              src={deleteDark}
              alt="delete"
            />
          </button>
          <button
            disabled={text.length == 0}
            onClick={handleCopy}
            className="flex py-2"
          >
            <img
              className="h-6 hover:transform hover:scale-125 hover:ease-in-out hover:delay-100 dark:hidden"
              src={copypng}
              alt="copy"
            />
            <img
              className="h-6 hover:transform hover:scale-125 hover:ease-in-out hover:delay-100 hidden dark:block "
              src={copyDark}
              alt="copy"
            />
          </button>
        </div>
      </div>

      <div className="border-b w-[50%] rounded bg-gray-400 dark:bg-[#DCD7C9] mx-auto"></div>

      <div className="flex flex-col w-full h-full mb-12 px-5 mt-7 justify-center items-center">
        <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-[#352F44] dark:text-[#A27B5C]">
          Your Paragraph Summary
        </h1>
        <p className=" dark:selection:text-[#DCD7C9] dark:selection:bg-[#5e5232] selection:text-purple-50 selection:bg-purple-500 md:w-2/3 w-full h-full leading-relaxed text-base break-all bg-[#ebe2ff] text-[#352F44] dark:text-[#A27B5C] dark:bg-[#fff4d5] py-3 px-3 rounded-md">
          {text}
        </p>
        <div className="mt-2 space-x-2 mb-7">
          <span className=" w-fit inline-block py-1 px-2 rounded bg-purple-50 dark:bg-yellow-50 text-purple-500 dark:text-yellow-500 text-xs font-medium tracking-widest">
            {
              text.split(/\s/).filter((elem) => {
                return elem.length !== 0;
              }).length
            }{" "}
            words
          </span>
          <span className=" w-fit inline-block py-1 px-2 rounded bg-purple-50 dark:bg-yellow-50 text-purple-500 dark:text-yellow-500 text-xs font-medium tracking-widest">
            {text.length} characters
          </span>
        </div>
      </div>
     
    </div>
  );
}
