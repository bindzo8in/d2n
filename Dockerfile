# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm config set ignore-scripts false && \
    pnpm install --frozen-lockfile


FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN if [ -d "prisma" ]; then pnpm prisma generate; fi

ENV NEXT_TELEMETRY_DISABLED=1

RUN --mount=type=secret,id=DATABASE_URL,env=DATABASE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_APP_URL,env=NEXT_PUBLIC_APP_URL \
    --mount=type=secret,id=NEXT_PUBLIC_SITE_URL,env=NEXT_PUBLIC_SITE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,env=NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET \
    --mount=type=secret,id=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME \
    --mount=type=secret,id=BETTER_AUTH_URL,env=BETTER_AUTH_URL \
    --mount=type=secret,id=BETTER_AUTH_SECRET,env=BETTER_AUTH_SECRET \
    pnpm run build


FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache openssl libc6-compat

# Install Prisma CLI globally in runner (gives you the 'prisma' executable)
RUN npm install -g prisma@7.10.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy schema and migrations
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
# If you use prisma.config.ts (Prisma 7):
COPY --from=builder --chown=nextjs:nodejs /app/prisma7.config.ts ./prisma.config.ts

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]