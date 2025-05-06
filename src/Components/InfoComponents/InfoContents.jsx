const InfoContents = ({ title, description, linkBtn }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{linkBtn}</span>
    </article>
  );
};

export default InfoContents;
