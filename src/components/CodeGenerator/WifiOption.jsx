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
    <div>
      <label>
        Wifi Name:
        <input
          type="text"
          value={wifiInfo.name}
          onChange={handleWifiNameChange}
        />
      </label>

      <label>
        Wifi Password:
        <input
          type="text"
          value={wifiInfo.password}
          onChange={handleWifiPasswordChange}
        />
      </label>
    </div>
  );
};

export default WifiOption;
