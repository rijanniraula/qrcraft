import {
  LinkIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TextIcon,
  MessageCircleIcon,
} from "lucide-react";
import TextForm from "@/components/forms/TextForm";
import URLForm from "@/components/forms/URLForm";
import EmailForm from "@/components/forms/EmailForm";
import PhoneForm from "@/components/forms/PhoneForm";
import SMSForm from "@/components/forms/SMSForm";

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
};
