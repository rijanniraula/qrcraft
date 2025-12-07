import { QRCodeSVG } from "qrcode.react";

const MainQRArea = ({ qrValue = "" }: { qrValue: string }) => {
  return (
    <QRCodeSVG
      value={qrValue}
      size={256}
      bgColor="#ffffff"
      fgColor="#000000"
      level="H"
      includeMargin
    />
  );
};

export default MainQRArea;
