import "dotenv/config";
import { auth } from "../lib/auth";

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "admin123456";
  const name = process.env.ADMIN_NAME || "Admin";

  try {
    // Attempt to register the admin user.
    // In better-auth, creating a user programmatically can be done by invoking the signUp method,
    // but auth.api.signUpEmail({ body: ... }) expects a request context.
    // Instead, we can use the plugin API or internal Prisma if we hash the password, 
    // but better-auth exposes an internal password hashing if we configure it.
    // For simplicity, better-auth v1 allows auth.api.signUpEmail natively if we mock headers.

    const res = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
      headers: new Headers(), // mock empty headers for server-side call
    });

    console.log("Admin user seeded successfully:", res?.user?.email);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.message?.includes("User already exists") || error?.status === 400) {
      console.log("Admin user already exists or invalid request. Please check DB.");
    } else {
      console.error("Failed to seed admin:", error);
    }
  }
}

main();
