# We don't want to start from scratch.
# That is why we tell node here to use the 9-slim image.
FROM node:9-slim

# Create an application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json  /app/

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . /app/

# Start the app
CMD ["npm", "start"]