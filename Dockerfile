FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build:fe

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories \
  && echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories \
  && apk update
RUN apk add mongodb \
  && apk add mongodb-tools
# RUN mkdir -p /data/db/ \
# RUN chown `root` /data/db
# RUN rc-update add mongodb default
# RUN rc-service mongodb start
EXPOSE 3003
CMD ["npm", "start"]