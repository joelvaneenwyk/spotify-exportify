FROM node:18.18-alpine

COPY . /

RUN yarn install && yarn cache clean

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
