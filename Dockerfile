FROM vatusa/nginx

WORKDIR /www

COPY ./dist /www
COPY ./docker /
