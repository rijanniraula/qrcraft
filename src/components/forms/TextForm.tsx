import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const TextForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [text, setText] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ text });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
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

      <div className="flex items-center  gap-2">
        <Button type="submit">Generate QR</Button>
        <Button type="button" variant="outline" onClick={() => setText("")}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default TextForm;
