const FeaturesContents = ({ image, alt, title, description }) => {
  return (
    <section>
      <img src={image} alt={alt} />
      <h5>{title}</h5>
      <p>{description}</p>
    </section>
  );
};

export default FeaturesContents;
