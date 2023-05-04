import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

import styles from "../../../components/layout/Styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>budget viewer</span> &copy;
      </p>
    </footer>
  );
}

export default Footer;
