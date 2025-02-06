import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}`,
        },
      },
    }),
  ],
  pages: {
    signIn: "/signup",
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async signIn({ user, account, profile }) {
      return true;
    },
  },
};
