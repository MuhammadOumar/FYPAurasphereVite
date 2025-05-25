FROM node:18
WORKDIR /app
COPY Server/package*.json ./
RUN npm install --production
COPY Server .
EXPOSE 3000
CMD ["node", "server.js"]
