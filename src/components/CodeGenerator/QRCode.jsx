import { useQRCode } from 'next-qrcode';

function QRCode({ colors, finalValue }) {
  const { Image } = useQRCode();

  return (
    <Image
      text={finalValue}
      options={{
        margin: 3,
        scale: 4,
        width: 256,
        color: {
          dark: `${colors.bg}FF`,
          light: `${colors.pattern}FF`
        }
      }}
    />
  );
}

export default QRCode;
