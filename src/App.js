import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./components/Navbar";
import homeIMG from "./components/templates/home.jpg";
import cv from "./components/templates/myCV.pdf";

const Pages = [
  { id: "section1", title: "Introduction", content: "Introduction" },
  // { id: "section2", title: "About", content: "About" },
  // { id: "section3", title: "Portfolio", content: "Portfolio" },
  // { id: "section4", title: "Skills", content: "Skills" },
  // { id: "section5", title: "MyResume", content: "MyResume" },
  // { id: "section6", title: "Contact", content: "Contact" },
];

const progressBar = [
  { percentage: 90, skill: "HTML" },
  { percentage: 70, skill: "CSS" },
  { percentage: 90, skill: "JAVASCRIPT" },
  { percentage: 90, skill: "REACT JS" },
  { percentage: 100, skill: "Tailwind CSS" },
];
const progressBar1 = [
  { percentage: 90, skill: "PYTHON" },
  { percentage: 90, skill: "FLASK" },
  { percentage: 90, skill: "PHP" },
  { percentage: 90, skill: "MONGO-DB" },
  { percentage: 96, skill: "mySQL" },
];
const progressBar2 = [
  { percentage: 90, skill: "POSTGRESQL" },
  { percentage: 90, skill: "NODEJS" },
  { percentage: 86, skill: "BOOTSTRAP" },
];
export default function App() {
  return (
    <>
      <div className="w-full bg-repeat-y bg-[url('./components/templates/banner-bg.png')] p-5 flex flex-wrap justify-center ">
        <Navbar />
        <div id="section1" className="w-5/5 h-full  p-20 text-white ">
          <div className="pt-32">
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
          className="w-5/5 h-full p-20 bg-[url('./components/templates/color-sharp2.png')] text-white text-center font-bold rounded-lg "
        >
          <div className="pt-10">
            <h2 className="text-6xl">
              <b>About Me</b>
            </h2>
            <div className="bg-[#3e3c3cb6] mt-5 px-20 py-5">
              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-5 rounded-xl">
                <b className="text-2xl">Background : </b>
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

              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-5 rounded-xl">
                <b className="text-2xl">Interests : </b>
                <br />
                <p className="mt-5 text-xl">
                  My interests are diverse and eclectic, reflecting my curiosity
                  about the world around me. One of my greatest passions is
                  Money, which allows me to Coding. I find immense joy and
                  fulfillment in immersing myself in this pursuit. In addition
                  to Coding, I'm also deeply passionate about Traveling.
                </p>
              </div>

              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-5 rounded-xl">
                <b className="text-2xl">Aspirations : </b>
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
          className="w-5/5 h-full p-20 bg-[url('./components/templates/color-sharp2.png')] text-white text-center font-bold rounded-lg"
        >
          <div className="pt-10">
            <h2 className="text-6xl ">
              <b>Portfolio</b>
            </h2>
            <div className=" bg-[#3e3c3cb6] mt-5 px-20 py-5">
              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-8 rounded-xl">
                <b className="text-2xl">Background : </b>
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

              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-8 rounded-xl">
                <b className="text-2xl">Interests : </b>
                <br />
                <p className="mt-5 text-xl">
                  My interests are diverse and eclectic, reflecting my curiosity
                  about the world around me. One of my greatest passions is
                  Money, which allows me to Coding. I find immense joy and
                  fulfillment in immersing myself in this pursuit. In addition
                  to Coding, I'm also deeply passionate about Traveling.
                </p>
              </div>

              <div className="border border-red-300 bg-[#daa520] my-10 text-black text-start p-8 rounded-xl">
                <b className="text-2xl">Aspirations : </b>
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
          id="section4"
          className="w-full h-full p-20 text-white text-center rounded-2xl font-bold bg-[url('./components/templates/color-sharp2.png')]"
        >
          <div className="pt-5">
            <span className="text-6xl">Skills</span>
            <div className=" p-6 text-base font-mono bg-[#3e3c3cb6] mt-5">
              <div className="flex items-center justify-evenly mb-5">
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
              <div className="flex items-center justify-evenly mb-5">
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
              <div className="flex items-center justify-evenly mb-5">
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

        <div
          id="section5"
          className="w-full h-full p-20 text-white text-center rounded-2xl font-bold bg-[url('./components/templates/color-sharp2.png')]"
        >
          <div className="pt-5">
            <span className="text-6xl">Resume</span>
            <div className="">
              <div className="mt-5 flex items-center justify-evenly p-14 bg-[#3e3c3cb6]">
                <img src={homeIMG} alt="key_image" className="w-80 h-80" />
                <h6 className="text-white text-2xl p-3">
                  You are the <b>master</b> of <b>your destiney,</b> you can{" "}
                  <b>influence direct</b> and <b>control</b> your own
                  environment you can make <b>your life</b> what{" "}
                  <b> you want it to be.</b> <br />
                  <button className="mt-10">
                    <a
                      className="border border-white bg-blue-600 py-2 px-3 rounded-md"
                      href={cv}
                      download="myCV"
                      role="button"
                    >
                      Download CV
                    </a>
                  </button>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section6"
          className="w-full h-full p-20 text-white text-center rounded-2xl font-bold bg-[url('./components/templates/color-sharp2.png')]"
        >
          <div className="pt-5">
            <span className="text-6xl">Contact</span>
            <div className=" bg-[#3e3c3cb6] mt-5 px-20 py-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
