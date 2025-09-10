import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",         // Force consent screen every sign in
          access_type: "offline",    // Request refresh token
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",       // Custom signin page path
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard if url is relative or disallowed
      if (url.startsWith(baseUrl)) return url;
      return baseUrl + "/dashboard";
    },
  },
  secret: process.env.NEXTAUTH_SECRET,  // Required for JWT encryption
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
