import { useRef } from 'react';

function DownloadButton() {
  const linkRef = useRef(null);

  const handleDownloadClick = () => {
    const canvasElement = document.getElementById('canvas');
    // Get the data URL of the canvas as a PNG or SVG image
    const dataUrl = canvasElement
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');

    // Set the data URL as the href of the download link and click the link to download the image
    linkRef.current.href = dataUrl;
    linkRef.current.click();
  };

  return (
    <div>
      <button onClick={handleDownloadClick}>Download PNG</button>

      <a href="#" ref={linkRef} download={`QR Code.png`} className="hidden">
        Download PNG
      </a>
    </div>
  );
}

export default DownloadButton;
