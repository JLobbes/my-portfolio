// src/app/layout.js

import "./styles/globals.css";

export const metadata = {
  title: "My-Portfolio",
  description: "This is a portfolio to showcase my past work and eduction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
