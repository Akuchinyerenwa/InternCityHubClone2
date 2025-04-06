import "./HeroInput.css";


function HeroInput() {
  return (
    <div className="hero-input">
      <input type="email" name="hero-input-text" placeholder="Enter email address" />
      <button className="text-[red]">Sign Up</button>
    </div>
  )
}

export {HeroInput};