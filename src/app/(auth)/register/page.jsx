// /home/mesanilaihueang/My_Project/manoody_book/src/app/(auth)/register/page.jsx
// "use client";

import React from "react";
// import RootLayout from "@/app/layout";
import { register } from "@/lib/action";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex bg-[#FFACCA] flex-col rounded-3xl w-80 p-7 ">
        <form className="flex flex-col gap-12 " action={register}>
          <input
            className="p-1 text-center rounded-3xl "
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="p-1 text-center rounded-3xl "
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-1 text-center rounded-3xl "
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            className="p-1 text-center rounded-3xl "
            type="password"
            placeholder="Confirm Password"
            name="passwordRepeat"
          />
          <button className="p-1 bg-[#712573] rounded-3xl text-white hover:scale-110 hover:bg-[#b152b5]">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

// export default function RegisterPage() {
//   return (
//     <RootLayout useNavbar={false}>
//       <Register></Register>
//     </RootLayout>
//   );
// }
