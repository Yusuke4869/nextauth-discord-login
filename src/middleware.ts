import { withAuth } from "next-auth/middleware";

const rolesId = process.env.DISCORD_ROLES_ID?.split(",") ?? [];

export default withAuth({
  callbacks: {
    authorized: async ({ token }) => {
      if (!token) return false;

      const roles = (token.roles as string[]) || undefined;
      return roles?.some((role) => rolesId.includes(role));
    },
  },
});

export const config = {
  matcher: ["/((?!api|login).*)"],
};
