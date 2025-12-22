import { QRCodeSVG } from "qrcode.react";
import { CardCustom } from "./common/CardCustom";
import { CopyIcon, DownloadIcon, ScanQrCode } from "lucide-react";
import { Button } from "./ui/button";

const MainQRArea = ({ qrValue = "" }: { qrValue: string }) => {
  return (
    <CardCustom
      title={
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <ScanQrCode className="size-4" /> QR Preview
        </span>
      }
      className="w-full flex items-center justify-center shadow-xs border-none p-4"
    >
      <QRCodeSVG
        value={qrValue}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin
      />

      <div className="flex gap-2 ">
        <Button variant="default" className="text-xs hover:bg-primary/80">
          <DownloadIcon className="size-4" /> PNG
        </Button>
        <Button
          variant="outline"
          className="text-xs hover:bg-primary/15  hover:text-primary"
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
