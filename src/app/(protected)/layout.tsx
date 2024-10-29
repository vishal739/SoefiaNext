
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="relative">{children}</section>;
}
