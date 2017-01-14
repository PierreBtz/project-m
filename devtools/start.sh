#!/usr/bin/env bash

docker run --name project-m-nginx -p 80:80 --net="host" -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro -d nginx:1.11.8-alpine