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
      title={
        <span className="text-sm text-muted-foreground">QR Type Selector</span>
      }
      className="w-full shadow-xs border-none p-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {QR_TYPES.map((type) => (
          <Button
            key={type.id}
            variant="outline"
            className={cn(
              "m-0 flex flex-col items-center justify-center h-fit gap-1.5 p-3 rounded-xl transition-all duration-200 bg-white hover:bg-primary/5 hover:border-primary text-muted-foreground hover:text-muted-foreground",
              selectedQRType?.id === type.id &&
                "bg-primary/10 border border-primary text-primary"
            )}
            onClick={() => setSelectedQRType(type)}
          >
            <type.icon className="size-5" />
            <h1 className="text-xs font-medium">{type.name}</h1>
          </Button>
        ))}
      </div>
    </CardCustom>
  );
};

export default QRTypeSelector;
