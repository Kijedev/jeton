import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/goldman';
import ClientLayout from "@/app/components/ClientLayout";

export const metadata: Metadata = {
  title: "Jeton",
  description: "Fast & Secure payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
