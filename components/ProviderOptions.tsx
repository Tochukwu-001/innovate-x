"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

type ProviderOptionsProps = {
  children: ReactNode;
};

export default function ProviderOptions({ children }: ProviderOptionsProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}