export default function Contact() {
  return (
    <section className="text-[#B9B4C7] dark:text-[#DCD7C9] body-font relative">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#352F44] dark:text-[#A27B5C]">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Any doubt? Feel free to contact.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-[#352F44] dark:text-[#A27B5C]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full placeholder-[#B9B4C7] dark:placeholder-[#A27B5C] bg-gray-100 dark:bg-[#DCD7C9] focus:border-[#352F44] dark:border-[#A27B5C] focus:bg-gray-50 dark:focus:bg-[#faeecd] focus:ring-[#B9B4C7] text-[#352F44] dark:text-[#A27B5C] dark:selection:text-[#DCD7C9] dark:selection:bg-[#5e5232] selection:text-purple-50 selection:bg-purple-500 bg-opacity-50 rounded border  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-[#352F44] dark:text-[#A27B5C]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full placeholder-[#B9B4C7] dark:placeholder-[#A27B5C] bg-gray-100 dark:bg-[#DCD7C9] focus:border-[#352F44] dark:border-[#A27B5C] focus:bg-gray-50 dark:focus:bg-[#faeecd] focus:ring-[#B9B4C7] text-[#352F44] dark:text-[#A27B5C] dark:selection:text-[#DCD7C9] dark:selection:bg-[#5e5232] selection:text-purple-50 selection:bg-purple-500 bg-opacity-50 rounded border  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="contact-message"
                  className="leading-7 text-sm text-[#352F44] dark:text-[#A27B5C]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                 
                  className=" w-full caret-[#352F44] dark:caret-[#A27B5C] placeholder-[#B9B4C7] dark:placeholder-[#A27B5C] bg-gray-100 dark:bg-[#DCD7C9] focus:border-[#352F44] dark:border-[#A27B5C] focus:bg-gray-50 dark:focus:bg-[#faeecd] focus:ring-[#B9B4C7] text-[#352F44] dark:text-[#A27B5C] dark:selection:text-[#DCD7C9] dark:selection:bg-[#5e5232] selection:text-purple-50 selection:bg-purple-500 bg-opacity-50 rounded border focus:ring-2 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-[#B9B4C7] dark:text-[#DCD7C9] items-center bg-[#352F44] dark:bg-[#A27B5C] hover:bg-[#B9B4C7] hover:text-[#352F44] dark:hover:bg-[#DCD7C9] dark:hover:text-[#A27B5C] border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t  border-gray-400 dark:border-[#DCD7C9] text-center">
              <a className="text-purple-500 dark:text-yellow-500 cursor-pointer">
                shankenduk@email.com
              </a>
              <p className="leading-normal my-5">
                Mumbai, Maharashtra
                <br />
                Thane, 401105
              </p>
              <span className="flex items-center justify-center">
                <a
                  href="https://www.facebook.com/shankendu?mibextid=eBUYbo"
                  className="ml-4 text-[#B9B4C7] hover:text-purple-500 dark:text-yellow-50 dark:hover:text-yellow-500"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/ShankenduK?t=WelnJ6XUcfM0HlK6NsLpiw&s=09"
                  className="ml-4 text-[#B9B4C7] hover:text-purple-500 dark:text-yellow-50 dark:hover:text-yellow-500"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/shankendu.__?igshid=OGQ5ZDc2ODk2ZA=="
                  className="ml-4 text-[#B9B4C7] hover:text-purple-500 dark:text-yellow-50 dark:hover:text-yellow-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
