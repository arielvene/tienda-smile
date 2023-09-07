import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Inicio from "../pages/Inicio";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"

const MainRouter = () => {
  return (
    <Router>
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/category/:categoryId" element={<Inicio/>} />
            <Route path="/item/:itemId" element={<Inicio/>} />
        </Routes>
    </Router>
  )
}

export default MainRouter;