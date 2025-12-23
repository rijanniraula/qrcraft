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
} from "lucide-react";
import TextForm from "@/components/forms/TextForm";
import URLForm from "@/components/forms/URLForm";
import EmailForm from "@/components/forms/EmailForm";
import PhoneForm from "@/components/forms/PhoneForm";
import SMSForm from "@/components/forms/SMSForm";
import WhatsAppForm from "@/components/forms/WhatsappForm";
import ColorForm from "@/components/customizations/ColorForm";

export const CUSTOMIZATION_ITEMS = [
  { label: "Color", value: "color", icon: Palette },
  { label: "Logo", value: "logo", icon: ImageIcon },
  { label: "Label", value: "label", icon: TextIcon },
  { label: "Style", value: "style", icon: Square },
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
    bottomText: null,
  },
  style: {
    borderRadius: 0,
    frameColor: "#000000",
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
];

export const QR_TYPE_MAP = {
  text: TextForm,
  url: URLForm,
  email: EmailForm,
  phone: PhoneForm,
  sms: SMSForm,
  whatsapp: WhatsAppForm,
};

export const QR_CUSTOMIZATION_FORM_MAP = {
  color: ColorForm,
  // logo: LogoForm,
  // label: LabelForm,
  // style: StyleForm,
};
