##############################################################################################################################################
############################################################   Stage 1  BUILD  ################################################################
###############################################################################################################################################


# getting node Docker image from registry and naming the compilation stage as build 
FROM node:14.15-alpine AS build

# setting default work directory,
WORKDIR /usr/src/app

# copying package.json & package-lock.json files from local root directory — this file contains all dependencies that our app requires,
COPY package*.json ./

# installing necessary libraries
RUN npm install

# copying all remaining files with a source code
COPY . .

# and finally compiling our app
RUN npm run build


#################################################################################################################################################
#############################################################   Stage 2  RUN ####################################################################
#################################################################################################################################################

# first to get a nginx Docker image from Docker Hub tagged with 1.17.1-alpine
FROM nginx:1.17.1-alpine

# Then copy-paste the default nginx configuration,
COPY nginx.conf /etc/nginx/nginx.conf

# and finally copy-paste the compiled application (we done it in previous step) to the container.
# --from=build flag to tell Docker that it needs to copy compiled files from build stage
COPY --from=build . /usr/src/app/dist/frontend



####################   DOCKER COMMANDS #######################

# BUILD === docker build -t [image_name] .

# RUN === docker run --name [container_name] -d -p [PORT]:80 [image_name]
# docker run -it -p 9001:3000 backend-docker
