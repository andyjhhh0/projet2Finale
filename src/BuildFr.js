import { Link } from "react-router-dom";

const BuildFr = () => {
  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Construis Ton Propre Clavier</h2>
      <p>
        Utilise notre outil interactif pour personnaliser et créer un clavier mécanique qui correspond parfaitement à tes besoins et préférences. Que tu sois un joueur passionné ou un dactylographe assidu, un clavier personnalisé peut améliorer ton expérience de frappe.
      </p>
      <div className="customization-options">
        <h3>Options de Personnalisation</h3>
        <p>
          Notre outil te permet de choisir parmi une variété d'options pour chaque composant de ton clavier :
        </p>
        <ul>
          <li>
            <strong>Switches :</strong> Choisis le type de switch qui correspond à ton style de frappe. Nous proposons des switches linéaires, tactiles et clicky pour répondre à toutes les préférences.
          </li>
          <li>
            <strong>Taille :</strong> Personnalise la taille de ton clavier.
          </li>
        </ul>
      </div>
      <div className="advantages">
        <h3>Avantages de la Personnalisation</h3>
        <p>
          Construire ton propre clavier te permet de :
        </p>
        <ul>
          <li>Obtenir une expérience de frappe unique adaptée à tes besoins spécifiques.</li>
          <li>Choisir des composants de haute qualité pour améliorer la durabilité et la performance.</li>
        </ul>
      </div>
      <div className="steps">
        <h3>Comment Ça Marche</h3>
        <p>
          Suis ces étapes simples pour créer ton clavier :
        </p>
        <ol>
          <li>Choisis tes switches préférés.</li>
          <li>Sélectionne la taille de clavier que tu préfères.</li>
          <li>Visualise ton clavier personnalisé avec notre outil et passe ta commande.</li>
        </ol>
      </div>
      <div className="start-button">
        <li><Link to="/build2">Commencer la Personnalisation</Link></li>
      </div>
    </div>
  );
};

export default BuildFr;
