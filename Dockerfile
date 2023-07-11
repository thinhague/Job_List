FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json yarn.lock /app/

RUN yarn install --pure-lockfile

COPY . /app/

EXPOSE 3000

CMD [ "yarn", "start" ]