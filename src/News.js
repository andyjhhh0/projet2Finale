import news from './images/news.jpg';
const LatestNews = () => {
  return (
    <div className="latest-news container mt-5">
      <h2>Latest News</h2>
      <div className="news-item">
        <h3>New Keyboard Launched!</h3>
        <p>We are excited to announce the launch of our latest mechanical keyboard model, the HyperStrike X7. This new keyboard features advanced Cherry MX switches, customizable RGB backlighting, and a durable aluminum frame. Whether you're a gamer or a professional typist, the HyperStrike X7 offers unparalleled performance and reliability. Pre-orders are now open, and the keyboard will be available in stores starting next month. Check out our website for more details and special launch offers!</p>
      </div>
      <div className="news-item">
        <h3>Upcoming Event</h3>
        <p>We will be showcasing our latest innovations at the Tech Expo 2024, happening from August 15-17 in San Francisco. Visit our booth to experience our newest mechanical keyboard models, including live demonstrations and exclusive giveaways. Our team will be available to discuss features, answer questions, and provide hands-on trials. Don't miss this opportunity to interact with our products and get a sneak peek at what's coming next in the world of mechanical keyboards. For more information, visit the Tech Expo website or contact us directly.</p>
      </div>
      <div className="news-image">
        <img src={news} alt="news-image" className="news-image" />
      </div>
      
    </div>
  );
};

export default LatestNews;
