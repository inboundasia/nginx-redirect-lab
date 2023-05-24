FROM nginx

COPY abc /usr/share/nginx/abc
COPY efg /usr/share/nginx/efg
COPY nginx.conf /etc/nginx/conf.d/default.conf