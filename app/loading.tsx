import Logo from "@/components/ui/logo";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="animate-spin">
      <Logo />
    </div>
  </div>
  );
}
