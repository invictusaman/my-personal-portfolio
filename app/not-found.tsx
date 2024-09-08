import  Logo  from "@/components/ui/logo";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center gap-2 justify-center">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Logo width="64" height="64" />
      </Link>
      <p className="text-lg font-light mt-8">404 not found</p>
    </div>
  );
}
