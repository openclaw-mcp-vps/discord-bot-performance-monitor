import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Bot Performance Monitor",
  description: "Monitor Discord bot uptime and response times. Real-time dashboards, downtime alerts, and performance analytics for Discord server owners and bot developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3da58ee3-fd44-43d1-a290-6e83588cb75b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
