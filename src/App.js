import "./App.css";
import BeerPage from "./components/Beer/BeerPage";
import BeerDetails from "./components/Beer/BeerDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Beer/LoginPage";
import RegisterPage from "./components/Beer/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/beers" element={<BeerPage />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
