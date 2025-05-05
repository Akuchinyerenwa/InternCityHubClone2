import "./Hero.css";
import Inputs from "./HeroComponents/Inputs";

const Hero = () => {
  return (
    <section className="hero-root">
      <h1>
        The Future Belongs to Those Who Plan as Though Tomorrow is Already Here
      </h1>
      <p>Requests, Assets & Expense Management all on one platform.</p>
      <Inputs placeholder="Enter email address" btnItem="Sign Up" />
    </section>
  );
};

export default Hero;
