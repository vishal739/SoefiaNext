import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "500", "800", "900"],
});

export const metadata: Metadata = {
  title: "soefia",
  description: "soeifa education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased  bg-backround `}>
        {children}
      </body>
    </html>
  );
}
