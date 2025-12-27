import { Label } from "../ui/label";
import { Input } from "../ui/input";

const StylesForm = ({
  styles,
  setStyles,
}: {
  styles: { borderRadius: number; frameColor: string; padding: number };
  setStyles: (styles: {
    borderRadius: number;
    frameColor: string;
    padding: number;
  }) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="borderRadius" className="text-sm font-semibold">
          Border Radius
        </Label>
        <Input
          type="number"
          id="borderRadius"
          name="borderRadius"
          placeholder="Enter border radius"
          value={styles.borderRadius}
          onChange={(e) =>
            setStyles({ ...styles, borderRadius: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="padding" className="text-sm font-semibold">
          Padding
        </Label>
        <Input
          type="number"
          id="padding"
          name="padding"
          placeholder="Enter padding"
          value={styles.padding}
          onChange={(e) =>
            setStyles({ ...styles, padding: parseInt(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default StylesForm;
