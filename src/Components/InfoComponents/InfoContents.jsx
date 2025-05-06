const InfoContents = ({ title, description, linkBtn }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{linkBtn}</span>
    </article>
  );
};

const InfoImages = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default InfoContents;
export { InfoImages };
