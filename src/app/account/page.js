import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "../../components/forms/UsernameForm";
import { Page } from "../../models/Page";

const AccountPage = async (req) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = req?.searchParams?.desiredUsername;

  if (!session) {
    redirect("/");
  }
  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <div>Your page is :/{page.uri}</div>;
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
};

export default AccountPage;
