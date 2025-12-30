import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SOCIAL_PLATFORMS } from "@/lib/constants";
import SelectCustom from "../common/SelectCustom";

const SocialsForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [socialData, setSocialData] = useState({
    platform: "twitter",
    username: "",
  });

  useEffect(() => {
    onSubmit({
      socials: `https://${socialData.platform}.com/${socialData.username}`,
    });
  }, [socialData]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label className="text-sm font-semibold">Platform</Label>
        <SelectCustom
          options={SOCIAL_PLATFORMS}
          defaultValue={SOCIAL_PLATFORMS[0].value}
          onChange={(value: string) =>
            setSocialData({ ...socialData, platform: value })
          }
        />
      </div>
      <div className="space-y-1">
        <Label className="text-sm font-semibold">Username</Label>
        <Input
          placeholder="user_name"
          value={socialData.username}
          onChange={(e) =>
            setSocialData({ ...socialData, username: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default SocialsForm;
