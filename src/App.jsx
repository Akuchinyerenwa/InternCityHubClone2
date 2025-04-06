/* import "./App.css"; */
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";


export default function App() {
  return (
    <div className="w-full bg-[#f0f8ff]">
      <div className="bg-[url(/image/hero.png)] w-full h-[100vh] bg-bottom bg-cover bg-no-repeat">
        <Header />
        <Hero />
      </div>

      <Info />
    </div>
  );
}