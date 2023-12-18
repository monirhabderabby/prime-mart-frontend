import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// css file
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prime Mart",
    description: "A complete e-commerce site",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
