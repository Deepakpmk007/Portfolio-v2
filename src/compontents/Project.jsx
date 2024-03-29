/* eslint-disable react/jsx-key */
import { useState } from "react";
import styles from "./Project.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const data = [
  {
    title: "Dice game",
    tool: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    url: "../image/project-1.png",
    content:
      "This website using the basics javascript program. This game have play two player",
    link: "https://dice-roll-game-js.netlify.app/",
    github: "https://github.com/Deepakpmk007/Dice-game.git",
  },
  {
    title: "Mapty",
    tool: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    url: "../image/project-2.png",
    content:
      "This is map based website. I use leaflet api to dispaly the map in the website. To mark the runnig km and distance and mark in the map to identify the place. ",
    link: "https://mapty-app-workout.netlify.app/",
    github: "https://github.com/Deepakpmk007/Map-App-using-API.git",
  },
  {
    title: "Bankist",
    tool: [<SiHtml5 />, <SiSass />, <SiJavascript />],
    url: "../image/project-3.png",
    content:
      "This is the bank website. user interface to show the information and service provide by the bank.so the client know the information. ",
    link: "https://bankist-frontent.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist.git",
  },
  {
    title: "Bankist money",
    tool: [<SiHtml5 />, <SiSass />, <SiJavascript />],
    url: "../image/project-4.png",
    content:
      "This the full function of the bankist website. this website have userid and password to enter. After tranfer the money form one user to another user and request for the loan.",
    link: "https://bankist-function.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist-money.git",
  },
  {
    title: "Fast pizza",
    tool: [<SiReact />, <SiReactrouter />, <SiRedux />, <SiTailwindcss />],
    url: "../image/project-5.png",
    content:
      "This is the pizza ordering wesite. using Tailwindcss, react-rouder and Redux state management. the user select the pizza and add to the cart. After place the order.",
    link: "https://fast-pizza-deepak.netlify.app/",
    github: "https://github.com/Deepakpmk007/Fast-React-Pizza.git",
  },
  {
    title: "Portfolio-v1",
    tool: [<SiReact />, <SiStyledcomponents />, <SiReactrouter />],
    url: "../image/project-6.png",
    content:
      "This is my first version portfolio. using stylescomponents and react-router",
    link: "https://reactdeepak.netlify.app/",
    github: "https://github.com/Deepakpmk007/portfolio.git",
  },
];
console.log(data.length);

const headerAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animation: {
    opacity: 1,
    x: 0,
  },
};

const pAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentSlide(2);
  //   }, 2000);
  // }, [setCurrentSlide]);

  function pervSlide() {
    const isFisrtSlide = currentSlide === 0;
    const newSlide = isFisrtSlide ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    console.log("pervSlide");
  }

  function nextSlide() {
    const isLastSlide = currentSlide === data.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }

  const project = data.map((el) => (
    <div className={styles.imgSliderContainer}>
      <div className={styles.inner}>
        <div className={styles.innerContiner}>
          <h1 className={styles.title}>{el.title}</h1>
          <p className={styles.title}>{el.content}</p>
          <div className={styles.tools}>{el.tool}</div>
          <section>
            <motion.a href={el.link} target="block">
              Link
            </motion.a>
            <motion.a href={el.github} target="block">
              Github
            </motion.a>
          </section>
        </div>
        <motion.img src={el.url} />
        {/* <div className={styles.blur}></div> */}
      </div>
    </div>
  ));

  return (
    <div className={styles.project} id="project">
      <motion.h1
        className={styles.header}
        variants={headerAnimation}
        initial="initial"
        animate="animation"
      >
        Projects
      </motion.h1>
      <div className={styles.cont}>{project}</div>
    </div>
  );
}

export default Project;
