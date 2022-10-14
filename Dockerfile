FROM node:16.13-alpine as builder
WORKDIR /my-project
COPY . .
RUN yarn install && yarn build

FROM node:16.13-alpine as runner
WORKDIR /my-project
ENV NODE_ENV production

COPY --from=builder /my-project/next.config.js .
COPY --from=builder /my-project/.env .
COPY --from=builder /my-project/package.json .

COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules


EXPOSE 80
ENTRYPOINT ["yarn", "start"]
