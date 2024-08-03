# Use the official Node.js image as the base image
FROM node:16-alpine


# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon as a development dependency
RUN npm install --only=dev

# Copy the entire project
COPY . .

# Expose the port on which the app will run
EXPOSE 5000

# Start the app with nodemon
CMD ["npm", "run", "dev"]
