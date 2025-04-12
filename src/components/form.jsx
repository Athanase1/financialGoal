export default function Form({ handleConnecte, seConnete }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-12 col-md-8 col-lg-5 was-validated bg-light rounded p-4 d-flex flex-column">
          <h3 className="text-dark">
            {seConnete ? " Connectez-vous" : "Inscrivez-vous"}
          </h3>

          {!seConnete && (
            <>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom Complet:</label>
                <input type="text" className="form-control" id="nom" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" required />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="uname" className="form-label">Nom d'utilisateur:</label>
            <input type="text" className="form-control" id="uname" required />
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Mot de passe:</label>
            <input type="password" className="form-control" id="pwd" required />
          </div>

          <button type="submit" className="btn btn-success mt-2 ">
            {seConnete ? "Se connecter" : "Créer"}
          </button>

          <p className="text-dark m-2 text-center">
            {seConnete ? "Vous n'avez pas de compte?" : "Avez-vous un compte?"}{" "}
            <span className="text-primary fw-bold" onClick={handleConnecte} role="button">
              {seConnete ? "Créer un compte" : "Se connecter"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
