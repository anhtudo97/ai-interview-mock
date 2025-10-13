import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return <div>Please sign in to access this page.</div>;
  }
  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name ?? "Unknown User"}
        userId={user?.id}
        type="generate"
      />
    </>
  );
};

export default Page;