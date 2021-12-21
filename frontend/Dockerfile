FROM node:12

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app
RUN yarn  build

RUN apt update -y \
    # && apt install nginx -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    # && apt-get update -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean

EXPOSE 8000
EXPOSE 35729


ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]
