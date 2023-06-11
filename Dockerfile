#version of Node.js is being used
FROM node:18

#create app director
WORKDIR E:/Deakin IT/Networking and Cloud Technologies/SIT323 - Cloud Application Development\OnTrack/7.1P Kubernetes/SIT323-2023-t1-prac7p/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

#bundle app source
COPY server.js .

#Port to be exposed
EXPOSE 8080

CMD ["node", "server.js"]