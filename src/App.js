import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import NovoProjeto from "./components/pages/NovoProjeto";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Projetos from "./components/pages/Projetos";

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
