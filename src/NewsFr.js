import news from './images/news.jpg';
const LatestNewsFr = () => {
  return (
    <div className="latest-news container mt-5">
      <h2>Dernières nouvelles</h2>
      <div className="news-item">
        <h3>Nouveau clavier lancé !</h3>
        <p>Nous sommes ravis d'annoncer le lancement de notre dernier modèle de clavier mécanique, l'HyperStrike X7. Ce nouveau clavier est doté de commutateurs Cherry MX avancés, d'un rétroéclairage RVB personnalisable et d'un cadre en aluminium durable. Que vous soyez un joueur ou un dactylographe professionnel, l'HyperStrike X7 offre des performances et une fiabilité inégalées. Les précommandes sont désormais ouvertes et le clavier sera disponible en magasin à partir du mois prochain. Consultez notre site Web pour plus de détails et des offres de lancement spéciales !</p>
      </div>
      <div className="news-item">
        <h3>Événement à venir</h3>
        <p>Nous présenterons nos dernières innovations à la Tech Expo 2024, qui se tiendra du 15 au 17 août à San Francisco. Visitez notre stand pour découvrir nos nouveaux modèles de claviers mécaniques, y compris des démonstrations en direct et des cadeaux exclusifs. Notre équipe sera disponible pour discuter des fonctionnalités, répondre aux questions et proposer des essais pratiques. Ne manquez pas cette opportunité d'interagir avec nos produits et d'avoir un aperçu de ce qui va suivre dans le monde des claviers mécaniques. Pour plus d'informations, visitez le site Web Tech Expo ou contactez-nous directement.</p>
      </div>
      <div className="news-image">
        <img src={news} alt="news-image" className="news-image" />
      </div>
      
    </div>
  );
};

export default LatestNewsFr;
