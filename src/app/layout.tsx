import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HelpCircle } from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body
        className={`${poppinsFont.className} antialiased  bg-backround  relative`}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {children}
        <div className="fixed right-6 bottom-16 bg-[#FFEDD8] rounded-lg text-[#B35E01] z-20 cursor-pointer flex items-center justify-center gap-2 px-4 py-3 shadow-md text-sm">
          <HelpCircle /> help
        </div>
      </body>
    </html>
  );
}
