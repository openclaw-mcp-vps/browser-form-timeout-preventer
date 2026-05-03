import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Timeout Preventer – Keep Sessions Alive",
  description: "Browser extension that monitors form activity and sends periodic keepalive requests to prevent session timeouts on any website."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ec7dbd0-140b-477c-b073-6f7a5bfdd7e0"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
