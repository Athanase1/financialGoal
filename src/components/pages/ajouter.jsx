export default function Ajouter() {
  return (
    <div className="container">
      <form className="row g-2 mt-5">
        <div className="col-md-6 col-lg-4">
          <label htmlFor="nomAbonne" className="form-label fw-bold">
            Nom de l'abonnement
          </label>
          <input type="text" className="form-control fw-bold" id="nomAbonne" />
        </div>

        <div className="col-md-4">
          <label htmlFor="FreqAbon" className="form-label fw-bold">
            Fréquence
          </label>
          <select id="FreqAbon" className="form-select fw-bold">
            <option value="mensuel">mensuel</option>
            <option value="annuel">annuel</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="dateDebut" className="form-label fw-bold">
            Date de début
          </label>
          <input type="date" className="form-control fw-bold" id="dateDebut" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success fw-bold ">
            Créer
          </button>
        </div>
      </form>
    </div>
  );
}
