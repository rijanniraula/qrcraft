import { Label } from "../ui/label";
import { Input } from "../ui/input";

const StylesForm = ({
  styles,
  setStyles,
}: {
  styles: {
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    frameColor: string;
    padding: number;
  };
  setStyles: (styles: {
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    frameColor: string;
    padding: number;
  }) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="borderColor" className="text-sm font-semibold">
          Border Color
        </Label>
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg border border-border cursor-pointer"
            style={{ backgroundColor: styles.borderColor }}
          >
            <input
              type="color"
              value={styles.borderColor}
              onChange={(e) =>
                setStyles({ ...styles, borderColor: e.target.value })
              }
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <Input
            type="text"
            id="borderColor"
            name="borderColor"
            placeholder="e.g #ffffff"
            value={styles.borderColor}
            onChange={(e) =>
              setStyles({ ...styles, borderColor: e.target.value })
            }
            className="w-full"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="borderWidth" className="text-sm font-semibold">
          Border Width
        </Label>
        <Input
          type="range"
          id="borderWidth"
          name="borderWidth"
          min={0}
          max={50}
          value={styles.borderWidth}
          onChange={(e) =>
            setStyles({ ...styles, borderWidth: parseInt(e.target.value) })
          }
          className="w-full px-0 shadow-none"
        />
      </div>
      <div>
        <Label htmlFor="borderRadius" className="text-sm font-semibold">
          Border Radius
        </Label>
        <Input
          type="range"
          id="borderRadius"
          name="borderRadius"
          min={0}
          max={50}
          value={styles.borderRadius}
          onChange={(e) =>
            setStyles({ ...styles, borderRadius: parseInt(e.target.value) })
          }
          className="w-full px-0 shadow-none"
        />
      </div>
      <div>
        <Label htmlFor="padding" className="text-sm font-semibold">
          Padding
        </Label>
        <Input
          type="range"
          id="padding"
          name="padding"
          min={32}
          max={100}
          step={1}
          value={styles.padding}
          onChange={(e) =>
            setStyles({ ...styles, padding: parseInt(e.target.value) })
          }
          className="w-full px-0 shadow-none"
        />
      </div>
    </div>
  );
};

export default StylesForm;
