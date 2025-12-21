import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const URLForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [url, setUrl] = useState<string>("");

  const generateURLRedirectUrl = () => {
    onSubmit({ url });
  };

  useEffect(() => {
    generateURLRedirectUrl();
  }, [url]);

  return (
    <form className="space-y-4">
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
    </form>
  );
};

export default URLForm;
