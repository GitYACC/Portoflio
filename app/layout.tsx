import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Samarth Shastry Website Portfolio",
    description: "Website Portfolio",
    icons: {
        apple: "/apple-touch-icon.png"
    }
} 

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar overflow-hidden">
            <body style={{
                fontFamily: inter.style.fontFamily
            }}>
                {children}
            </body>
        </html>
    );
}
