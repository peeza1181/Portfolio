import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Certificate } from "./components/Certificate";
import { Contact } from './components/Contact'
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
