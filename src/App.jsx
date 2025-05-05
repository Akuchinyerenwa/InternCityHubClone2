import heroImage from "./Images/hero.png";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <>
      <div className="header-hero-background-image">
        <img src={heroImage} alt="Background Image" />
        <Header />
        <Hero />
      </div>
    </>
  );
}
