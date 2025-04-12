export default function Form({ handleConnecte, seConnete }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <form className="col-12 col-md-8 col-lg-3 was-validated bg-light rounded p-4 d-flex flex-column shadow">
          <h3 className="text-dark fw-bold">
            {seConnete ? " Connectez-vous" : "Inscrivez-vous"}
          </h3>

          {!seConnete && (
            <>
              <div className="mb-3 w-100">
                <label htmlFor="nom" className="form-label fw-bold">Nom:</label>
                <input type="text" className="form-control fw-bold" id="nom" required />
              </div>

              <div className="mb-3 w-100">
                <label htmlFor="email" className="form-label fw-bold">Email:</label>
                <input type="email" className="form-control" id="email" required />
              </div>
            </>
          )}

          <div className="mb-3 w-100">
            <label htmlFor="uname" className="form-label fw-bold">Nom d'utilisateur:</label>
            <input type="text" className="form-control" id="uname" required />
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="pwd" className="form-label fw-bold">Mot de passe:</label>
            <input type="password" className="form-control" id="pwd" required />
          </div>

          <button type="submit" className="btn btn-success mt-2 w-100 fw-bold">
            {seConnete ? "Se connecter" : "Créer"}
          </button>

          <p className="text-dark m-2 text-center w-100 fw-bold">
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
