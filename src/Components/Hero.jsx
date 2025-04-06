import "./Hero.css";
import { HeroInput } from "./HeroComponents/HeroInput";


function Hero() {
  return (
    <div className="hero-root">
      <h1>
        The Future Belongs to Those Who Plan as Though
        <br />Tomorrow is Already Here.
      </h1>
      
      <p>Request, Assets & Expense Management all on one platform.</p>

      <HeroInput value="Sign Up" />
    </div>
  )
}

export default Hero;