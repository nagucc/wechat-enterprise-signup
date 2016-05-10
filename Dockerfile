FROM node

ADD *.js /jkef/
ADD *.json /jkef/
ADD src /jkef/src
ADD tools /jkef/tools
ADD lib /jkef/lib
WORKDIR /jkef

RUN npm install
RUN ./node_modules/.bin/babel-node tools/run build --release
EXPOSE 3000

RUN ls build
CMD node build/server.js
