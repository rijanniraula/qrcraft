import { Upload } from "lucide-react";

const LogoUploader = ({
  logoUrl,
  setLogoUrl,
}: {
  logoUrl: string | null;
  setLogoUrl: (logoUrl: string | null) => void;
}) => {
  return (
    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
      <input
        type="file"
        onChange={(e) => setLogoUrl(e.target.files?.[0]?.name ?? null)}
        className="hidden"
        id="logo-upload"
      />
      <label htmlFor="logo-upload" className="cursor-pointer">
        {logoUrl ? (
          <div className="space-y-2">
            <img
              src={logoUrl}
              alt="Logo preview"
              className="w-16 h-16 mx-auto object-contain rounded-lg"
            />
            <p className="text-xs text-muted-foreground">Click to replace</p>
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
