FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml ./

# Configure pnpm to run build scripts (required for Prisma and esbuild)
RUN pnpm config set ignore-scripts false && \
    pnpm install

FROM node:20-alpine AS builder
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client (needed if your project uses Prisma with Next.js)
RUN if [ -d "prisma" ]; then pnpm prisma generate; fi

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install OpenSSL in runner so Prisma engines can query PostgreSQL
RUN apk add --no-cache openssl libc6-compat

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]