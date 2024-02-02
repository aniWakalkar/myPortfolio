import React from "react";
import Navbar from "./components/Navbar";

const Pages = [
  { id: "section1", title: "Introduction", content: "Introduction" },
  // { id: "section2", title: "About", content: "About" },
  // { id: "section3", title: "Portfolio", content: "Portfolio" },
  // { id: "section4", title: "Skills", content: "Skills" },
  // { id: "section5", title: "MyResume", content: "MyResume" },
  // { id: "section6", title: "Contact", content: "Contact" },
];
function App() {
  return (
    <>
      <div className="w-full bg-grey-100 bg-[url('./components/templates/banner-bg.png')] p-5 flex flex-wrap justify-center">
        <Navbar />
        <div id="section1" className="w-4/5 h-full px-5 pt-32 text-white ">
          <div className="w-4/5 h-full p-5 text-white ">
            <span className="px-2 py-2 border border-white text-xl bg-[#6f2c85]">
              <b>Welcome to my Portfolio</b>
            </span>
            <h2 className="text-6xl mt-10 mb-5">
              <b>
                Hi! I'm Aniket Web <br />
                Designer
              </b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              harum excepturi quis assumenda dolore minima, dolorem accusamus
              hic, eveniet molestiae ea architecto repudiandae sequi repellat
              totam eligendi dolorum accusantium voluptatem blanditiis
              necessitatibus ducimus? Necessitatibus quis quo voluptate non?
              Possimus fugit ducimus, labore eligendi omnis animi!
            </p>
            <span className="my-3 text-xl flex">
              <b>Let's connect {`--> `}</b>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg> */}
            </span>
          </div>
        </div>
        <div
          id="section2"
          className="w-5/5 h-full py-20 px-20 my-10 text-white bg-[#070505fb] text-center font-bold"
        >
          <span className="px-2 py-2 border border-white text-xl bg-[#6f2c85]">
            <b>Welcome to my Portfolio</b>
          </span>
          <h2 className="text-6xl mt-10 mb-5">
            <b>
              Hi! I'm Aniket Web <br />
              Designer
            </b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            harum excepturi quis assumenda dolore minima, dolorem accusamus hic,
            eveniet molestiae ea architecto repudiandae sequi repellat totam
            eligendi dolorum accusantium voluptatem blanditiis necessitatibus
            ducimus? Necessitatibus quis quo voluptate non? Possimus fugit
            ducimus, labore eligendi omnis animi!
          </p>
        </div>

        <div
          id="section3"
          className="w-4/5 h-full py-10 px-20 my-10 text-white bg-[#2f2c2c85] text-center rounded-2xl font-bold"
        >
          <span className="text-4xl">Skills</span>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            temporibus fugit nulla ipsam, saepe amet ea nostrum consequuntur
            natus excepturi laborum. Architecto ab minima, tempore repudiandae
            asperiores itaque. Officia sed in sint earum repudiandae.
          </p>
          <div className="flex items-center justify-evenly p-6 text-base font-mono">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
            </ul>
            <ul>
              <li>PYTHON</li>
              <li>C</li>
              <li>C++</li>
              <li>JAVA</li>
            </ul>
            <ul>
              <li>MONGODB</li>
              <li>MYSQL</li>
              <li>POSTGRESQL</li>
              <li>FLASK</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="w-4/5 h-4/5">
          {Pages.map((item, i) => {
            return (
              <Section
                key={i}
                id={item.id}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div> */
}
