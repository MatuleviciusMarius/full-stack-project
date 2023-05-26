import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginHandle } from './login';
import axios from 'axios';
const secret = process.env.SECRET;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        try {
          const res = await loginHandle({ email: credentials.email, password: credentials.password });
          const { user } = res;

          return { name: user.name, email: user.email, id: user._id };
        } catch (error) {
          console.log(error);
          return Promise.reject(new Error('Invalid email or password'));
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.user = token;
      return session;
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
  },
  secret: secret,
});
