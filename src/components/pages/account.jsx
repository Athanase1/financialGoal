import { useState } from "react";
import "../styles/account.css";
import Form from "../form";
export default function Account() {
  const [seConnete, setSeconnecte] = useState(true);
  function handleConnecte() {
    setSeconnecte(!seConnete);
  }
  return (
    <div className="container1 d-flex flex-row justify-content-end">
        <Form handleConnecte={handleConnecte} seConnete={seConnete}/>
    </div>
  );
}
