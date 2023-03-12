import ClientProvider from "@/components/ClientProvider";
import SessionProvider from "@/components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import "./globals.css";
import { AuthProvider } from "@/components/AuthContext";
export const metadata = {
  title: "F2F - Find your co-founder",
  description: "MENA's first co-founder matching platform",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="flex flex-col bg-black/90 h-screen scroll-y-auto">
        <SessionProvider session={session}>
          <ClientProvider />
          <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
