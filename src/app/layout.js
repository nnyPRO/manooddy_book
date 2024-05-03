// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "manooddyBook",
  description: "Buy and sell books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-[#F4EAEE]" >
      <div className="flex flex-col h-screen">
        <div className="flex-none h-16 md:h-20 ">
          <Navbar/>
        </div>
        
        <div className="flex-1">{children}</div>
      </div>
        
      </body>
        
    </html>
  );
}


