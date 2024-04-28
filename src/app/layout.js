// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "manoodyBook",
  description: "Buy and sell books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-[#F4EAEE]" >
      <div className="grid grid-rows-2">
        <div className="row-span-1">
          <Navbar/>
        </div>
        
        <div className="row-span-11 ">{children}test</div>
      </div>
        
        {/* {children} */}
      </body>
        
    </html>
  );
}


