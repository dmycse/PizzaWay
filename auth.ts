import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      // authorize: async (request) => {
      //   const response = await fetch(request)
      //   if (!response.ok) return null
      //   return (await response.json()) ?? null
      // },
    }),
  ],
})