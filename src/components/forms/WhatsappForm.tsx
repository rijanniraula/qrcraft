import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const WhatsAppForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState<{
    phone: string;
    message: string;
  }>({
    phone: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone: phoneValue, message: messageValue } = formData;

    const whatsappRedirectUrl = `https://wa.me/${encodeURIComponent(
      phoneValue
    )}?body=${encodeURIComponent(messageValue)}`;

    onSubmit({ whatsapp: whatsappRedirectUrl });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-sm font-semibold">
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number to be included in the QR code"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
          required
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="message" className="text-sm font-semibold">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter message to be included in the QR code"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          required
          className="h-[100px]"
        />
      </div>

      <div className="flex items-center  gap-2">
        <Button type="submit">Generate QR</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setFormData({ phone: "", message: "" })}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default WhatsAppForm;
