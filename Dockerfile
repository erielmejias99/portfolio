FROM node:20.11.1-alpine as base
LABEL authors="erielmejias99"

#RUN apk add --no-cache git openssh-client

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

FROM base as prod
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]