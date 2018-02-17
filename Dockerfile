FROM node:8-alpine

RUN mkdir /app/
WORKDIR /app/

COPY package.json .
RUN npm install

# Build ./dist folder
COPY src/ src/
COPY bin/ bin/
COPY gulpfile.babel.js .
COPY .babelrc .
RUN npm run build

# Remove dev dependencies
RUN npm prune --production
RUN rm -r src/

CMD ["npm", "start"]
