import { useNavigate } from "react-router-dom";
import Image from "../../../public/bg.jpeg";
import Image1 from "../../assets/img/astuces.jpg"
export default function Home() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/apropos");
  }
  return (
    <div className="container-fluid p-1 d-flex flex-column justify-content-between align-items-start over-flow-hidden">
          <div className="d-flex justify-content-end w-100">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-success"
          >
           Connectez-vous
          </button>
          </div>
      <div className=" d-flex flex-wrap flex-row col-12  mb-4 p-1 justify-content-between align-items-center mt-5">
        <div className="col-md-6 col-lg-6 col-12 p-1 d-flex flex-column align-items-start ">
          <p className="text-start">
            <strong className="fw-bold display-6">FinancialGoal</strong> est une
            application conçue pour vous aider à gérer facilement tous vos
            abonnements en un seul endroit.
          </p>
          <p className="text-start">
            Aujourd’hui, il est facile d’oublier combien d’abonnements on a —
            entre les services de streaming, les logiciels, les abonnements de
            sport ou encore les applications mobiles. Et ces oublis peuvent
            coûter cher sur le long terme.
          </p>
          <div className="d-flex justify-content-start w-100">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-success"
          >
            Savoir Plus
          </button>
          </div>
        
        </div>
        <div
          id=""
          className=" col-md-6 col-12 col-lg-6 p-1 d-flex flex-row justify-content-lg-end justify-content-sm-center justify-content-center align-items-center"
        >
          <img src={Image} class="img-fluid  rounded w-auto" alt="image 1" />
        </div>
      </div>
      <h1 className="h3 fw-bold w-100 ">Des astuces pour vous</h1>
      
       
        <div className="card p-2 col-12 col-lg-4 col-md-8">
        <h2 className=" fw-bold h1 text-center ">
          Astuces pour mieux gérer vos abonnements
          <i className="bi bi-magic text-success"></i>
        </h2>
             <img src={Image1} alt="image 1"  className="img-fluid rounded"/>
          
                <div className="d-flex flex-row flex-wrap justify-content-between w-100">
                     <p className="fs-6 fs-sm-1 fs-md-4 fs-lg-6 fs-xl-1 fw-bold me-1">Gestion des abonnements: </p>
                    <i className="bi bi-chevron-right fw-bold fs-6 fs-sm-1 fs-md-4 fs-lg-6 fs-xl-1"></i>
                </div>
                
           
             
      </div>
    </div>
  );
}
