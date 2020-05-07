FROM 954082300853.dkr.ecr.sa-east-1.amazonaws.com/prd/image-base:latest

RUN yum -y install epel-release vim htop git sysstat telnet wget gcc gcc-c++

## NÃO ALTERAR A VERSÃO DO NODE JS  NODE_VERSION=4.8.7
ARG NODE_VERSION=4.8.7
ARG ARCH=x64
ARG MICROSERVICE=ms-dma

RUN ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime -f

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

RUN ["chmod", "+x", "/root/.nvm/nvm.sh"]

RUN echo -e "Host gitlab.nexteldigital.com.br\n\tStrictHostKeyChecking no\n" >> /root/.ssh/config \
&& mkdir -p /opt/shared/ \
&& mkdir -p /opt/keys

RUN mkdir -p /opt/${MICROSERVICE}

COPY . /opt/${MICROSERVICE}
WORKDIR /opt/${MICROSERVICE}

RUN OVERLAYS=$(date +%Y%m%d%H%M%S) && \
    ENV="hmg" && \
    git clone git@gitlab.nexteldigital.com.br:NextelDigital/nextel-overlays.git /opt/$OVERLAYS && \
    cp /opt/$OVERLAYS/$ENV/${MICROSERVICE}/overlays /opt/shared/overlays && \
    cp /opt/$OVERLAYS/$ENV/keys/public.pem /opt/keys/public.pem && \
    cp /opt/$OVERLAYS/$ENV/keys/private.pem /opt/keys/private.pem && \
    if [ -s /opt/shared/overlays ] ; then sed -f /opt/shared/overlays configs/config-ansible.json > server/config-vars.json; fi


RUN $HOME/.nvm/nvm.sh && \
    source $HOME/.nvm/nvm.sh && \
    nvm install && \
    nvm use && \
    NODE_PATH=$HOME/.nvm/v$NODE_VERSION/lib/node_modules && \
    PATH=$HOME/.nvm/v$NODE_VERSION/bin:$PATH && \
    node --version > nodeversion && \
    cp $HOME/.nvm/versions/node/$(cat nodeversion)/bin/node /usr/local/bin/ && \
    ln -s $HOME/.nvm/versions/node/$(cat nodeversion)/bin/npm /usr/local/bin/npm && \
    npm install && \
    npm run clean-coverage

RUN ln -fs /dev/stdout /opt/${MICROSERVICE}/server.log

EXPOSE 3000

CMD [ "npm", "run", "start" ]
