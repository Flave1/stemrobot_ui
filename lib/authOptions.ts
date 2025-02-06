import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          redirect_uri: process.env.NEXTAUTH_URL,
          scope: "openid email profile", // Ensure proper scopes
          prompt: "consent",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "1", name: "J Smith", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/signup",
  },
  callbacks: {
    async session({ session, token }: any) {
      console.log("Session Callback - Token:", token);
      console.log("Session Callback - Session:", session);
      return session;
    },
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback - User:", user);
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      console.log("JWT Callback - Token:", token);
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
