# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install bootstrap --save
RUN npm install react-bootstrap

RUN npm install


RUN npm install react react-dom  --save

RUN npm i react-scripts


# Copy the entire project
COPY . .
# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
