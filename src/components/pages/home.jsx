import { useEffect, useState } from "react";
import { calculerMensuel, dataAbonnements } from "../../assets/abonnement";
import Tips from "../tips";
import Apropos from "./apropos";

export default function Home(){
    const [totalMensuel ,setTotal] = useState(0)
    const [bgBon, setBg] = useState(true)
   
    useEffect(() =>{
        const MontantMensuel = calculerMensuel().toFixed(2)
         setTotal(MontantMensuel)
    }, [dataAbonnements])
    useEffect(() => {
        if (totalMensuel > 100) {
          setBg(false);
        } else {
          setBg(true);
        }
      }, [totalMensuel]);
   
    return(
        <>
        <div className="container p-1">
            <div className="d-flex w-100 justify-content-between flex-wrap">
                <h1 className="display-1">Vos abonnements</h1>
                <h1>Total Mensuel:<span className={bgBon ? "badge bg-success": "badge bg-danger"}>{totalMensuel}</span> $</h1>
            </div>
          
          <div className="row">
                {dataAbonnements.map((abo, index) => (
                    <div className="col-lg-4 col-sm-12 col-md-6 mb-4" key={index}>
                        <div className="card h-100 bg-success">
                            <div className="card-body ">
                                <h5 className="card-title">{abo.nom}</h5>
                                <p className="card-text">prix: {abo.prix}</p>
                                <p className="card-text">État: {abo.actif ? "en cours" : "expiré"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Apropos/>
        <Tips/>

        </>
    )
}