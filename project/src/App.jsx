import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNavigation from "./components/navigation/FullScreenNavigation";
import { useContext } from "react";
import { navbarContext } from "./context/NavContext";

const App = () => {
  const [navOpen] = useContext(navbarContext);
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <FullScreenNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
