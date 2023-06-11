#version of Node.js is being used
FROM node:18

#create app director
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

#bundle app source
COPY server.js .

#Port to be exposed
EXPOSE 8080

CMD ["node", "server.js"]