import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Game",
  description: "Dark Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full h-[100vh] bg-background overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
