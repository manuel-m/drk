
FROM node:10
RUN useradd -d /home/drk -m -s /bin/bash drk
WORKDIR /home/drk
USER drk
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3002
CMD ["npm", "start"]

