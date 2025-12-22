import { QrCode } from "lucide-react";

const HeaderNav = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center  gap-2">
        <QrCode className="size-10 text-white p-2 bg-linear-to-r from-primary to-primary/80 rounded-xl" />
        <div className="flex flex-col gap-0">
          <p className="text-lg font-semibold ">QR Craft</p>
          <span className="text-xs text-muted-foreground ">
            Create QR Codes Easily
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
