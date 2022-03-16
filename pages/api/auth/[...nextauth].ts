import clientPromise from '@lib/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email === process.env.AUTH_EMAIL_1 || user.email === process.env.AUTH_EMAIL_2) {
        return true;
      }

      return false;
    },
  },
  pages: {
    error: '/auth/error',
  },
});
