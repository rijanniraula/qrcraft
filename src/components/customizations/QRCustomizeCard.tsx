import { CardCustom } from "../common/CardCustom";

const QRCustomizeCard = () => {
  return (
    <CardCustom
      title={
        <span className="text-sm text-muted-foreground">Customize Your QR</span>
      }
      className="w-full shadow-xs border-none p-4"
    >
      QRCustomizeCard
    </CardCustom>
  );
};

export default QRCustomizeCard;
