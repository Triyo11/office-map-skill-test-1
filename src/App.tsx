import background from "./assets/bg.png";
import humberger from "./assets/humberger-bold.svg";
import cross from "./assets/cross-bold.svg";

import { useState } from "react";

function App() {
  const menu = ["Home", "Feature", "Service", "About Us", "Login"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full h-screen bg-white min-[1023px]:bg-transparent bg-opacity-60 transition-all duration-150">
        <div
          className={`${
            isDropdownOpen &&
            "bg-black bg-opacity-50 w-full h-screen absolute top-0 left-0"
          }`}
        >
          <div
            className={`absolute z-20 mr-10 top-0 left-0 w-60 ${
              isDropdownOpen
                ? "translate-x-0 transition-all duration-150"
                : "-translate-x-60 transition-all duration-150"
            }`}
          >
            <div className="bg-white h-screen flex flex-col justify-start items-start pt-9 pl-9 gap-10">
              <button className="" onClick={() => setIsDropdownOpen(false)}>
                <img src={cross} alt="cross" />
              </button>
              <ul className="flex flex-col items-start gap-10">
                {menu.map((item) => (
                  <li
                    key={item}
                    className="text-black last:text-red font-bold text-center text-sm"
                  >
                    <a href="">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="block min-[1023px]:hidden pl-5 mt-[39px]"
          >
            <img src={humberger} alt="icon dropdown" />
          </button>
          <nav
            className="w-full flex justify-between min-[1023px]:justify-end items-center mt-[35px]"
            style={{
              paddingRight: "clamp(1.125rem, -1.12rem + 9.577vw, 7.5rem)",
            }}
          >
            <ul className="flex justify-end gap-10">
              {menu.map((item) => (
                <li
                  key={item}
                  className="hidden min-[1023px]:block text-sm font-semibold text-black last:text-red"
                >
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <button className="bg-[#EF4444] text-white text-sm font-bold px-5 py-[10px] rounded-md ml-10">
              Sign Up
            </button>
          </nav>
        </div>
        <div
          className="flex justify-center md:justify-start pr-5"
          style={{
            paddingLeft: "clamp(1.25rem, -0.158rem + 6.009vw, 5.25rem)",
          }}
        >
          <div
            className="flex flex-col max-w-[665px]"
            style={{
              marginTop: "clamp(3.125rem, 0.924rem + 9.39vw, 9.375rem)",
            }}
          >
            <div
              className="text-black font-bold text-center md:text-left"
              style={{
                fontSize: "clamp(2.625rem, 2.229rem + 1.69vw, 3.75rem)",
                lineHeight: "clamp(3.281rem, 2.896rem + 1.643vw, 4.375rem)",
              }}
            >
              Lessons and insights{" "}
            </div>
            <div
              className="text-red font-bold text-center md:text-left"
              style={{
                fontSize: "clamp(2.625rem, 2.229rem + 1.69vw, 3.75rem)",
                lineHeight: "clamp(3.281rem, 2.896rem + 1.643vw, 4.375rem)",
              }}
            >
              from 8 years
            </div>
            <div
              className="text-black pt-8 text-center md:text-left md:w-[85%]"
              style={{
                fontSize: "clamp(0.75rem, 0.574rem + 0.751vw, 1.25rem)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur obcaecati perferendis illo quidem, officiis voluptatem
              quos debitis dolor. Itaque laudantium dolores iure quos cum
              delectus doloremque.
            </div>
            <div className="flex justify-between items-center mt-8 bg-white rounded-md p-1 w-full md:w-[65%]">
              <input
                type="text"
                placeholder="Find our courses"
                className="w-full border-none outline-none pl-4 text-sm"
              />
              <button
                className="bg-red text-white font-bold px-7 py-3 md:py-4 rounded-md"
                style={{
                  fontSize: "clamp(0.875rem, 0.831rem + 0.188vw, 1rem)",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
