import QRFormSection from "@/components/QRFormSection";
import QRTypeSelector from "@/components/QRTypeSelector";
import MainQRArea from "@/components/MainQRArea";
import { useState } from "react";
import { QR_TYPES } from "@/lib/constants";
import HeaderNav from "@/components/HeaderNav";
import QRCustomizeCard from "@/components/customizations/QRCustomizeCard";

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
    <>
      <HeaderNav />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {" "}
          <div className="flex flex-col gap-8">
            <QRTypeSelector
              selectedQRType={selectedQRType}
              setSelectedQRType={setSelectedQRType}
            />
            <QRFormSection
              selectedQRType={selectedQRType}
              onSubmit={handleFormSubmit}
            />
            <QRCustomizeCard />
          </div>
          <div className="h-fit">
            <MainQRArea qrValue={qrValue} />
          </div>{" "}
        </div>
      </main>
    </>
  );
};
