import { getServerSession } from 'next-auth';
import { authOptions } from './auth-options';

/**
 * Gets the user session from the server session using next-auth.
 *
 * @returns The user data from the session if it exists, or null if it doesn't.
 */
export const getUserSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user ?? null;
};