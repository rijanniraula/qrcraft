import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const EmailForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState<{
    email: string;
    subject: string;
    body: string;
  }>({
    email: "",
    subject: "",
    body: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      email: emailValue,
      subject: subjectValue,
      body: bodyValue,
    } = formData;

    const emailRedirectUrl = `mailto:${encodeURIComponent(
      emailValue
    )}?subject=${encodeURIComponent(subjectValue)}&body=${encodeURIComponent(
      bodyValue
    )}`;

    onSubmit({ email: emailRedirectUrl });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email" className="text-sm font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="e.g example@example.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="subject" className="text-sm font-semibold">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="e.g Subject of the email"
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          value={formData.subject}
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="body" className="text-sm font-semibold">
          Body
        </Label>
        <Textarea
          id="body"
          name="body"
          placeholder="e.g Body of the email"
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          value={formData.body}
          required
          className="h-[100px]"
        />
      </div>

      <div className="flex items-center  gap-2">
        <Button type="submit">Generate QR</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setFormData({ email: "", subject: "", body: "" })}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
