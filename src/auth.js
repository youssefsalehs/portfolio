import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credintials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const payload = await res.json();
        console.log(payload);
        // return null;
        if (payload.status === "success") {
          const decoded = jwtDecode(payload.token);
          console.log(decoded);
          return { id: decoded.id, user: payload.user, token: payload.token };
        } else {
          throw new Error(payload.message || "invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user?.user;
        token.token = user?.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token?.user;
      return session;
    },
  },
};
