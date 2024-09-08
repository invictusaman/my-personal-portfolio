import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-2xl px-6 md:px-16 lg:px-24 xl:px-32", className)}
    >
      {children}
    </div>
  );
}
