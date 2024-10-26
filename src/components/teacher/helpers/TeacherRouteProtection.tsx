"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TeacherRouteProtection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const page = useSearchParams().get("page");

// TO:DO add logic for keeping or removing users from the teachers route

  useEffect(() => {
    if (!page) {
      router.push("/teacher?page=lessons");
    }
  }, [router]);
  return <section>{children}</section>;
}
