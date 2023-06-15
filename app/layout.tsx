import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "CarHub",
  description: "Discover the best car in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
