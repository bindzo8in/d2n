import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg"; 
import { PrismaClient } from "./generated/prisma/client";
import { env } from "@/lib/env";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient; 
}; 

const pool = new Pool({ connectionString: env.DATABASE_URL });
const adapter = new PrismaPg(pool); 
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, 
  }); 
if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
export { prisma };