// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Add your custom credentials validation logic here
      authorize: async (credentials) => {
        try {
          const host = process.env.API_HOST;
          const res = await axios.post(`${host}/auth/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          const user = res.data.user;
          return { name: user.name, email: user.email, id: user._id };
        } catch (error) {
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
});
