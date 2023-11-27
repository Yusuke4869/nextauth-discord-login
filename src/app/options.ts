import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getRoles, hasRole } from "~/libs/discord";

export const options: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: {
        params: { scope: "identify email guilds guilds.members.read" },
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account }) => {
      if (account == null || account.access_token == null) return false;
      return hasRole(account.access_token);
    },
    jwt: async ({ token, account }) => {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
        token.roles = await getRoles(account.access_token);
      }
      return token;
    },
  },
};
