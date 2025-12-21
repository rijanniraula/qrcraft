import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const CardCustom = ({
  title,
  description = null,
  className,
  children,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode | null;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className={cn("shadow-xs border-none p-0 m-0 gap-4", className)}>
      {title ||
        (description && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        ))}
      <CardContent className="p-0 m-0">{children}</CardContent>
    </Card>
  );
};
