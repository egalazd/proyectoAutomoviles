FROM node:22-slim

RUN apt-get update && apt-get install -y build-essential python3 && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install --production
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "run", "start" ] 