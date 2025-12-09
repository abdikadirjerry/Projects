import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./style.css";
// import "./theme.css";
import Login from "./pages/Login";
import Calculator from "./pages/Calculator";
import TipCalculator from "./pages/TipCalculator";
import DemoBMI from "./pages/DemoBMI";
import ImageGallery from "./pages/ImageGallery";
import TodoApp from "./pages/TodoApp";
import HotelBooking from "./pages/HotelBooking";

function App() {
  return (
    <Routes>
      {/* Public login page */}
      <Route path="/" element={<Login />} />

      {/* Layout is a parent route. Child pages render inside <Outlet /> */}
      <Route path="/layout" element={<Layout />}>
        {/* default when visiting /layout -> show Calculator (change if you prefer) */}
        <Route index element={<Calculator />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="tip" element={<TipCalculator />} />
        <Route path="bmi" element={<DemoBMI />} />
        <Route path="gallery" element={<ImageGallery />} />
        <Route path="todo" element={<TodoApp />} />
        <Route path="hotel" element={<HotelBooking />} />
      </Route>

      {/* optional: catch all -> redirect to login (you can add a NotFound page later) */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
