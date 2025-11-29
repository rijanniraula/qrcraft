import { QR_TYPES } from "@/lib/constants";

const QRFormSection = ({
  selectedQRType,
}: {
  selectedQRType: (typeof QR_TYPES)[number];
}) => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-bold flex items-center gap-2 bg-card pr-4 shadow-sm">
          <div className="bg-accent  p-3">
            <selectedQRType.icon className="size-5 text-white" />
          </div>
          Fill the required fields to generate your QR code
        </h1>
      </div>
    </div>
  );
};

export default QRFormSection;
