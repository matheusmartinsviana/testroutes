import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Body from "../Body";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
