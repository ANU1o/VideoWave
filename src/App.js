import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import History from "./pages/History";
import Upload from "./pages/Upload";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App user-select-none d-flex min-vh-100 flex-column">
      <Header />
      <Routes data-bs-spy="scroll">
        <Route path="" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/History" element={<History />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
