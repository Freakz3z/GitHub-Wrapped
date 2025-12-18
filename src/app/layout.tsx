import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "GitHub Wrapped",
  description: "Your year in code review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans bg-[#0d1117] text-white min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
