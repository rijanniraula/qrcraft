import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PhoneForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [phone, setPhone] = useState<string>("");

  const generatePhoneRedirectUrl = () => {
    const phoneNumber = encodeURIComponent(phone.replace(/[^0-9]/g, ""));
    const phoneRedirectUrl = `tel:${phoneNumber}`;
    onSubmit({ phone: phoneRedirectUrl });
  };

  useEffect(() => {
    generatePhoneRedirectUrl();
  }, [phone]);

  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-sm font-semibold">
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number to be included in the QR code"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
      </div>
    </form>
  );
};

export default PhoneForm;
