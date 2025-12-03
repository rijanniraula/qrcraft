import { QR_TYPES } from "@/lib/constants";
import { QR_TYPE_MAP } from "@/lib/constants";
import { useMemo } from "react";

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
    <div className="space-y-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold flex items-center gap-2 bg-card pr-4 shadow-xs ">
          <div className="bg-accent  p-3">
            <selectedQRType.icon className="size-5 text-white" />
          </div>
          Fill the required fields to generate your QR code
        </h1>
      </div>
      <FormComponent onSubmit={onSubmit} />
    </div>
  );
};

export default QRFormSection;
