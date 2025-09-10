import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from "react";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
    // no return needed after redirect as it throws a redirect response
  }
  
  return <>{children}</>;
}
