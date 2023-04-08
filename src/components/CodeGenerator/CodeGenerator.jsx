import { useState } from 'react';

import LinkOption from './LinkOption';
import WifiOption from './WifiOption';
import DownloadButton from './DownloadButton';

const CodeGenerator = () => {
  const [codeType, setCodeType] = useState('link');
  const [isFirstGeneration, setIsFirstGeneration] = useState(true);

  const [linkValue, setLinkValue] = useState('');
  const [wifiInfo, setWifiInfo] = useState({ name: '', password: '' });

  const [finalLinkValue, setFinalLinkValue] = useState('');
  const [finalWifiInfo, setFinalWifiInfo] = useState({
    name: '',
    password: ''
  });

  const handleCodeTypeChange = (event) => {
    setIsFirstGeneration(true);
    setCodeType(event.target.value);
  };

  const triggerGeneration = () => {
    if (isFirstGeneration) {
      setIsFirstGeneration(false);
    }

    if (codeType === 'link') {
      setFinalLinkValue(linkValue);
    } else if (codeType === 'wifi') {
      setFinalWifiInfo(wifiInfo);
    }
  };

  return (
    <div className="w-full flex flex-col md:items-center px-8 gap-4">
      <div className="h-64 w-64 p-4 self-center flex justify-center items-center border rounded-md">
        <p className=" text-center">Your QR code will appear here :{')'}</p>
      </div>

      <div>
        <div className="pb-4">
          <label className="select-label">Code Type:</label>
          <select
            className="select-input"
            value={codeType}
            onChange={handleCodeTypeChange}
          >
            <option value="link">Link</option>
            <option value="wifi">Wifi</option>
          </select>
        </div>

        {codeType === 'link' && (
          <LinkOption linkValue={linkValue} setLinkValue={setLinkValue} />
        )}

        {codeType === 'wifi' && (
          <WifiOption wifiInfo={wifiInfo} setWifiInfo={setWifiInfo} />
        )}
      </div>

      <button className="btn" onClick={triggerGeneration}>
        Generate
      </button>

      <DownloadButton />
    </div>
  );
};

export default CodeGenerator;
