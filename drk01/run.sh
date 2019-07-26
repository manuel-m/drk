
REGISTRY=localhost:5000
APP_NAME=drk/drk01
MANIFEST_DIR=/var/lib/rancher/k3s/server/manifests

docker build -t ${APP_NAME} . &&\
docker tag ${APP_NAME} ${REGISTRY}/${APP_NAME} && \
docker push ${REGISTRY}/${APP_NAME} && \


sudo kubectl apply -f k8s


