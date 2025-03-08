import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // This is where you would validate the user credentials against your database
        // For demo purposes, we'll use a simple check
        if (
          credentials?.email === 'user@example.com' && 
          credentials?.password === 'password'
        ) {
          return {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
          };
        }
        
        // If you want to connect to a real database, you would do that here
        // const user = await db.user.findUnique({ where: { email: credentials.email } })
        // if (user && await comparePasswords(credentials.password, user.password)) {
        //   return { id: user.id, name: user.name, email: user.email }
        // }
        
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
}; 