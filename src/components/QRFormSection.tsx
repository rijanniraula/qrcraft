import { QR_TYPES } from "@/lib/constants";

const QRFormSection = ({
  selectedQRType,
}: {
  selectedQRType: (typeof QR_TYPES)[number] | null;
}) => {
  return (
    <div>
      <div>
        <h1>{selectedQRType?.name}</h1>
      </div>
    </div>
  );
};

export default QRFormSection;
