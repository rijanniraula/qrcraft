import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ColorForm = ({
  colors,
  setColors,
}: {
  colors: { bgColor: string; fgColor: string };
  setColors: (colors: { bgColor: string; fgColor: string }) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bgColor" className="text-sm font-semibold">
          Background Color
        </Label>
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg border border-border cursor-pointer"
            style={{ backgroundColor: colors.bgColor }}
          >
            <input
              type="color"
              value={colors.bgColor}
              onChange={(e) =>
                setColors({ ...colors, bgColor: e.target.value })
              }
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <Input
            type="text"
            id="bgColor"
            name="bgColor"
            placeholder="e.g #ffffff"
            value={colors.bgColor}
            onChange={(e) => setColors({ ...colors, bgColor: e.target.value })}
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fgColor" className="text-sm font-semibold">
          Foreground Color
        </Label>
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg border border-border cursor-pointer"
            style={{ backgroundColor: colors.fgColor }}
          >
            <input
              type="color"
              value={colors.fgColor}
              onChange={(e) =>
                setColors({ ...colors, fgColor: e.target.value })
              }
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <Input
            type="text"
            id="fgColor"
            name="fgColor"
            placeholder="e.g #ffffff"
            value={colors.fgColor}
            onChange={(e) => setColors({ ...colors, fgColor: e.target.value })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorForm;
