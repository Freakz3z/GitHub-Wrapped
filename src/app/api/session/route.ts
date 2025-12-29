import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      console.log("No session found");
      return new Response(JSON.stringify(null), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    console.log("Session found:", JSON.stringify(session, null, 2));
    
    // @ts-ignore - accessToken is added in route handler
    const sessionData = {
      user: session.user,
      accessToken: (session as any).accessToken,
      expires: session.expires,
    };
    
    return new Response(JSON.stringify(sessionData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Session error:", error);
    return new Response(JSON.stringify({ error: "Session error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
