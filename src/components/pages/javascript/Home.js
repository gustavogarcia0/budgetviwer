import styles from "./../styles/Home.module.css";
import savings from "../../../img/savings.svg";
import LinkButton from "../../layout/Javascript/LinkButton.js";
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Budget viewer</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/NovoProjeto" text="Criar projeto" />
      <img src={savings} alt="budgetviewer" />
    </section>
  );
}

export default Home;
