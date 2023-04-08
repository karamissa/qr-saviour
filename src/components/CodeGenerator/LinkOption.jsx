const LinkOption = ({ linkValue, setLinkValue }) => {
  const handleLinkChange = (event) => {
    setLinkValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="link" className="select-label">
        Link:
      </label>
      <input
        id="link"
        className="select-input"
        type="text"
        value={linkValue}
        onChange={handleLinkChange}
      />
    </>
  );
};

export default LinkOption;
