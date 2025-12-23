import { QR_TYPES } from "@/lib/constants";
import { QR_TYPE_MAP } from "@/lib/constants";
import { useMemo } from "react";
import { CardCustom } from "./common/CardCustom";
import { TextIcon } from "lucide-react";

const QRFormSection = ({
  selectedQRType,
  onSubmit,
}: {
  selectedQRType: (typeof QR_TYPES)[number];
  onSubmit: (data: any) => void;
}) => {
  const FormComponent = useMemo(() => {
    return QR_TYPE_MAP[selectedQRType.value as keyof typeof QR_TYPE_MAP];
  }, [selectedQRType.value]);

  return (
    <CardCustom
      title={
        <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1">
          <TextIcon size={16} />
          Content
        </span>
      }
      className="shadow-xs border-none p-4"
    >
      <FormComponent onSubmit={onSubmit} />
    </CardCustom>
  );
};

export default QRFormSection;
