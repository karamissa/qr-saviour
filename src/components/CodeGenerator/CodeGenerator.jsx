import { useState, useRef } from 'react';

import QRCode from './QRCode';
import LinkOption from './LinkOption';
import WifiOption from './WifiOption';

const CodeGenerator = () => {
  const [codeType, setCodeType] = useState('link');
  const [isGenerated, setIsGenerated] = useState(false);

  const [linkValue, setLinkValue] = useState('');
  const [wifiInfo, setWifiInfo] = useState({ name: '', password: '' });

  const [finalValue, setFinalValue] = useState('');

  const [colors, setColors] = useState({ pattern: '#ffffff', bg: '#000000' });

  const linkRef = useRef(null);

  const triggerGeneration = () => {
    if (codeType === 'link') {
      setFinalValue(linkValue);
    } else if (codeType === 'wifi') {
      setFinalValue(`WIFI:S:${wifiInfo.name};T:WPA;P:${wifiInfo.password};;`);
    }

    if (!isGenerated) {
      setIsGenerated(true);
    }
  };

  const triggerDownload = () => {
    const container = document.querySelector('#qr-code');
    const imgSrc = container.querySelector('img').src;

    linkRef.current.href = imgSrc;
    linkRef.current.click();
  };

  return (
    <div className="w-full flex flex-col md:items-center px-8 gap-4">
      <div
        id="qr-code"
        className="h-64 w-64 p-4 self-center flex justify-center items-center border rounded-md"
      >
        {!isGenerated && (
          <p className="text-center">Your QR code will appear here :{')'}</p>
        )}

        {isGenerated && <QRCode colors={colors} finalValue={finalValue} />}
      </div>

      <div>
        <div className="flex flex-col gap-4 pb-4 items-center">
          <div className="flex justify-center items-center gap-4">
            <label className="label" htmlFor="pattern-color">
              Pattern Color:
            </label>
            <input
              className="rounded-sm"
              type="color"
              id="pattern-color"
              value={colors.pattern}
              onInput={(e) => setColors({ ...colors, pattern: e.target.value })}
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <label className="label" htmlFor="bg-color">
              Background Color:
            </label>
            <input
              className="rounded-sm"
              type="color"
              id="bg-color"
              value={colors.bg}
              onInput={(e) => setColors({ ...colors, bg: e.target.value })}
            />
          </div>
        </div>

        <div className="pb-4">
          <label className="select-label">Code Type:</label>
          <select
            className="select-input"
            value={codeType}
            onChange={(e) => setCodeType(e.target.value)}
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

      <button
        className="btn"
        disabled={finalValue === '' ? true : false}
        onClick={triggerDownload}
      >
        Download
      </button>
      <a href="#" ref={linkRef} className="hidden" download="QR Code.png">
        Download
      </a>
    </div>
  );
};

export default CodeGenerator;
