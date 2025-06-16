import { Inter, Barrio } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--primary-font",
  subsets: ["latin"],
});

const barrio = Barrio({
  variable: "--secondary-font",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Concats",
  description: "Concats - a web app created by Dave Donnelly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barrio.variable}`}>{children}</body>
    </html>
  );
}
