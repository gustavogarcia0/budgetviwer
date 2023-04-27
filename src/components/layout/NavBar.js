import {Link} from "react-router-dom";

import Container from "./Container";
import styles from "../layout/NavBar.module.css";
import logo from "../../img/costs_logo.png";

function NavBar() {
  return (
    <nav class={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo costs" />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li class={styles.item}>
            <Link to="/Projetos">Projetos</Link>
          </li>
          <li class={styles.item}>
            <Link to="/Contato">Contato</Link>
          </li>
          <li class={styles.item}>
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
