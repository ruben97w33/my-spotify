import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyAPI, { LOGIN_URL } from "../../../lib/spotify";
import NextAuth from "next-auth/next";

async function refreshAccessToken(token) {
  try {
    SpotifyAPI.setAccessToken(token.accessToken);
    SpotifyAPI.setRefeshToken(token.refreshToken);

    const { body: refreshedToken } = await SpotifyAPI.refreshAccessToken();
    "refresh access token id", refreshedToken;

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refeshToken,
    };
  } catch (error) {
    error;

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET_ID,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          // user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        ("Existing TOKEN IS VALID");
        return token;
      }

      // Access token has expired, try to update it
      ("ACCESS TOKEN IS EXPIRED, refresing...");
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
