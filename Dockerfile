FROM node:12-alpine as builder
WORKDIR /toyota-service
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:12-alpine
WORKDIR /toyota-service
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY . .
COPY --from=builder /toyota-service/dist /toyota-service/dist
CMD ["yarn", "start"]
