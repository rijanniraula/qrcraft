import { Label } from "../ui/label";
import { Input } from "../ui/input";

const LabelForm = ({
  topText,
  bottomText,
  setTopText,
  setBottomText,
}: {
  topText: string;
  bottomText: string;
  setTopText: (topText: string) => void;
  setBottomText: (bottomText: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="topText" className="text-sm font-semibold">
          Top Text
        </Label>
        <Input
          type="text"
          id="topText"
          name="topText"
          placeholder="Enter top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="bottomText" className="text-sm font-semibold">
          Bottom Text
        </Label>
        <Input
          type="text"
          id="bottomText"
          name="bottomText"
          placeholder="Enter bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LabelForm;
