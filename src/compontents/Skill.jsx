/* eslint-disable react/jsx-key */
import {
  SiCss3,
  SiCssmodules,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import styles from "./Skill.module.css";
import { motion } from "framer-motion";

const icons = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "css" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiGithub />, name: "Github" },
  { icon: <SiNpm />, name: "node package manager" },
  { icon: <SiSass />, name: "sass" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwindcss" },
  { icon: <SiReactrouter />, name: "React Router" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiCssmodules />, name: "css modules" },
  { icon: <SiFirebase />, name: "Basics firebase" },
  { icon: <SiNodedotjs />, name: "Node Js" },
  { icon: <SiExpress />, name: "Express Js" },
  { icon: <SiMongodb />, name: "Mongo DB" },
  { icon: <SiMongoose />, name: "Mongoose" },
];

const iconsAmination = (i) => ({
  initial: {
    opacity: 0,
    y: -50,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
    },
  },
});

function Skill() {
  return (
    <div className={styles.skill} id="skill">
      <h1>Skills</h1>
      <ul className={styles.icons}>
        {icons.map((item, i) => (
          <motion.li
            key={i}
            variants={iconsAmination(i)}
            initial="initial"
            whileInView="animation"
            viewport={{ once: true }}
            custom={i}
          >
            {" "}
            {item.icon} {item.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
