import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const URLForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [url, setUrl] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ url });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="url" className="text-sm font-semibold">
          URL
        </Label>
        <Input
          type="text"
          id="url"
          name="url"
          placeholder="e.g https://www.google.com"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          required
        />
      </div>

      <div className="flex items-center  gap-2">
        <Button type="submit">Generate QR</Button>
        <Button type="button" variant="outline" onClick={() => setUrl("")}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default URLForm;
