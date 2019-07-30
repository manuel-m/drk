
FROM node:10
RUN useradd -d /home/drk -m -s /bin/bash drk
WORKDIR /home/drk
USER drk
COPY app.js watch.js package.json ./
EXPOSE 3001
CMD ["npm", "start"]
