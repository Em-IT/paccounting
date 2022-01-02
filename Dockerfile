FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build:fe

EXPOSE 3003
CMD ["npm", "start"]