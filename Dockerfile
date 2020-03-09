FROM node:12.13.1
WORKDIR /usr/app
RUN yarn install
COPY ./ ./
RUN yarn build
EXPOSE 8080
CMD [ "node", "./dist/main.js" ]

# FROM alpine
# RUN apk add --update redis
# CMD ["redis-server"]