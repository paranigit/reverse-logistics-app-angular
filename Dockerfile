FROM registry.access.redhat.com/ubi8/nginx-118
# add app
COPY dist /opt/app-root/src
# start app
CMD nginx -g "daemon off;"