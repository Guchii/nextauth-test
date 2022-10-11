import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '438141103496-7pl2krnp77arug3uv4baaptbue75sd5s.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};
export default NextAuth(authOptions);
