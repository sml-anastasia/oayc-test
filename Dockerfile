FROM node:16.14
WORKDIR /my-project
COPY . .

RUN yarn && yarn build
ENV NODE_ENV production
EXPOSE 80
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
