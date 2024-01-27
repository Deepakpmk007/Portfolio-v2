import { useState } from "react";
import styles from "./Nav.module.css";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

const animation = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  animation: {
    opacity: 1,
    scaleY: 1,
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const menuTextAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
  },
};

function Nav() {
  const [clicked, setCliked] = useState(false);

  function handleClick() {
    setCliked(!clicked);
  }

  return (
    <nav className={styles.nav}>
      <FaRegFaceLaughWink />
      <div onClick={handleClick}>
        {clicked ? (
          <HiXMark className={styles.menu} />
        ) : (
          <HiBars3 className={styles.menu} />
        )}
      </div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            variants={animation}
            initial="initial"
            animate="animation"
            exit="exit"
            className={styles.menuBar}
          >
            <ul className={styles.menuLinks}>
              <motion.li
                variants={menuTextAnimation}
                initial="initial"
                animate="animation"
                exit="exit"
                className={styles.menuLink}
                onClick={handleClick}
              >
                <a href="#home">Home</a>
              </motion.li>
              <motion.li
                variants={menuTextAnimation}
                initial="initial"
                animate="animation"
                exit="exit"
                className={styles.menuLink}
                onClick={handleClick}
              >
                <a href="#about">About me</a>
              </motion.li>
              <motion.li
                variants={menuTextAnimation}
                initial="initial"
                animate="animation"
                exit="exit"
                className={styles.menuLink}
                onClick={handleClick}
              >
                <a href="#skill">skills</a>
              </motion.li>
              <motion.li
                variants={menuTextAnimation}
                initial="initial"
                animate="animation"
                exit="exit"
                className={styles.menuLink}
                onClick={handleClick}
              >
                <a href="#project">Projects</a>
              </motion.li>
              <motion.li
                variants={menuTextAnimation}
                initial="initial"
                animate="animation"
                exit="exit"
                className={styles.menuLink}
                onClick={handleClick}
              >
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.navLink}>
          <a href="#about">About me</a>
        </li>
        <li className={styles.navLink}>
          <a href="#skill">skills</a>
        </li>
        <li className={styles.navLink}>
          <a href="#project">Projects</a>
        </li>
        <li className={styles.navLink}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
