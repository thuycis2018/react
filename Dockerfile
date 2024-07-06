
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Copy the build directory to the nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
