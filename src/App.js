import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
