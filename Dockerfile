# Etapa de construção
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json yarn.lock /app/

RUN yarn install --pure-lockfile

COPY . /app/

RUN yarn build

# Etapa de produção
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
