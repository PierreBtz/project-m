#!/usr/bin/env bash

docker run --rm --name project-m-nginx -p 80:80 --net="host" -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro  nginx:1.11.8-alpine
