import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signup",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // You can add custom logic here, such as creating a user in your database
      return true
    },
    async session({ session, user }) {
      // You can add custom session logic here
      return session
    },
  },
})

export { handler as GET, handler as POST }

