FROM node:14.15-alpine AS build
WORKDIR /usr/src/app
COPY /frontend/package.json package-lock.json ./
RUN /frontend npm install
COPY /frontend .
RUN /frontend npm run build