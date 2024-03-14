import { motion } from "framer-motion";
import styles from "./About.module.css";

const datas = [
  {
    data: " Hi there, once again my name Deepak. I am 21 year old. I like web developer over more year. I always interested in the new web tech.",
  },
  {
    data: "Then I realized that I really want to develop myself and my programming skills and over the few year I develop with the new web technology like react and more..",
  },
  {
    data: " I learn now back-end development with nodejs to became full-stack developer one day.",
  },
  {
    data: "I learn quickly, I like to learn new things.",
  },
  {
    data: "My hobbies are reading books, traveling, watch movies and series.",
  },
];

const pAnimation = (index) => ({
  initial: {
    opacity: 0,
    x: -100,
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 * index,
    },
  },
});

const headerAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animation: {
    opacity: 1,
    x: 0,
  },
};

function About() {
  return (
    <div className={styles.aboutMe} id="about">
      <motion.h1
        variants={headerAnimation}
        initial="initial"
        animate="animation"
        viewport={{ once: true }}
      >
        About me
      </motion.h1>
      <div className={styles.aboutP}>
        {datas.map((item, index) => (
          <motion.p
            variants={pAnimation(index)}
            initial="initial"
            whileInView="animation"
            custom={index}
            viewport={{ once: true }}
            key={index}
          >
            {item.data}
          </motion.p>
        ))}

        <button>
          <a
            href="https://drive.google.com/file/d/1B9LnnnYM0JvHAu7EkxLORjb2lA23Nx5o/view"
            target="block"
          >
            My resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
