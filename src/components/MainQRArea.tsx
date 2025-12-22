import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { CardCustom } from "./common/CardCustom";
import { CopyIcon, DownloadIcon, ScanQrCode } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const MainQRArea = ({ qrValue = "" }: { qrValue: string }) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    console.log(qrCodeRef.current);
    const canvas = qrCodeRef.current?.querySelector("canvas");
    if (!canvas) {
      console.log("no canvas");
      return;
    }

    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png";
    link.click();
  };

  const downloadSVG = () => {
    const svg = qrCodeRef.current?.querySelector("svg");
    if (!svg) {
      console.log("no svg");
      return;
    }

    // Serialize the SVG XML
    const svgStr = new XMLSerializer().serializeToString(svg);

    // Create a Blob
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });

    // Generate a URL
    const url = URL.createObjectURL(blob);

    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.svg";
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <CardCustom
      title={
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <ScanQrCode className="size-4" /> QR Preview
        </span>
      }
      className="w-full flex items-center justify-center shadow-xs border-none p-4"
    >
      <QRCodeCanvas
        value={qrValue}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin
      />
      <div ref={qrCodeRef} className="hidden">
        <QRCodeCanvas
          value={qrValue}
          size={2048}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin
        />
        <QRCodeSVG
          value={qrValue}
          size={2048}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin
        />
      </div>
      <div className="flex gap-2 ">
        <Button
          variant="default"
          className="text-xs hover:bg-primary/80"
          onClick={downloadQR}
        >
          <DownloadIcon className="size-4" /> PNG
        </Button>
        <Button
          variant="outline"
          className="text-xs hover:bg-primary/15  hover:text-primary"
          onClick={downloadSVG}
        >
          <DownloadIcon className="size-4" /> SVG
        </Button>
        <Button
          variant="outline"
          className="text-xs hover:bg-primary/15  hover:text-primary"
        >
          <CopyIcon className="size-4" /> Copy
        </Button>
      </div>
    </CardCustom>
  );
};

export default MainQRArea;
