# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install nodemon 

# RUN npm install nodemon
# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port on which the app will run
EXPOSE 5000

# Start the app
CMD ["nodemon", "app"]
