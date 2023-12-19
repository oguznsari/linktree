import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";
import { FaLink } from "react-icons/fa";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="py-4 bg-white border-b">
      <div className="flex justify-between max-w-4xl px-6 mx-auto">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="flex items-center gap-2 text-blue-700">
            <FaLink className="text-blue-500" />
            <span className="font-bold">LinkList</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
