import "../styles/global.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black px-10 py-5 relative">
        <Header />
        <main className="h-full"> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
