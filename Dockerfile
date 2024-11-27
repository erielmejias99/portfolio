FROM node:20.11.1 as base
LABEL authors="erielmejias99"

#RUN apk add --no-cache git openssh-client

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

FROM base as build
RUN npm run build

FROM node:20.11.1 as prod
WORKDIR /app
COPY --from=build /app/.output /app/.output
CMD [ "node", ".output/server/index.mjs" ]