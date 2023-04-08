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
      <label htmlFor="wifi-name" class="select-label">
        Wifi Name:
      </label>
      <input
        id="wifi-name"
        class="select-input"
        type="text"
        value={wifiInfo.name}
        onChange={handleWifiNameChange}
      />

      <label htmlFor="wifi-password" class="select-label">
        Wifi Password:
      </label>
      <input
        id="wifi-password"
        class="select-input"
        type="text"
        value={wifiInfo.password}
        onChange={handleWifiPasswordChange}
      />
    </div>
  );
};

export default WifiOption;
