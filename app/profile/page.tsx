import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)

    if(!session) {
        return redirect("/login")
    }

    return (
        <div>
            <h1>Welcome, {session.user?.name}</h1>
        </div>
    )
}