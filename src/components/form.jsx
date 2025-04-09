
export default function Form({handleConnecte, seConnete}) {
 
  return (
    <form action="/action_page.php" className="was-validated bg-success rounded mx-lg-3 mx-md-3 mx-sm-0 px-5 align-content-center justify-content-center align-items-center">
      <h3 className="text-white">
        {seConnete ? " Connectez vous" : "Inscrivez-vous"}
      </h3>
      {!seConnete && (
        <div className="mb-3 mt-3">
          <label htmlFor="nom" class="form-label">
            Nom Complet:
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Votre nom"
            name="nom"
            required
          />
          <div className="valid-feedback">Valide.</div>
          <div className="invalid-feedback">Cette case est obligatoire.</div>
        </div>
      )}
      {!seConnete && (
        <div class="mb-3 mt-3">
          <label htmlFor="email" class="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <div class="valid-feedback">Valide.</div>
          <div class="invalid-feedback">Cette case est obligatoire.</div>
        </div>
      )}
      <div className="mb-3 mt-3">
        <label htmlFor="uname" class="form-label">
          Nom d'utilisateur:
        </label>
        <input
          type="text"
          className="form-control"
          id="uname"
          placeholder="Enter username"
          name="uname"
          required
        />
        <div className="valid-feedback">Valide.</div>
        <div className="invalid-feedback">Cette case est obligatoire.</div>
      </div>
      <div class="mb-3">
        <label htmlFor="pwd" class="form-label">
          Mot de passe:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          required
        />
        <div className="valid-feedback">Valide.</div>
        <div className="invalid-feedback">Cette case est obligatoire.</div>
      </div>

      <button type="submit" className="btn btn-success w-100">
        {seConnete ? "Se connecter" : "Créer"}
      </button>
      <p className="text-white">
        {seConnete ? "Vous n'avez pas de compte?" : "Avez-vous un compte?"}{" "}
        <span className="text-dark" onClick={handleConnecte}>
          {seConnete ? "créez-vous un compte" : "Se connecter"}
        </span>
      </p>
    </form>
  );
}
