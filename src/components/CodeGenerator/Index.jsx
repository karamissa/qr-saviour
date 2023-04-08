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
    <div className="flex flex-col gap-4">
      {isFirstGeneration && (
        <div>
          <QRCodeCanvas
            value="https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=477&q=80"
            size={256}
            includeMargin={true}
            level={'H'}
          />
        </div>
      )}

      <div>
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

      <div className="pl-4">
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
      </div>

      <button onClick={triggerGeneration}>Generate</button>

      <DownloadButton />
    </div>
  );
};

export default CodeGenerator;
