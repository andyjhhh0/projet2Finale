import { Link } from "react-router-dom";

const Build = () => {
  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Build Your Own Keyboard</h2>
      <p>
        Use our interactive tool to customize and create a mechanical keyboard that perfectly fits your needs and preferences. Whether you're a passionate gamer or a dedicated typist, a personalized keyboard can enhance your typing experience.
      </p>
      <div className="customization-options">
        <h3>Customization Options</h3>
        <p>
          Our tool allows you to choose from a variety of options for each component of your keyboard:
        </p>
        <ul>
          <li>
            <strong>Switches:</strong> Choose the type of switch that matches your typing style. We offer linear, tactile, and clicky switches to suit all preferences.
          </li>
          <li>
            <strong>Size:</strong> Customize the size of your keyboard.
          </li>

        </ul>
      </div>
      <div className="advantages">
        <h3>Benefits of Customization</h3>
        <p>
          Building your own keyboard allows you to:
        </p>
        <ul>
          <li>Obtain a unique typing experience tailored to your specific needs.</li>
          <li>Select high-quality components to enhance durability and performance.</li>
        </ul>
      </div>
      <div className="steps">
        <h3>How It Works</h3>
        <p>
          Follow these simple steps to create your keyboard:
        </p>
        <ol>
          <li>Select your preferred switches.</li>
          <li>Choose your prefered keybaord size</li>
          <li>Visualize your customized keyboard with our tool and place your order.</li>
        </ol>
      </div>
      <div className="start-button">
        <li><Link to="/build2">Start Customizing</Link></li>
      </div>
    </div>
  );
};

export default Build;

