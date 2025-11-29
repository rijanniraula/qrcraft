import { QR_TYPES } from "@/lib/constants";
import { CardCustom } from "./common/CardCustom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const QRTypeSelector = ({
  selectedQRType,
  setSelectedQRType,
}: {
  selectedQRType: (typeof QR_TYPES)[number];
  setSelectedQRType: (type: (typeof QR_TYPES)[number]) => void;
}) => {
  return (
    <CardCustom
      title=""
      description=""
      className="w-full max-w-6xl p-4 border-accent bg-accent/20"
    >
      <div className="flex items-center justify-center gap-3">
        {QR_TYPES.map((type) => (
          <Button
            key={type.id}
            variant="ghost"
            className={cn(
              "flex flex-col items-center justify-center gap-2 h-fit w-22 text-white cursor-pointer ",
              selectedQRType?.id === type.id && "bg-accent/60 scale-110"
            )}
            onClick={() => setSelectedQRType(type)}
          >
            <type.icon className="size-6" />
            <h1 className="text-xs font-medium">{type.name}</h1>
          </Button>
        ))}
      </div>
    </CardCustom>
  );
};

export default QRTypeSelector;
