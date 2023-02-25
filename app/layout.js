import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "F2F - Find your co-founder",
  description: "MENA's first co-founder matching platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black/90">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
