import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./components/Navbar";
import homeIMG from "./components/templates/home.jpg";
import image_0 from "./components/templates/image-0.jpg";
import image_1 from "./components/templates/image-1.jpg";
import image_2 from "./components/templates/image-2.jpg";
import cv from "./components/templates/myCV.pdf";

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
  { percentage: 86, skill: "BOOTSTRAP" },
  { percentage: 86, skill: "BOOTSTRAP" },
];
export default function App() {
  const [slide, setSlide] = useState(0);
  const [click, setClick] = useState(1);
  return (
    <>
      <div className="w-full bg-repeat-y bg-[url('./components/templates/banner-bg.png')] flex flex-wrap justify-center items-center pt-5">
        <Navbar />
        <div id="section1" className="">
          <div className="w-5/5 h-full text-white mt-32">
            <div className="p-16">
              <span className="border border-white text-xl bg-[#6f2c85] p-3">
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
                science, I've honed my skills in programming and
                problem-solving.
              </p>
              <span className="my-3 text-xl flex">
                <b>Let's connect {`--> `}</b>
              </span>
            </div>
          </div>
        </div>
        <div id="section2" className="bg-[#ba21ed97]">
          <div className="w-5/5 h-full text-white mt-16 text-center">
            <div className="p-10">
              <span className="text-4xl font-bold">About Me</span>
              <div className="w-3/5 flex items-center justify-evenly border border-white mx-auto text-xl font-bold my-5 rounded-xl">
                <h3
                  style={{ padding: "9px" }}
                  className={`w-1/3 rounded-l-xl ${
                    click === 0
                      ? `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300`
                      : `bg-black hover:text-purple-500`
                  } cursor-pointer`}
                  onClick={() => {
                    setClick(0);
                  }}
                >
                  Background
                </h3>
                <h3
                  style={{ padding: "9px" }}
                  className={`w-1/3 ${
                    click === 1
                      ? `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300`
                      : `bg-black hover:text-purple-500`
                  } cursor-pointer`}
                  onClick={() => {
                    setClick(1);
                  }}
                >
                  Interests
                </h3>
                <h3
                  style={{ padding: "9px" }}
                  className={`w-1/3  rounded-r-xl ${
                    click === 2
                      ? `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300`
                      : `bg-black hover:text-purple-500`
                  } cursor-pointer`}
                  onClick={() => {
                    setClick(2);
                  }}
                >
                  Aspirations
                </h3>
              </div>
              <p
                className={
                  click === 0
                    ? `font-bold block px-32 sm:px-0 py-8 text-center text-xl`
                    : `hidden`
                }
              >
                I'm Aniket, a 24 year-old Web Developer based in Nagpur,
                Maharashtra. I have always been fascinated by Softwares, which
                led me to pursue a degree in Information Technology from
                Wainganga College of Engineering and Management. During my
                academic journey, I delved deep into subjects like DSA, RDBMS,
                CSS , where I developed a strong foundation in Software
                Development.
              </p>
              <p
                className={
                  click === 1
                    ? `font-bold block px-32 sm:px-0 py-8 text-center text-xl`
                    : `hidden`
                }
              >
                My interests are diverse and eclectic, reflecting my curiosity
                about the world around me. One of my greatest passions is Money,
                which allows me to Coding. I find immense joy and fulfillment in
                immersing myself in this pursuit. In addition to Coding, I'm
                also deeply passionate about Traveling.
              </p>
              <p
                className={
                  click === 2
                    ? `font-bold block px-32 sm:px-0 py-8 text-center text-xl`
                    : `hidden`
                }
              >
                Looking ahead, my aspirations are centered around Money. I aim
                to Money Maker, leveraging my skills and experiences to working
                harder, I'm committed to continuous growth and development in
                both my personal and professional life.
              </p>
              <img
                className={click === 0 ? `block mx-auto h-60` : `hidden`}
                src={image_0}
                alt="images"
              />
              <img
                className={click === 1 ? `block mx-auto h-60` : `hidden`}
                src={image_1}
                alt="images"
              />
              <img
                className={click === 2 ? `block mx-auto h-60` : `hidden`}
                src={image_2}
                alt="images"
              />
            </div>
          </div>
        </div>

        <div id="section3" className="w-full bg-black flex justify-center">
          <div
            className="w-5/6 h-full border border-[#e2d1d168] text-white my-32 font-bold bg-[#100f0f] p-10"
            style={{ borderRadius: "40px" }}
          >
            <div className="p-8 text-center">
              <span className="text-4xl">Skills</span>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates rem facilis quis excepturi error consequuntur nulla
                pariatur! Iusto odio quos dicta pariatur esse.
              </p>
              <div className="flex items-center justify-evenly mb-5 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 my-5 border border-white hover:bg-green-400"
                  onClick={() => {
                    setSlide(slide === 0 ? slide : (prev) => prev - 1);
                  }}
                  style={{ padding: "4px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
                <div
                  className={
                    slide === 0
                      ? `flex items-center justify-evenly flex-wrap`
                      : `hidden`
                  }
                >
                  {progressBar.map((item, index) => {
                    return (
                      <div
                        style={{
                          width: 120,
                          height: 120,
                          webkitUserSelect: "none",
                          mozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",
                        }}
                        className="my-10 mx-5"
                        key={index}
                      >
                        <CircularProgressbar
                          value={item.percentage}
                          text={`${item.percentage}%`}
                          styles={buildStyles({
                            pathColor: `#a855f7`,
                            textColor: "#3ec760",
                          })}
                        />
                        <p className="font-bold text-xl mt-5" useSelect="none">
                          {item.skill}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={
                    slide === 1
                      ? `flex items-center justify-evenly flex-wrap`
                      : `hidden`
                  }
                >
                  {progressBar1.map((item, index) => {
                    return (
                      <div
                        style={{
                          width: 120,
                          height: 120,
                          webkitUserSelect: "none",
                          mozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",
                        }}
                        className="my-10 mx-5"
                        key={index}
                      >
                        <CircularProgressbar
                          value={item.percentage}
                          text={`${item.percentage}%`}
                          styles={buildStyles({
                            pathColor: `#a855f7`,
                            textColor: "#3ec760",
                          })}
                        />
                        <p className="font-bold text-xl mt-5">{item.skill}</p>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={
                    slide === 2
                      ? `flex items-center justify-evenly flex-wrap`
                      : `hidden`
                  }
                >
                  {progressBar2.map((item, index) => {
                    return (
                      <div
                        style={{
                          width: 120,
                          height: 120,
                          webkitUserSelect: "none",
                          mozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",
                        }}
                        className="my-10 mx-5"
                        key={index}
                      >
                        <CircularProgressbar
                          value={item.percentage}
                          text={`${item.percentage}%`}
                          styles={buildStyles({
                            pathColor: `#a855f7`,
                            textColor: "#3ec760",
                          })}
                        />
                        <p className="font-bold text-xl mt-5">{item.skill}</p>
                      </div>
                    );
                  })}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ padding: "4px" }}
                  className="w-10 h-10 my-5 border border-white hover:bg-green-400"
                  onClick={() => {
                    setSlide(slide === 2 ? slide : (prev) => prev + 1);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div id="section4" className="bg-[#ba21ed97]">
          <div className="w-5/5 h-full text-white mt-20 text-center">
            <div className="p-16">
              <span className="text-4xl font-bold">Resume</span>
              <div className="">
                <div className="mt-5 flex items-center justify-evenly p-5">
                  <img src={homeIMG} alt="key_image" className="w-80 h-80" />
                  <h6 className="text-white text-2xl p-3 font-mono">
                    You are the <b>master</b> of <b>your destiney,</b> you can{" "}
                    <b>influence direct</b> and <b>control</b> your own
                    environment you can make <b>your life</b> what{" "}
                    <b> you want it to be.</b> <br /> <br />
                    <a
                      className="border border-white bg-blue-600 py-1 px-3 rounded-md font-mono w-80"
                      href={cv}
                      download="myCV"
                      type="button"
                    >
                      Download CV
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section5"
          className="w-full bg-repeat-y bg-[url('./components/templates/banner-bg.png')]"
        >
          <div className="w-5/5 h-full text-white text-center">
            <div className="p-10 bg-black ">
              <span className="text-4xl font-bold">Contact Me</span>
              <div className="flex items-center justify-evenly p-10 font-mono text-2xl mt-10">
                <span
                  onClick={() => {
                    navigator.clipboard.writeText("aniketwakalkar23@gmail.com");
                  }}
                  className="border border-red-400 py-1 px-5 hover:bg-red-400 hover:text-white flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 ml-0"
                  >
                    <path
                      stroke-linecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                  Email-copy
                </span>
                <span className="border border-blue-400 py-1 px-5 hover:bg-blue-400 hover:text-white flex items-center">
                  <a
                    href="https://www.linkedin.com/in/aniket-wakalkar-b8a418160/"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </span>
                <span className="border border-stone-400 py-1 px-5 hover:bg-stone-400 hover:text-white flex items-center">
                  <a href="https://github.com/aniWakalkar" target="blank">
                    Github
                  </a>
                </span>
                <span className="border border-blue-400 py-1 px-5 hover:bg-blue-400 hover:text-white flex items-center">
                  <a href="https://twitter.com/AWakalkar94758" target="blank">
                    Twitter
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
