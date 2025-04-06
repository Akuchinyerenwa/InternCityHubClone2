import "./HeroInput.css";


function HeroInput({value}) {
  return (
    <div className="hero-input">
      <input type="email" name="hero-input-text" placeholder="Enter email address" />
      <button>{value}</button>
    </div>
  )
}

export {HeroInput};