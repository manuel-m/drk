# docker build -t discoridedev/node-web-app .
# docker run -p 8080:8080 --rm -d discoridedev/node-web-app
# docker kill $(docker ps -q)


FROM node:10
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "start"]