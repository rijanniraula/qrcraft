import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const LabelForm = ({
  topText,
  bottomText,
  setTopText,
  setBottomText,
  topTextColor,
  bottomTextColor,
  setTopTextColor,
  setBottomTextColor,
}: {
  topText: string;
  bottomText: string;
  setTopText: (topText: string) => void;
  setBottomText: (bottomText: string) => void;
  topTextColor: string;
  bottomTextColor: string;
  setTopTextColor: (topTextColor: string) => void;
  setBottomTextColor: (bottomTextColor: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="topText" className="text-sm font-semibold">
          Top Text
        </Label>
        <div className="flex items-center gap-2">
          <Textarea
            id="topText"
            name="topText"
            placeholder="Enter top text"
            value={topText}
            maxLength={100}
            onChange={(e) => setTopText(e.target.value)}
            style={{ color: topTextColor }}
            className="h-10"
          />
          <div
            className="w-10 h-9 rounded-lg border border-border cursor-pointer"
            style={{ backgroundColor: topTextColor }}
          >
            <input
              type="color"
              value={topTextColor}
              onChange={(e) => setTopTextColor(e.target.value)}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="bottomText" className="text-sm font-semibold">
          Bottom Text
        </Label>
        <div className="flex items-center gap-2">
          <Textarea
            id="bottomText"
            name="bottomText"
            placeholder="Enter bottom text"
            value={bottomText}
            maxLength={100}
            className="h-10"
            onChange={(e) => setBottomText(e.target.value)}
            style={{ color: bottomTextColor }}
          />
          <div
            className="w-10 h-9 rounded-lg border border-border cursor-pointer"
            style={{ backgroundColor: bottomTextColor }}
          >
            <input
              type="color"
              value={bottomTextColor}
              onChange={(e) => setBottomTextColor(e.target.value)}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelForm;
