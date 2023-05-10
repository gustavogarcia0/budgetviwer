import {useNavigate} from "react-router-dom";
import styles from "../styles/NovoProjeto.module.css";
import FormProjeto from "../../Project/Javascript/FormProjeto";
function NovoProjeto() {
  const history = useNavigate();

  function createPost(projeto) {
    // Initialize cost and services
    projeto.cost = 0;
    projeto.services = [];

    fetch("http://localhost:5000/Projetos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(projeto),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        //redirect
        history("/Projetos", {message: "Projeto criado com sucesso"});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.novoProjeto_Container}>
      <h1>Criar seu projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <FormProjeto handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NovoProjeto;
