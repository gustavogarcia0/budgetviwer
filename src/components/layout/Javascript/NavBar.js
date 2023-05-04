import {Link} from "react-router-dom";

import Container from "./Container";
import styles from "../../../components/layout/Styles/NavBar.module.css";
import logo from "../../../img/costs_logo.png";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projetos">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Empresa">Empresa</Link>
          </li>
          {/* <li>
            <Link to="/novoprojeto">Novo Projeto</Link>
          </li> */}
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
