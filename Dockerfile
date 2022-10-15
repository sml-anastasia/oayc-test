FROM node:16.13-alpine as builder
WORKDIR /my-project
COPY . .

ENV NODE_ENV production
EXPOSE 80
ENTRYPOINT ["yarn", "start"]
