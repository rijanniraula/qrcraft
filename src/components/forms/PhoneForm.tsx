import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PhoneForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [phone, setPhone] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = phone.replace(/[^0-9]/g, "");
    const phoneRedirectUrl = `tel:${phoneNumber}`;
    onSubmit({ phone: phoneRedirectUrl });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-sm font-semibold">
          Phone
        </Label>
        <Input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter phone number to be included in the QR code"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
      </div>

      <div className="flex items-center  gap-2">
        <Button type="submit">Generate QR</Button>
        <Button type="button" variant="outline" onClick={() => setPhone("")}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default PhoneForm;
