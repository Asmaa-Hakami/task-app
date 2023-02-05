FROM node:18-alpine
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm ci  && npm run build

#RUN cd ./nestjs-app && npm ci  && cd ..

RUN mkdir -p /usr/src/app/server/client

RUN cp -r ./clien/* ./server/client/

WORKDIR  /usr/src/app/server

#RUN npm run prebuild

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]