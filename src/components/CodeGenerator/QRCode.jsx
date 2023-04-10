import { useQRCode } from 'next-qrcode';

const QRCode = ({ colors, finalValue }) => {
  const { Image } = useQRCode();

  return (
    <Image
      text={finalValue}
      options={{
        margin: 3,
        scale: 4,
        width: 256,
        color: {
          dark: `${colors.pattern}FF`,
          light: `${colors.bg}FF`
        }
      }}
    />
  );
};

export default QRCode;
