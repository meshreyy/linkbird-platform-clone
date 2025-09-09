import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProfileDropdown from './ProfileDropdown';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b fixed top-0 left-70 right-0 bg-white z-50 shadow h-16">
  <h1 className="text-lg font-semibold ml-auto" style={{color:'black'}}>Welcome, {session.user?.name}</h1>
  <ProfileDropdown user={{ name: session.user?.name || "", email: session.user?.email || "" }} />
</header>


      <main className="p-4">
        <p>hi</p>
      </main>
    </div>
  );
}
