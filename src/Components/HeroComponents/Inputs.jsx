const Inputs = ({ placeholder, btnItem }) => {
  return (
    <div className="inputs-root">
      <input type="email" name="email" id="email" placeholder={placeholder} />
      <input type="button" value={btnItem} />
    </div>
  );
};

export default Inputs;
