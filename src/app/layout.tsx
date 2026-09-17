import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "LiveWires Digital Solutions | Best Web & App Development Agency in Chennai",
  description:
    "LiveWires Digital Solutions is a top-rated digital agency in Chennai offering professional web development, mobile app development, AI solutions, UI/UX design, graphic design, and IoT services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

