import { Link } from "react-router-dom";
import "./layout.css";

export default function Header({ onClick, displayNav }) {
  return (
    <header className="bg-success">
      <div className="navi">
        <Link className="Link" to="/">
          <div className=" logo">
            <img src="LOGO.png" alt="Logo" />
            <h1 className="logoName">
              Financial<sub>Goal</sub>
            </h1>
          </div>
        </Link>
        <i
          className={displayNav ? "bi bi-x" : "bi bi-list"}
          onClick={onClick}
        ></i>
      </div>

      <nav className={displayNav ? "show" : "nav"}>
        <li onClick={onClick}>
          <Link to="apropos">
            <i className="bi bi-card-checklist"></i> À propos
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="abonnements">
            <i className="bi bi-card-checklist"></i> Abonnements
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="ajouter">
            <i className="bi bi-bag-plus-fill"></i> Ajouter abonnements
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="account">
            <i className="bi bi-person-circle"></i> Account
          </Link>
        </li>
      </nav>
    </header>
  );
}
