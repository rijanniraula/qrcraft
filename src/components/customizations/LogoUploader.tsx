import { TrashIcon, Upload } from "lucide-react";
import { Button } from "../ui/button";

const LogoUploader = ({
  logoUrl,
  setLogoUrl,
}: {
  logoUrl: string | null;
  setLogoUrl: (logoUrl: string | null) => void;
}) => {
  return (
    <div className="border-2 border-dashed border-border rounded-xl p-8 mt-6 text-center hover:border-primary/50 transition-colors">
      <input
        type="file"
        onChange={(e) =>
          setLogoUrl(URL.createObjectURL(e.target.files?.[0] as Blob) ?? null)
        }
        className="hidden"
        id="logo-upload"
      />
      <label htmlFor="logo-upload" className="cursor-pointer">
        {logoUrl ? (
          <div className="space-y-2 relative flex flex-col items-center justify-center">
            <img
              src={logoUrl}
              alt="Logo preview"
              className="w-32 h-32 mx-auto object-contain rounded-lg border"
            />
            <p className="text-xs text-muted-foreground w-fit">
              Click to replace
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-destructive! hover:bg-destructive/10 absolute -top-6 -right-6"
              onClick={() => setLogoUrl(null)}
            >
              <TrashIcon className="w-4 h-4" />
              Remove
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload logo
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG, SVG</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default LogoUploader;
