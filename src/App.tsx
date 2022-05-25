import styled from "styled-components";
import { AppBar } from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { MenuPage } from "./pages/MenuPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <Router>
      <AppStyles className="App AppStyles">
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </AppStyles>
      <AppBar />
    </Router>
  );
}
const AppStyles = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  min-height: 100vh;
`;

// https://mantine.dev/core/action-icon/
export default App;
