FROM node:lts-alpine AS base

RUN apk add --no-cache libc6-compat dumb-init

WORKDIR /usr/src/app

FROM base AS build

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM base AS prune

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install --omit=dev --legacy-peer-deps

FROM base AS release

COPY --from=prune /usr/src/app/node_modules ./node_modules

COPY --from=build /usr/src/app/dist ./dist

RUN addgroup -S myuser && adduser -S myuser -G myuser
USER myuser

ENV PORT=3000

EXPOSE $PORT

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["node", "dist/darkshield/main"]
