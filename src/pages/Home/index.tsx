import { CardCustom } from "@/components/common/CardCustom";
import QRFormSection from "@/components/QRFormSection";
import QRTypeSelector from "@/components/QRTypeSelector";
import MainQRArea from "@/components/MainQRArea";
import { useState } from "react";
import { QR_TYPES } from "@/lib/constants";

export const HomePage = () => {
  const [selectedQRType, setSelectedQRType] = useState<
    (typeof QR_TYPES)[number]
  >(QR_TYPES[0]);

  const [qrValue, setQrValue] = useState<string>("");

  const handleFormSubmit = (data: any) => {
    console.log(data);
    setQrValue(data[selectedQRType.value]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-700">
      <QRTypeSelector
        selectedQRType={selectedQRType}
        setSelectedQRType={setSelectedQRType}
      />
      <CardCustom className="w-full max-w-6xl m-4 rounded-md bg-gray-50">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <QRFormSection
              selectedQRType={selectedQRType}
              onSubmit={handleFormSubmit}
            />
            <MainQRArea qrValue={qrValue} />
          </div>
        </div>
      </CardCustom>
    </div>
  );
};
