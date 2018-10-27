#!/bin/bash

CONTAINER_NAME="kibun-db"

echo "update PostgreSQL Docker image"
docker pull postgres

if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
    echo "stop container"
    docker stop ${CONTAINER_NAME}
fi

if [ "$(docker ps -aq -f status=exited -f name=${CONTAINER_NAME})" ]; then
    echo "delete container"
    docker rm ${CONTAINER_NAME}
fi

echo "start container"
docker run --name ${CONTAINER_NAME} -e POSTGRES_PASSWORD=mysecretpassword -d postgres
