import { HelpCircle } from "lucide-react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      {children}

      <div className="fixed right-6 bottom-6 bg-[#FFEDD8] rounded-lg text-[#B35E01] z-20 cursor-pointer flex items-center justify-center gap-2 px-4 py-3 shadow-md text-sm">
        <HelpCircle /> help
      </div>
    </section>
  );
}
