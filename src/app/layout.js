import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Irfan Jan | Portfolio",
  description: "Personal portfolio of Your Name — Frontend Developer",
}

export default function RootLayout({ children }) {
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
