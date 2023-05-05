import styles from "../styles/NovoProjeto.module.css";
import FormProjeto from "../../Project/Javascript/FormProjeto";
function NovoProjeto() {
  return (
    <div className={styles.novoProjeto_Container}>
      <h1>Criar seu projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <FormProjeto btnText="Criar projeto" />
    </div>
  );
}

export default NovoProjeto;
