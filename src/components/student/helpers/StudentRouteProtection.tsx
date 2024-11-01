"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function StudentRouteProtection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const page = useSearchParams().get("page");


// TO:DO add logic for keeping or removing users from the students route

  useEffect(() => {
    if (!page) {
      router.push("/students?page=home");
    }
  }, [router]);
  return <section>{children}</section>;
}
