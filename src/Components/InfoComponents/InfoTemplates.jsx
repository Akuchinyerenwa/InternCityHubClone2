import "./InfoTemplates.css";
import About from "./InfoTemplatesComponents/About";
import { AboutImg } from "./InfoTemplatesComponents/AboutImg";
import { HowItWork } from "./InfoTemplatesComponents/HowItWork";
import { SettingsImg } from "./InfoTemplatesComponents/SettingsImg";


function InfoTemplates() {
  return (
    <div className="info-templates">
      <div className="template-one">
        <About />
        <AboutImg />
      </div>
      <div className="template-two">
        <SettingsImg />
        <HowItWork />
      </div>
    </div>
  )
}

export default InfoTemplates;