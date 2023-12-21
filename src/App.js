import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../../client/src/components/Header";
import MainPage from "./pages/MainPage";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import AllProductsFunction from "./pages/AllProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/AllProducts" element={<AllProductsFunction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
