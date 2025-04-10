import { useState } from "react";
import "../styles/account.css";
import Form from "../form";
export default function Account() {
  const [seConnete, setSeconnecte] = useState(true);
  function handleConnecte() {
    setSeconnecte(!seConnete);
  }
  return (
    <div className=" d-flex flex-row justify-content-end container1">
        <Form handleConnecte={handleConnecte} seConnete={seConnete}/>
    </div>
  );
}
