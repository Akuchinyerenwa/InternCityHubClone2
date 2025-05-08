const ContactContents = ({ title, contents }) => {
  return (
    <section>
      <h5>{title}</h5>
      <>{contents}</>
    </section>
  );
};

export default ContactContents;
