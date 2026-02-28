"use client";

import {ReactNode} from "react";
import { SessionProvider } from "next-auth/react";

type ProviderOptionsProps = {
    children: ReactNode;
};

export default function ProviderOptions ({ children }: ProviderOptionsProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}