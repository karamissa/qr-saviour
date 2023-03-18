const LinkOption = ({ linkValue, setLinkValue }) => {
  const handleLinkChange = (event) => {
    setLinkValue(event.target.value);
  };

  return (
    <div>
      <label>
        Link:
        <input type="text" value={linkValue} onChange={handleLinkChange} />
      </label>
    </div>
  );
};

export default LinkOption;
