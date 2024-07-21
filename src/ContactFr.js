const ContactUsFr = () => {
    return (
      <div className="contact-us container mt-5">
        <h2>Contactez-nous</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom: </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse e-mail: </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-danger">Envoyer</button>
        </form>
      </div>
    );
  };
  
  export default ContactUsFr;
  