import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// packages
import { ClerkProvider } from "@clerk/nextjs";

// components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

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
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <ToastProvider />
                    <ModalProvider />
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
