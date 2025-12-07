import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./style.css";
import "./theme.css";

import Calculator from "./pages/Calculator";
import TipCalculator from "./pages/TipCalculator";
import DemoBMI from "./pages/DemoBMI";
import ImageGallery from "./pages/ImageGallery";
import TodoApp from "./pages/TodoApp";
import HotelBooking from "./pages/HotelBooking";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="calculator" element={<Calculator />} />
        <Route path="TipCalculator" element={<TipCalculator />} />
        <Route path="DemoBMI" element={<DemoBMI />} />
        <Route path="ImageGallery" element={<ImageGallery />} />
        <Route path="TodoApp" element={<TodoApp />} />
        <Route path="HotelBooking" element={<HotelBooking />} />
      </Route>

    </Routes>
  );
}

export default App;
