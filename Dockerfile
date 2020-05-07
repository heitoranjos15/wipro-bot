FROM node:10

ARG MICROSERVICE=wipro-bot

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

RUN ["chmod", "+x", "/root/.nvm/nvm.sh"]

RUN $HOME/.nvm/nvm.sh && \
    source $HOME/.nvm/nvm.sh && \
    nvm install && \
    nvm use && \
    npm install && \
    npm run clean-coverage

RUN ln -fs /dev/stdout /opt/${MICROSERVICE}/server.log

EXPOSE 3000

CMD [ "npm", "run", "start" ]
