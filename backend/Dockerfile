FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Copy app sources
COPY . .

# Default port (override with PORT env)
ENV PORT=3000
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
