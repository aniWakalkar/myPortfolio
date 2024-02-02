import React, { useRef } from "react";

function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  const handleClickScroll = (container) => {
    // const element = document.getElementById(container);
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   // element.scrollIntoView({ behavior: "smooth" });
    // }
    // console.log(container);
    // }
    console.log(container.current.offsetTop - 32);
    window.scrollTo({
      top: container.current.offsetTop - 32,
      behavior: "smooth",
    });
  };

  return (
    <div className="mainContainer flex items-center justify-between p-0">
      <div
        style={{ height: "100vh" }}
        className="subContainer text-black font-mono font-bold items-center border-white bg-white p-5 w-full"
      >
        App
        <button
          className="btn-scroll bg-green-500 border-2 border-grey ml-3"
          onClick={() => {
            handleClickScroll(section1);
          }}
        >
          Scroll 1
        </button>
        <button
          className="btn-scroll bg-green-500 border-2 border-grey ml-3"
          onClick={() => {
            handleClickScroll(section2);
          }}
        >
          Scroll 2
        </button>
        <button
          className="btn-scroll bg-green-500 border-2 border-grey ml-3"
          onClick={() => {
            handleClickScroll(section3);
          }}
        >
          Scroll 3
        </button>
      </div>
      <div
        style={{ height: "100vh" }}
        className="subContainer text-white font-mono font-bold items-center border-red-500 bg-red-500 p-5 w-full"
      >
        <div
          ref={section1}
          id="section-1"
          className="h-80 bg-green-500 border-2 border-grey mt-3"
        >
          Section 1
        </div>
        <div
          ref={section2}
          id="section-2"
          className="h-80 bg-green-500 border-2 border-grey mt-3"
        >
          Section 2
        </div>
        <div
          ref={section3}
          id="section-3"
          className="h-80 bg-green-500 border-2 border-grey mt-3"
        >
          Section 3
        </div>
        <div
          id="section-3"
          className="h-80 bg-green-500 border-2 border-grey mt-3"
        >
          Section 3
        </div>
        <div
          id="section-3"
          className="h-80 bg-green-500 border-2 border-grey mt-3"
        >
          Section 3
        </div>
      </div>
    </div>
  );
}

export default Home;
