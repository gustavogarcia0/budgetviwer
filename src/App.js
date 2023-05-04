import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/javascript/Home";
import Contato from "./components/pages/javascript/Contato";
import Empresa from "./components/pages/javascript/Empresa";
import NovoProjeto from "./components/pages/javascript/NovoProjeto";
import NavBar from "./components/layout/Javascript/NavBar";
import Container from "./components/layout/Javascript/Container";
import Footer from "./components/layout/Javascript/Footer";
import Projetos from "./components/pages/javascript/Projetos";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Projetos" element={<Projetos />}></Route>
            <Route exact path="/contato" element={<Contato />}></Route>
            <Route exact path="/empresa" element={<Empresa />}></Route>
            <Route exact path="/novoprojeto" element={<NovoProjeto />}></Route>
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
