const guildId = process.env.DISCORD_GUILD_ID;
const rolesId = process.env.DISCORD_ROLES_ID?.split(",") ?? [];

/**
 * ロールを持っているかを判定する
 * @param {string} accessToken
 * @returns {Promise<boolean>}
 */
export const hasRole = async (accessToken: string): Promise<boolean> => {
  if (!guildId) return false;
  if (!rolesId.length) return false;

  const res = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) return false;

  const guildMember = await res.json();
  const roles = guildMember.roles as string[];
  return roles.some((role) => rolesId.includes(role));
};

/**
 * ロールを取得する
 * @param {string} accessToken
 * @returns {Promise<string[]>}
 */
export const getRoles = async (accessToken: string): Promise<string[]> => {
  if (!guildId) return [];
  if (!rolesId.length) return [];

  const res = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) return [];

  const guildMember = await res.json();
  const roles = guildMember.roles as string[];
  return roles;
};
