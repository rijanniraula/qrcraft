import { cn } from "@/lib/utils";
import { CardCustom } from "../common/CardCustom";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  CUSTOMIZATION_ITEMS,
  DEFAULT_QR_CUSTOMIZATIONS,
} from "@/lib/constants";
import ColorForm from "./ColorForm";
import { PencilRuler } from "lucide-react";
import LogoUploader from "./LogoUploader";
import LabelForm from "./LabelForm";

const QRCustomizeCard = ({
  qrCustomizations,
  setQrCustomizations,
}: {
  qrCustomizations: any;
  setQrCustomizations: (customizations: any) => void;
}) => {
  const [selectedCustomization, setSelectedCustomization] = useState<
    (typeof CUSTOMIZATION_ITEMS)[number] | null
  >(null);

  return (
    <CardCustom
      title={
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1">
            <PencilRuler size={16} />
            Customize Your QR
          </span>
          <Button
            variant="link"
            size="sm"
            className="h-fit text-xs text-muted-foreground"
            onClick={() =>
              setQrCustomizations({ ...DEFAULT_QR_CUSTOMIZATIONS })
            }
          >
            Clear All
          </Button>
        </div>
      }
      className="w-full shadow-xs border-none p-4"
    >
      <div className="grid grid-cols-4 gap-4 p-2 bg-foreground/5 rounded-xl">
        {CUSTOMIZATION_ITEMS.map((customizationItem) => (
          <div key={customizationItem.value}>
            <Button
              key={customizationItem.value}
              variant="outline"
              className={cn(
                "w-full m-0 flex flex-col items-center justify-center h-fit gap-1.5 p-3 rounded-xl transition-all duration-200 bg-white hover:bg-primary/5 hover:border-primary text-muted-foreground hover:text-muted-foreground",
                selectedCustomization?.value === customizationItem.value &&
                  "bg-primary/10 border border-primary text-primary"
              )}
              onClick={() => setSelectedCustomization(customizationItem)}
            >
              {customizationItem.icon && (
                <customizationItem.icon className="size-5" />
              )}
              <h1 className="text-xs font-medium">{customizationItem.label}</h1>
            </Button>
          </div>
        ))}
      </div>
      {selectedCustomization && (
        <div className="mt-4">
          {(() => {
            switch (selectedCustomization.value) {
              case "color":
                return (
                  <ColorForm
                    colors={qrCustomizations.color}
                    setColors={(colors: any) =>
                      setQrCustomizations({
                        ...qrCustomizations,
                        color: colors,
                      })
                    }
                  />
                );
              case "logo":
                return (
                  <LogoUploader
                    logoUrl={qrCustomizations.logo}
                    setLogoUrl={(logoUrl: string | null) =>
                      setQrCustomizations({
                        ...qrCustomizations,
                        logo: logoUrl,
                      })
                    }
                  />
                );
              case "label":
                return (
                  <LabelForm
                    topText={qrCustomizations.label.topText}
                    bottomText={qrCustomizations.label.bottomText}
                    setTopText={(topText: string) =>
                      setQrCustomizations({
                        ...qrCustomizations,
                        label: {
                          ...qrCustomizations.label,
                          topText: topText ?? null,
                        },
                      })
                    }
                    setBottomText={(bottomText: string) =>
                      setQrCustomizations({
                        ...qrCustomizations,
                        label: {
                          ...qrCustomizations.label,
                          bottomText: bottomText ?? null,
                        },
                      })
                    }
                  />
                );

              default:
                return null;
            }
          })()}
        </div>
      )}
    </CardCustom>
  );
};

export default QRCustomizeCard;
