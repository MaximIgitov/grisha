import type { Metadata } from "next";
import { Manrope, Onest, Space_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import FontLoader from "@/components/FontLoader";

const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    variable: "--font-manrope",
});

const onest = Onest({
    subsets: ["latin", "cyrillic"],
    variable: "--font-onest",
});

// Using Space Mono as a fallback for Fliege Mono
const fliegeMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-fliege-mono",
});

const oswald = Oswald({
    subsets: ["latin", "cyrillic"],
    variable: "--font-oswald",
});

export const metadata: Metadata = {
    title: "Grisha | Product & Web Designer",
    description: "Portfolio of Grisha, UX/UI Product and Web Designer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className="scroll-smooth">
            <body
                className={clsx(
                    manrope.variable,
                    onest.variable,
                    fliegeMono.variable,
                    oswald.variable,
                    "font-sans antialiased bg-white text-base-text min-h-screen selection:bg-active-icon/20"
                )}
            >
                <FontLoader />
                {children}
            </body>
        </html>
    );
}
