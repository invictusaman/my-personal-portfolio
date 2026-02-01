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
    default: "Aman Bhattarai - Senior Data Engineer",
    template: "%s | Aman - Senior Data Engineer",
  },
  metadataBase: new URL("https://amanbhattarai.com.np"),
  description:
    "Senior Data Engineer with 6+ years building scalable data platforms using Azure Databricks, Snowflake, Spark, and AWS. Specialized in ETL/ELT pipelines, data lakehouse architecture, and cloud-native solutions.",
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
          manrope.className,
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
