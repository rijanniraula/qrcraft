import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const TextForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [text, setText] = useState<string>("");

  const generateTextRedirectUrl = () => {
    onSubmit({ text });
  };

  useEffect(() => {
    generateTextRedirectUrl();
  }, [text]);

  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="text" className="text-sm font-semibold">
          Text
        </Label>
        <Input
          type="text"
          id="text"
          name="text"
          placeholder="Enter any text to be included in the QR code"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
      </div>
    </form>
  );
};

export default TextForm;
