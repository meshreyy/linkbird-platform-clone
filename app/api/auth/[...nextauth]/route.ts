import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",       
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after sign in
     if (url.startsWith(baseUrl)) return url;
      return baseUrl + '/dashboard';  
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
