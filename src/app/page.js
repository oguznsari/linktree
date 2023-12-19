import { getServerSession } from "next-auth";
import HeroForm from "../components/forms/HeroForm";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br />
            for everything
          </h1>
          <h2 className="mt-6 text-xl text-gray-500">
            Share your links, social profiles, contact info and more on one page
          </h2>
          <HeroForm user={session?.user} />
        </div>
      </section>
    </main>
  );
}
