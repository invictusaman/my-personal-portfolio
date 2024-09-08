import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aman Bhattarai - Bringing Data to Life",
    template: "%s | Aman - Bringing Data to Life",
  },
  metadataBase: new URL("https://amanbhattarai.com.np"),
  description:
    "Junior Data Analyst with a passion for storytelling, coding, communicating and creating dashboards. Check out my projects and hire me.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <Analytics />
      <body
        className={cn(
          "relative h-full min-h-screen antialiased",
          manrope.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="swajp-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
