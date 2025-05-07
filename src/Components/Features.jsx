import "./Features.css";
import FeaturesContents from "./FeaturesComponents/FeaturesContents";
import FeaturesArrayOfObjects from "./FeaturesComponents/FeaturesContent.js";

const Features = () => {
  const FeaturesObjectsContents = FeaturesArrayOfObjects.map((object) => {
    return (
      <FeaturesContents
        key={object.id}
        image={object.image.src}
        alt={object.image.alt}
        title={object.title}
        description={object.description}
      />
    );
  });

  return (
    <div className="features-root">
      <h4>Features</h4>
      <div className="features-section-container">
        {FeaturesObjectsContents}
      </div>
    </div>
  );
};

export default Features;
