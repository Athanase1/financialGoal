
import { Link, useNavigate} from "react-router-dom";
import "./layout.css";
import Logo from  "../../../public/LOGO.png"

export default function Header({ onClick, displayNav }) {
   const navigate = useNavigate();
      function handleClick(){
          navigate("/");
      }
  return (
    <header className="bg-success">
      <div className="navi">
       
          <div className=" logo shadow rounded " onClick={handleClick} >
            <img src={Logo} alt="Logo" />
          
          </div>
      

        <i
          className={displayNav ? "bi bi-x" : "bi bi-list"}
          onClick={onClick}
        ></i>
      </div>
     
      <h1 className="logoName fw-bold shadow" onClick={handleClick}>
              Financial<sub>Goal</sub>
            </h1>
      
      <nav className={displayNav ? "show" : "nav"}>
      <li onClick={onClick} >
          <Link to="/" className="d-flex flex-row align-items-center fw-bold text-white">
            <i className="bi bi-house-door-fill me-1"></i> Home
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="apropos" className="d-flex flex-row align-items-center fw-bold text-white">
            <i className="bi bi-card-checklist me-1"></i> À propos
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="abonnements" className="d-flex flex-row align-items-center fw-bold text-white">
            <i className="bi bi-card-checklist me-1"></i> Abonnements
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="ajouter" className="d-flex flex-row align-items-center fw-bold text-white">
            <i className="bi bi-bag-plus-fill me-1"></i> Ajouter abonnements
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="account" className="d-flex flex-row align-items-center fw-bold text-white">
            <i className="bi bi-person-circle me-1"></i> Account
          </Link>
        </li>
      </nav>
    </header>
  );
}
