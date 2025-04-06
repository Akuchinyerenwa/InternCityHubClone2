import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";


export default function App() {
  return (
    <div className="w-full bg-[#f0f8ff] my-0 mx-auto">
      <div className="bg-[url(/image/hero.png)] w-full h-[100vh] bg-center bg-cover bg-no-repeat">
        <Header />
        <Hero />
      </div>
    </div>
  );
}