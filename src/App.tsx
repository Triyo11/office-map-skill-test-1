import background from "./assets/bg.png";

function App() {
  const menu = ["Home", "Feature", "Service", "About Us", "Login"];

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <nav
        className="w-full flex justify-between min-[1023px]:justify-end items-center mt-[35px]"
        style={{ paddingRight: "clamp(1.125rem, -1.12rem + 9.577vw, 7.5rem)" }}
      >
        <ul className="flex justify-end gap-10">
          {menu.map((item) => (
            <li
              key={item}
              className="hidden min-[1023px]:block text-sm font-semibold text-[#1E293B] last:text-[#EF4444]"
            >
              {item}
            </li>
          ))}
        </ul>
        <button>
          <span className="bg-[#EF4444] text-[#FFFFFF] font-bold px-5 py-[10px] rounded-md ml-10">
            Sign Up
          </span>
        </button>
      </nav>

      <div
        className="flex justify-center md:justify-start pr-5"
        style={{
          paddingLeft: "clamp(1.25rem, -0.158rem + 6.009vw, 5.25rem)",
        }}
      >
        <div
          className="flex flex-col max-w-[665px]"
          style={{ marginTop: "clamp(3.125rem, 0.924rem + 9.39vw, 9.375rem)" }}
        >
          <div
            className="text-[#1E293B] font-bold text-center md:text-left"
            style={{
              fontSize: "clamp(2.625rem, 2.229rem + 1.69vw, 3.75rem)",
              lineHeight: "clamp(3.281rem, 2.896rem + 1.643vw, 4.375rem)",
            }}
          >
            Lessons and insights{" "}
          </div>
          <div
            className="text-[#EF4444] font-bold text-center md:text-left"
            style={{
              fontSize: "clamp(2.625rem, 2.229rem + 1.69vw, 3.75rem)",
              lineHeight: "clamp(3.281rem, 2.896rem + 1.643vw, 4.375rem)",
            }}
          >
            from 8 years
          </div>
          <div className="text-[#1E293B] pt-8 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            obcaecati perferendis illo quidem, officiis voluptatem quos debitis
            dolor. Itaque laudantium dolores iure quos cum delectus doloremque
            quisquam sunt molestiae ea.
          </div>
          <div className="flex justify-between items-center mt-8 bg-[#FFFFFF] rounded-md p-1 w-[100%] md:w-[65%]">
            <input
              type="text"
              placeholder="Find our courses"
              className="w-full border-none outline-none pl-4"
            />
            <button className="bg-[#EF4444] text-[#FFFFFF] font-bold px-7 py-3 md:py-4 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
