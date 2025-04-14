import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./components/layout/layout";
import Abonnements from "./components/pages/abonnements";
import Account from "./components/pages/account";
import Ajouter from "./components/pages/ajouter";
import Apropos from "./components/pages/apropos";
import Home from "./components/pages/home";
import Tips from "./components/pages/tips";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="abonnements" element={<Abonnements />} />
          <Route path="account" element={<Account />} />
          <Route path="ajouter" element={<Ajouter />} />
          <Route path="/tips" element={<Tips />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
