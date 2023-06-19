FROM node:latest

RUN mkdir /www

WORKDIR /www

ADD . /www/

RUN npm ci

CMD ["npm", "run", "start"]