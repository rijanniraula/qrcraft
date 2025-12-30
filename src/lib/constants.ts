import {
  LinkIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TextIcon,
  MessageCircleIcon,
  Palette,
  ImageIcon,
  Square,
  WifiIcon,
  Share2,
} from "lucide-react";
import TextForm from "@/components/forms/TextForm";
import URLForm from "@/components/forms/URLForm";
import EmailForm from "@/components/forms/EmailForm";
import PhoneForm from "@/components/forms/PhoneForm";
import SMSForm from "@/components/forms/SMSForm";
import WhatsAppForm from "@/components/forms/WhatsappForm";
import WifiForm from "@/components/customizations/WifiForm";
import SocialsForm from "@/components/customizations/SocialsForm";

export const CUSTOMIZATION_ITEMS = [
  { label: "Color", value: "color", icon: Palette },
  { label: "Logo", value: "logo", icon: ImageIcon },
  { label: "Label", value: "label", icon: TextIcon },
  { label: "Style", value: "style", icon: Square },
];

export const WIFI_ENCRYPTION_OPTIONS = [
  { label: "WPA/WPA2", value: "WPA" },
  { label: "WEP", value: "WEP" },
  { label: "No Password", value: "nopass" },
];

export const SOCIAL_PLATFORMS = [
  { label: "Twitter", value: "twitter" },
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "YouTube", value: "youtube" },
];

export const DEFAULT_QR_CUSTOMIZATIONS = {
  quality: 100,
  color: {
    bgColor: "#ffffff",
    fgColor: "#000000",
  },
  logo: null,
  label: {
    topText: null,
    topTextColor: "#000000",
    bottomText: null,
    bottomTextColor: "#000000",
  },
  style: {
    borderColor: "#000000",
    borderWidth: 0,
    borderRadius: 0,
    frameColor: "#000000",
    padding: 0,
  },
};

export const QR_TYPES = [
  {
    id: 1,
    name: "Text",
    value: "text",
    icon: TextIcon,
  },
  {
    id: 2,
    name: "URL",
    value: "url",
    icon: LinkIcon,
  },
  {
    id: 3,
    name: "Email",
    value: "email",
    icon: MailIcon,
  },
  {
    id: 4,
    name: "Phone",
    value: "phone",
    icon: PhoneIcon,
  },
  {
    id: 5,
    name: "SMS",
    value: "sms",
    icon: MessageSquareIcon,
  },
  {
    id: 6,
    name: "WhatsApp",
    value: "whatsapp",
    icon: MessageCircleIcon,
  },
  {
    id: 7,
    name: "WiFi",
    value: "wifi",
    icon: WifiIcon,
  },
  {
    id: 8,
    name: "Socials",
    value: "socials",
    icon: Share2,
  },
];

export const QR_TYPE_MAP = {
  text: TextForm,
  url: URLForm,
  email: EmailForm,
  phone: PhoneForm,
  sms: SMSForm,
  whatsapp: WhatsAppForm,
  wifi: WifiForm,
  socials: SocialsForm,
};
