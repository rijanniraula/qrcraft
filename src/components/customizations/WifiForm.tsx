import { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useState } from "react";
import SelectCustom from "../common/SelectCustom";
import { WIFI_ENCRYPTION_OPTIONS } from "@/lib/constants";

const WifiForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [wifiData, setWifiData] = useState({
    ssid: "",
    password: "",
    encryption: "WPA",
    hidden: false,
  });

  const generateWifiQRValue = () => {
    return `WIFI:T:${wifiData.encryption};S:${wifiData.ssid};P:${
      wifiData.encryption === "nopass" ? "" : wifiData.password
    };H:${wifiData.hidden};;`;
  };

  useEffect(() => {
    onSubmit({ wifi: generateWifiQRValue() });
  }, [wifiData]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label className="text-sm font-semibold">Network Name (SSID)</Label>
        <Input
          placeholder="My WiFi Network"
          value={wifiData.ssid}
          onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
        />
      </div>
      <div className="space-y-1">
        <Label className="text-sm font-semibold">Password</Label>
        <Input
          type="password"
          placeholder="Network password"
          value={wifiData.password}
          onChange={(e) =>
            setWifiData({ ...wifiData, password: e.target.value })
          }
        />
      </div>
      <div className="space-y-1">
        <Label className="text-sm font-semibold">Encryption</Label>
        <SelectCustom
          options={WIFI_ENCRYPTION_OPTIONS}
          defaultValue={WIFI_ENCRYPTION_OPTIONS[0].value}
          onChange={(value: string) =>
            setWifiData({ ...wifiData, encryption: value })
          }
        />
      </div>
      <div className="flex items-center gap-3">
        <Switch
          checked={wifiData.hidden}
          onCheckedChange={(checked: boolean) =>
            setWifiData({ ...wifiData, hidden: checked })
          }
        />
        <Label className="text-sm font-semibold">Hidden Network</Label>
      </div>
    </div>
  );
};

export default WifiForm;
