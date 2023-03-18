import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

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
    <div>
      <div>
        <label>
          Code Type:
          <select value={codeType} onChange={handleCodeTypeChange}>
            <option value="link">Link</option>
            <option value="wifi">Wifi</option>
          </select>
        </label>
      </div>

      {codeType === 'link' && (
        <LinkOption linkValue={linkValue} setLinkValue={setLinkValue} />
      )}

      {codeType === 'wifi' && (
        <WifiOption wifiInfo={wifiInfo} setWifiInfo={setWifiInfo} />
      )}

      <button onClick={triggerGeneration}>Generate</button>

      <div>
        {isFirstGeneration && <div>Your QR code will show up here :{')'}</div>}

        {!isFirstGeneration && (
          <QRCodeCanvas
            value={
              codeType === 'wifi'
                ? `WIFI:T:WPA;S:${finalWifiInfo.name};P:${finalWifiInfo.password};;`
                : finalLinkValue
            }
            size={256}
            includeMargin={true}
            level={'H'}
          />
        )}
      </div>

      {/* A copy of the canvas element with a much bigger resolution used for creating the PNG file */}
      <div className="hidden">
        {isFirstGeneration && <div>Your QR code will show up here :{')'}</div>}

        {!isFirstGeneration && (
          <QRCodeCanvas
            id="canvas"
            value={
              codeType === 'wifi'
                ? `WIFI:T:WPA;S:${finalWifiInfo.name};P:${finalWifiInfo.password};;`
                : finalLinkValue
            }
            size={1024}
            includeMargin={true}
            level={'H'}
          />
        )}
      </div>

      <DownloadButton />
    </div>
  );
};

export default CodeGenerator;
