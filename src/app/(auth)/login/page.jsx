// /home/mesanilaihueang/My_Project/manoody_book/src/app/(auth)/login/page.jsx
import { signIn } from "@/lib/auth";
import { handleGoogleLogin } from "@/lib/action";

const LoginPage = async () => {
  // const session = await auth();
  // console.log("session", session);

  return (
    <div>
      <form action={handleGoogleLogin}>
        <button>Login with Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
