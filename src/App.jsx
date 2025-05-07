import "./App.css";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";

export default function App() {
  return (
    <>
      <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
      <Info />
      <Features />
      <Contact />
    </>
  );
}
