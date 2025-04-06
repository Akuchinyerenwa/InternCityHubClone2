import { HeroInput } from "../HeroComponents/HeroInput";
import "./FeatureInput.css";


function FeatureInput() {
  return (
    <div className="feature-input">
      <p>Getting started takes less than a minute</p>
      <HeroInput value="Start Free Trail" />
    </div>
  )
}

export {FeatureInput};