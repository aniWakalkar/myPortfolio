import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./components/Navbar";

const Pages = [
  { id: "section1", title: "Introduction", content: "Introduction" },
  // { id: "section2", title: "About", content: "About" },
  // { id: "section3", title: "Portfolio", content: "Portfolio" },
  // { id: "section4", title: "Skills", content: "Skills" },
  // { id: "section5", title: "MyResume", content: "MyResume" },
  // { id: "section6", title: "Contact", content: "Contact" },
];

const progressBar = [
  { percentage: 66, skill: "HTML" },
  { percentage: 76, skill: "CSS" },
  { percentage: 86, skill: "JAVASCRIPT" },
  { percentage: 96, skill: "REACT JS" },
  { percentage: 100, skill: "Tailwind CSS" },
];
const progressBar1 = [
  { percentage: 66, skill: "HTML" },
  { percentage: 76, skill: "CSS" },
  { percentage: 86, skill: "JAVASCRIPT" },
  { percentage: 96, skill: "REACT JS" },
  { percentage: 100, skill: "Tailwind CSS" },
];
const progressBar2 = [
  { percentage: 66, skill: "HTML" },
  { percentage: 76, skill: "CSS" },
  { percentage: 86, skill: "JAVASCRIPT" },
  { percentage: 96, skill: "REACT JS" },
  { percentage: 100, skill: "Tailwind CSS" },
];
export default function App() {
  return (
    <>
      <div className="w-full bg-grey-100 bg-[url('./components/templates/banner-bg.png')] p-5 flex flex-wrap justify-center">
        <Navbar />
        <div id="section1" className="w-5/5 h-full py-20 px-20 text-white ">
          <div className="py-20">
            <span className="px-2 py-2 border border-white text-xl bg-[#6f2c85]">
              <b>Welcome to my Portfolio</b>
            </span>
            <h2 className="text-6xl mt-10 mb-5">
              <b>
                Hi! I'm Aniket Wakalkar <br />
                Web Developer
              </b>
            </h2>
            <p className="text-xl">
              I'm passionate about technology and love exploring how it can be
              used to solve real-world problems. With a background in computer
              science, I've honed my skills in programming and problem-solving.
            </p>
            <span className="my-3 text-xl flex">
              <b>Let's connect {`--> `}</b>
            </span>
          </div>
        </div>

        <div
          id="section2"
          className="w-5/5 h-full py-10 px-20 my-10 text-white bg-[#070505fb] text-center font-bold rounded-lg"
        >
          <div className="py-20">
            <h2 className="text-6xl mt-10">
              <b>
                Hi! I'm Aniket Wakalkar
                <br />
                Web Developer
              </b>
            </h2>
            <div className="">
              <div className="border border-red-300 bg-white my-10 text-black text-start p-5 rounded-xl">
                <b className="text-4xl">Background : </b>
                <br />
                <p className="mt-5 text-xl">
                  I'm Aniket, a 24 year-old Web Developer based in Nagpur,
                  Maharashtra. I have always been fascinated by Softwares, which
                  led me to pursue a degree in Information Technology from
                  Wainganga College of Engineering and Management. During my
                  academic journey, I delved deep into subjects like DSA, RDBMS,
                  CSS , where I developed a strong foundation in Software
                  Development.
                </p>
              </div>

              <div className="border border-red-300 bg-white my-10 text-black text-start p-5 rounded-xl">
                <b className="text-4xl">Interests : </b>
                <br />
                <p className="mt-5 text-xl">
                  My interests are diverse and eclectic, reflecting my curiosity
                  about the world around me. One of my greatest passions is
                  Money, which allows me to Coding. I find immense joy and
                  fulfillment in immersing myself in this pursuit. In addition
                  to Coding, I'm also deeply passionate about Traveling.
                </p>
              </div>

              <div className="border border-red-300 bg-white my-10 text-black text-start p-5 rounded-xl">
                <b className="text-4xl">Aspirations : </b>
                <br />
                <p className="mt-5 text-xl">
                  Looking ahead, my aspirations are centered around Money. I aim
                  to Money Maker, leveraging my skills and experiences to
                  working harder, I'm committed to continuous growth and
                  development in both my personal and professional life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section3"
          className="w-5/5 h-full py-10 px-20 my-10 text-white bg-[#2f2c2c85] text-center rounded-2xl font-bold"
        >
          <div className="py-20">
            <span className="text-4xl">Skills</span>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              temporibus fugit nulla ipsam, saepe amet ea nostrum consequuntur
              natus excepturi laborum. Architecto ab minima, tempore repudiandae
              asperiores itaque. Officia sed in sint earum repudiandae.
            </p>
            <div className=" p-6 text-base font-mono ">
              <div className="flex items-center justify-evenly my-5">
                {progressBar.map((item, index) => {
                  return (
                    <div style={{ width: 160, height: 160 }} className="my-10">
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={buildStyles({
                          pathColor: `#3ec760`,
                          textColor: "#3ec760",
                        })}
                      />
                      <p className="font-bold text-xl mt-5">{item.skill}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-evenly my-5">
                {progressBar1.map((item, index) => {
                  return (
                    <div style={{ width: 160, height: 160 }} className="my-10">
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={buildStyles({
                          pathColor: `#3ec760`,
                          textColor: "#3ec760",
                        })}
                      />
                      <p className="font-bold text-xl mt-5">{item.skill}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-evenly my-5">
                {progressBar2.map((item, index) => {
                  return (
                    <div style={{ width: 160, height: 160 }} className="my-10">
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={buildStyles({
                          pathColor: `#3ec760`,
                          textColor: "#3ec760",
                        })}
                      />
                      <p className="font-bold text-xl mt-5">{item.skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
