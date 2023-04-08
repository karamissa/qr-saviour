const WifiOption = ({ wifiInfo, setWifiInfo }) => {
  const handleWifiNameChange = (event) => {
    setWifiInfo({
      ...wifiInfo,
      name: event.target.value
    });
  };

  const handleWifiPasswordChange = (event) => {
    setWifiInfo({
      ...wifiInfo,
      password: event.target.value
    });
  };

  return (
    <>
      <label htmlFor="wifi-name" className="select-label">
        Wifi Name:
      </label>
      <input
        id="wifi-name"
        className="select-input mb-4"
        type="text"
        value={wifiInfo.name}
        onChange={handleWifiNameChange}
      />

      <label htmlFor="wifi-password" className="select-label">
        Wifi Password:
      </label>
      <input
        id="wifi-password"
        className="select-input"
        type="text"
        value={wifiInfo.password}
        onChange={handleWifiPasswordChange}
      />
    </>
  );
};

export default WifiOption;
