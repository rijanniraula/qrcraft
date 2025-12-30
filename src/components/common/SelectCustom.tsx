import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { cn } from "@/lib/utils";

const SelectCustom = ({
  options,
  className,
  defaultValue,
  onChange,
}: {
  options: any;
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className={cn("w-full rounded-xl", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="text-sm bg-card rounded-xl overflow-hidden"
        position="popper"
      >
        {options.map((option: any) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-sm font-medium rounded-xl"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCustom;
