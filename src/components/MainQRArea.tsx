import { QRCodeSVG } from "qrcode.react";
import { CardCustom } from "./common/CardCustom";
import { CopyIcon, DownloadIcon, ScanQrCode } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { toPng } from "html-to-image";

const MainQRArea = ({
  qrValue = "",
  qrCustomizations = {},
}: {
  qrValue: string;
  qrCustomizations: any;
}) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const downloadPNG = async () => {
    if (!qrCodeRef.current) return;

    try {
      const dataUrl = await toPng(qrCodeRef.current, {
        pixelRatio: 3,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "qrcode.png";
      link.click();
    } catch (error) {
      console.error("Failed to generate PNG:", error);
    }
  };

  const downloadSVG = () => {
    const svg = qrCodeRef.current?.querySelector("svg");
    if (!svg) return;

    const svgStr = new XMLSerializer().serializeToString(svg);

    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.svg";
    link.click();

    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    if (!qrCodeRef.current) return;
    try {
      const dataUrl = await toPng(qrCodeRef.current, { pixelRatio: 3 });

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);

      console.log("QR copied to clipboard");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  console.log({ qrCustomizations });

  return (
    <CardCustom
      title={
        <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1">
          <ScanQrCode size={16} /> QR Preview
        </span>
      }
      className="w-full flex items-center justify-center shadow-xs border-none p-4 "
    >
      <div
        className={`space-y-4 w-full flex flex-col items-center justify-center gap-8 overflow-visible `}
      >
        <div
          className={`${
            qrCustomizations.style.borderWidth > 0
              ? "border-none"
              : "border border-dashed"
          }`}
          style={{
            borderRadius: qrCustomizations.style.borderRadius,
          }}
        >
          <div
            ref={qrCodeRef}
            className={`relative flex flex-col items-center justify-center border `}
            style={{
              backgroundColor: qrCustomizations.color.bgColor,
              borderRadius: qrCustomizations.style.borderRadius,
              padding: Math.max(qrCustomizations.style.padding, 32),
              borderColor: qrCustomizations.style.borderColor,
              borderWidth: Math.max(qrCustomizations.style.borderWidth),
            }}
          >
            {qrCustomizations?.label?.topText && (
              <h1
                className="text-center wrap-break-word w-[256px] pb-8 whitespace-pre-line text-xl font-semibold"
                style={{ color: qrCustomizations.label.topTextColor }}
              >
                {qrCustomizations?.label?.topText}
              </h1>
            )}

            {qrCustomizations?.logo && (
              <div className="absolute w-25 h-25 bg-white p-3 rounded-2xl">
                <img
                  src={qrCustomizations.logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <QRCodeSVG
              value={qrValue}
              size={256}
              bgColor={qrCustomizations.color.bgColor}
              fgColor={qrCustomizations.color.fgColor}
              level="H"
              marginSize={0}
            />
            {qrCustomizations?.label?.bottomText && (
              <h1
                className="text-center wrap-break-word w-[256px] pt-8 whitespace-pre-line text-lg font-normal"
                style={{ color: qrCustomizations.label.bottomTextColor }}
              >
                {qrCustomizations?.label?.bottomText}
              </h1>
            )}
          </div>
        </div>
        <div className="flex gap-2 ">
          <Button
            variant="default"
            className="text-xs hover:bg-primary/80"
            onClick={downloadPNG}
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
            onClick={copyToClipboard}
          >
            <CopyIcon className="size-4" /> Copy
          </Button>
        </div>
      </div>
    </CardCustom>
  );
};

export default MainQRArea;
