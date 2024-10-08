// /home/mesanilaihueang/My_Project/manoody_book/src/app/layout.js
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { auth } from "@/lib/auth";

// Fetch session data on the server side
const fetchSession = async () => {
  return await auth();
};

export const metadata = {
  title: "manooddyBook",
  description: "Buy and sell books",
};

export default async function RootLayout({ children }) {
  const session = await fetchSession(); // Fetch session data
  console.log("session", session);
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-[#F4EAEE]">
        <div className="flex flex-col h-screen">
          <div className="flex-none h-16 md:h-21 ">
            <Navbar session={session} />
          </div>

          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

