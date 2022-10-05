ARG NODE_IMAGE=node:16.13.1-alpine

FROM $NODE_IMAGE AS base
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE $PORT
CMD ["npm", "run", "start:dev"]
