import LoginWithGoogle from "../../components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <div>
      <div className="max-w-xs p-4 mx-auto">
        <h1 className="mb-2 text-4xl font-bold text-center">Sign In</h1>
        <p className="mb-2 text-center text-gray-500">
          Sing in to your account using one of the methods below
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}
