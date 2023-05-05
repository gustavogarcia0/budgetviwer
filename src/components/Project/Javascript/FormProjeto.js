import styles from "../Styles/FormProjeto.module.css";
import Input from "../../Form/Javascript/Input.js";
import Select from "../../Form/Javascript/Select";
import SubmitButton from "../../Form/Javascript/SubmitButton";

function FormProjeto({btnText}) {
  return (
    <form className={styles.form}>
      <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />
      <Input type="number" text="Orçamento do projeto" name="name" placeholder="Insira o orçamento total" />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default FormProjeto;
