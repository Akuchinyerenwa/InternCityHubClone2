import "./App.css";
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
    </>
  );
}
