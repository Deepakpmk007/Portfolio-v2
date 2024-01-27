import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const headerAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animation: {
    opacity: 1,
    y: 0,
  },
};

const pAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
    },
  },
};

const linkOneAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
    },
  },
};

const linkTwoAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
};

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.innerFooter}>
        <motion.h1
          className={styles.footerHeader}
          variants={headerAnimation}
          initial="initial"
          whileInView="animation"
        >
          Just say hi.
        </motion.h1>
        <motion.p
          className={styles.footerP}
          variants={pAnimation}
          initial="initial"
          whileInView="animation"
        >
          I'm always open to dicuss your project and talk about new things.
        </motion.p>
        <div className={styles.footerLinks}>
          <motion.div
            className={styles.email}
            variants={linkOneAnimation}
            initial="initial"
            whileInView="animation"
          >
            <h3>Mail me at</h3>
            <span>deepakpmk@hotmail.com</span>
          </motion.div>
          <motion.areadiv
            className={styles.links}
            variants={linkTwoAnimation}
            initial="initial"
            whileInView="animation"
          >
            <h3>Follow me</h3>
            <ul>
              <li>
                <a href="https://github.com/Deepakpmk007" target="block">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/deepak-k-9304b7255"
                  target="block"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a href="https://instagram.com/deepakpmk__?igshid=MzNlNGNkZWQ4Mg==">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </motion.areadiv>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
